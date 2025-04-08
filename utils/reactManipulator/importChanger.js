const globalComps = ["../CloudinaryImage", "../SvgComponent", "../AnimatedComponent", "../ContentComp", "../AnimatedContentComp"];

function containsAny(str, arr) {
  return arr.some((item) => str.includes(item));
}

/**
 *
 * @param {string} file
 * @returns
 */

const getAllImports = (file) => {
  //find all imports
  const importExports = file.match(/(import|export) (.*?) from \"(.*?)\";/g);

  const css = file.match(/const \{(.*?)\} = require\("\.\.\/\.\.\/\.\.\/utils\/tailwind-to-css\/index\.js"\);/);
  let newCss = "";
  if (css) {
    newCss = `const {${css[1]}} = require("../../utils/tailwind-to-css/index.js");`;
  }

  let importExportObj = {};

  // "route" : {route, default, identifiers,keyword}

  importExports.forEach((statement) => {
    const [_, impExp, identifierStr, pathStr] = statement.match(/(import|export) (.*?) from "(.*?)"/);
    const id = impExp + "-" + pathStr;

    if (containsAny(pathStr, globalComps)) {
      let comp = pathStr.replaceAll(/[\.\/]/g, "");
      let globalId = impExp + "-" + "../";
      if (globalId in importExportObj) {
        importExportObj[globalId].identifiers.push(comp);
      } else {
        importExportObj[globalId] = { keyword: impExp, pathStr: "../", defaultVal: "", identifiers: [comp] };
      }

      return;
    }

    //Default and Brackets
    if (identifierStr.match(/^[a-zA-Z0-9]+, \{.*?\}$/)) {
      const [_, defaultVal, identifiers] = identifierStr.match(/^([a-zA-Z0-9]+), \{(.*?)\}$/);
      let identifierArr = identifiers.split(",").map((i) => i.trim());

      if (id in importExportObj) {
        const prevIdentifiers = importExportObj[id].identifiers;
        identifierArr = [...identifierArr, ...identifierArr.filter((i) => !prevIdentifiers.includes(i))];
        importExportObj[id] = { ...importExportObj[id], defaultVal, identifiers: identifierArr };
      } else {
        importExportObj[id] = { keyword: impExp, pathStr, defaultVal, identifiers: identifierArr };
      }
    }
    //Just Brackets
    else if (identifierStr.match(/^\{.*?\}$/)) {
      const [_, identifiers] = identifierStr.match(/^\{(.*?)\}$/);
      let identifierArr = identifiers.split(",").map((i) => i.trim());

      if (id in importExportObj) {
        const prevIdentifiers = importExportObj[id].identifiers;
        identifierArr = [...identifierArr, ...identifierArr.filter((i) => !prevIdentifiers.includes(i))];
        importExportObj[id] = { ...importExportObj[id], identifiers: identifierArr };
      } else {
        importExportObj[id] = { keyword: impExp, pathStr, defaultVal: "", identifiers: identifierArr };
      }
    }
    //Just Default
    else if (identifierStr.match(/^[a-zA-Z0-9]+$/)) {
      if (id in importExportObj) {
        importExportObj[id] = { ...importExportObj[id], defaultVal: identifierStr };
      } else {
        importExportObj[id] = { keyword: impExp, pathStr, defaultVal: identifierStr, identifiers: [] };
      }
    }
  });

  let exportOnlys = [];

  const exportOnlysMatches = file.match(/export \{.*?\};/g);
  if (exportOnlysMatches) {
    exportOnlysMatches.forEach((exportOnly) => {
      let items = exportOnly.match(/export \{(.*?)\};/);
      if (!items) return;

      let exportArr = items[1].split(",").map((i) => i.replaceAll(/[\{\}]/g, "").trim());
      exportArr.forEach((e) => {
        if (!exportOnlys.includes(e)) {
          exportOnlys.push(e);
        }
      });
    });
  }

  let finalStr = "";

  //Add Css
  if (newCss) {
    finalStr += newCss + "\n";
  }

  //Build the imports
  Object.values(importExportObj).forEach(({ keyword, pathStr, defaultVal, identifiers }) => {
    // Change path from ../../../ to ../../
    const newPath = pathStr.replaceAll("../../../", "../../");

    if (identifiers.length > 0 && defaultVal) {
      finalStr += `${keyword} ${defaultVal}, { ${identifiers.join(", ")} } from "${newPath}";\n`;
    } else if (defaultVal && !identifiers.length > 0) {
      finalStr += `${keyword} ${defaultVal} from "${newPath}";\n`;
    } else if (!defaultVal && identifiers.length > 0) {
      finalStr += `${keyword} { ${identifiers.join(", ")} } from "${newPath}";\n`;
    }
  });

  if (exportOnlys.length > 0) {
    finalStr += `export { ${exportOnlys.join(", ")} };`;
  }

  return finalStr;
};

module.exports = { getAllImports };
