const fs = require("fs");
const { getPropsFromTestProps, generateInterface, getPropVariableString, getGlobalProps } = require("./propManipulator");
const { purgeFile } = require("./purgeFile");
const { getAllImports } = require("./importChanger");

/**
 *
 * @param {string} file
 */
const addPropsToComponent = (file, compName, propsStr) => {
  let newFile = file;
  const regex = new RegExp(`const ${compName}:.*?\\<${compName}Props\\> = \\(props\\) => \\{`, "g");
  const match = file.match(regex);
  if (propsStr) {
    newFile = newFile.replaceAll(match, match + `\n  const { ${propsStr}, ...otherCSS } = props;`);
  } else {
    newFile = newFile.replaceAll(match, match + `\n  const { ...otherCSS } = props;`);
  }

  return newFile;
};

/**
 *
 * @param {string} file
 */
const arrayChanger = (file) => {
  let newFile = file;
  const arrays = newFile.match(/const \{ array: .*?\} = .*? as any;/g);
  if (!arrays) return file;
  arrays.forEach((arrStatement) => {
    const [_, varName, propName] = arrStatement.match(/const \{ array: (.*?)\} = (.*?) as any;/);
    newFile = newFile.replace(arrStatement, `const { array: ${varName}} = JSON.parse(${propName} as any);`);
  });

  return newFile;
};

/**
 *Change a tsx file into crisp-solution format
 *
 * @param {string} path
 * @param {string} componentName
 * @returns
 */

const componentFileChanger = (path, componentName) => {
  let newFileStr = "";
  try {
    const file = fs.readFileSync(path, "utf-8");
    // console.log(file);
    const { parsedProps: props } = getPropsFromTestProps(file);

    console.log("Props:\n\t", props); //console.log => Props

    // generate an interface based on keys
    const interface = generateInterface(componentName, props);

    const propTings = getPropVariableString(props);

    const globalProps = getGlobalProps(file);

    // console.log(globalProps);
    const imports = getAllImports(file);

    const purgedFile = purgeFile(file);

    const arrayChangedFile = arrayChanger(purgedFile);

    const fileBody = addPropsToComponent(arrayChangedFile, componentName, [propTings, globalProps].filter((i) => i).join(","));

    //Build the file
    //imports
    newFileStr += `${imports}\n`;

    newFileStr += `${interface}\n\n`;

    //fileBody
    newFileStr += `${fileBody}`;

    newFileStr += `\nexport default ${componentName};`;

    return { newFileStr, props: props };
  } catch (err) {
    console.error(err);
    return "Error";
  }
};

//file for an index.js
const changeIndexFile = (path) => {
  try {
    const file = fs.readFileSync(path, "utf-8");
    const imports = getAllImports(file);

    return imports;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { componentFileChanger, changeIndexFile, addPropsToComponent, arrayChanger };
