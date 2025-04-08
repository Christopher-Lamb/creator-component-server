const fs = require("fs");

const writeFile = (filename, str) => {
  try {
    fs.writeFileSync(`/Users/illmonk/Documents/GitHub/Component Creator/server/utils/reactManipulator/outputs/${filename}`, str);
  } catch (error) {
    console.error(error);
  }
};

/**
 *
 * @param {string} objectString
 * @returns
 */
function convertToJsonString(objectString) {
  return objectString
    .replace(/`/g, '"') // Replace backticks with double quotes
    .replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":') // Ensure property keys are quoted
    .replace(/: (\w+)/g, ': "$1"') // Ensure unquoted string values are quoted
    .replace(/: "(true|false|null)"/g, ": $1"); // Preserve numbers, booleans, and null
}

/**
 * Resets array: [...] in Array attr returning a string thats parse safe
 * @param {*} obj 
 * @returns 
 */
function resetAndStringifyArrays(obj) {
  let clonedObj = JSON.parse(JSON.stringify(obj)); // Deep clone to avoid mutation

  for (const key in clonedObj) {
    if (key.endsWith("Array") && typeof clonedObj[key] === "object" && clonedObj[key] !== null) {
      if ("array" in clonedObj[key] && Array.isArray(clonedObj[key].array)) {
        clonedObj[key].array = []; // Empty the array

        // Convert the whole value of this key to a JSON string
        clonedObj[key] = JSON.stringify(clonedObj[key]);
      }
    }
  }

  return clonedObj;
}

/**
 *
 * @param {string} fileStr
 *
 *
 */
const getPropsFromTestProps = (fileStr) => {
  let data = fileStr;
  data = data.replaceAll("\n", "--newline--");
  let testProps = data.match(/const testProps = (\{.*?\};)/, "")[1];

  testProps = testProps.replace(/['`](.*?)['`]/g, (match, innerVal) => {
    // Escape any double quotes inside the single-quoted string.
    const escapedValue = innerVal.replace(/"/g, '\\"');
    return `"${escapedValue}"`;
  });

  testProps = testProps.replaceAll(/--newline--[ \s]*\/\/.*?(?=--newline--)/g, "");

  testProps = testProps.replaceAll(/,(--newline--\s*)([\}\]])/g, "$1$2");

  testProps = testProps.replace(/;$/, "");

  testProps = testProps.replaceAll("--newline--", "\n");
  testProps = convertToJsonString(testProps);

  writeFile("output(2).json", testProps);
  let parsedProps = {};
  try {
    parsedProps = JSON.parse(testProps);
    parsedProps = resetAndStringifyArrays(parsedProps);
  } catch (err) {
    console.log("Error parsing testProps");
    console.log(err);
    parsedProps = {};
  }

  return { propsString: JSON.stringify(parsedProps), parsedProps: parsedProps };
};

/**
 * Take props and component name and generate the interface for the react components props
 * @param {string} componentName
 * @param {object} props
 *
 * @returns {string} interface string
 */
const generateInterface = (componentName, props) => {
  let interfaceStr = `\ninterface ${componentName}Props {\n`;
  Object.keys(props).forEach((key) => {
    interfaceStr += `  ${key}: string;\n`;
  });
  interfaceStr += "};\n\n";
  return interfaceStr;
};

/**
 *
 * Remove any class attr and return array of strings
 *
 * @param {object} props
 * @returns {string}
 */
const getPropVariableString = (props) => {
  return Object.keys(props)
    .filter((propName) => !propName.endsWith("Class"))
    .join(", ");
};

/**
 *
 * @param {string} file
 */
const getGlobalProps = (file) => {
  let props = file.match(/  const {(.*?)} = props;/);
  if (props) {
    return props[1];
  } else {
    return "";
  }
};

module.exports = { getPropsFromTestProps, generateInterface, getPropVariableString, getGlobalProps, resetAndStringifyArrays };
