const fs = require("fs");
const path = require("path")

const softDeleteFile = (filePath, trashDir = "./trash") => {
  if (fs.existsSync(filePath)) {
    if (!fs.existsSync(trashDir)) {
      fs.mkdirSync(trashDir, { recursive: true });
    }

    // Generate a timestamp for unique file naming
    const timestamp = new Date().toISOString().replace(/[-T:]/g, "_").split(".")[0];
    const fileExt = path.extname(filePath);
    const fileName = path.basename(filePath, fileExt);

    // Move old file to trash with timestamp
    const trashPath = path.join(trashDir, `${fileName}_${timestamp}${fileExt}`);
    fs.renameSync(filePath, trashPath);

    console.log(`Soft deleted existing file: ${filePath} -> ${trashPath}`);
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
 * Gets the componentStore Object from crisp-solutions
 *
 * @param {string} path path of componentStore.tsx
 * @returns {obj | null} Json Obj or null
 *
 */
const componentStore = (path) => {
  try {
    let data = fs.readFileSync(path, "utf-8");
    data = data.replaceAll("\n", "--newline--");
    data = data.replace(/export interface Component.*?\}/g, "");
    data = data.replace(/export const componentStore: Record<string, Component> =/g, "");
    data = data.replace(/;$/g, "");
    data = convertToJsonString(data);
    data = data.replace(/(--newline--\s+)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
    data = data.replace(/'(.*?)'/g, (match, innerVal) => {
      // Escape any double quotes inside the single-quoted string.
      const escapedValue = innerVal.replace(/"/g, '\\"');
      return `"${escapedValue}"`;
    });
    data = data.replace(/--newline--\s+/g, "--newline--");
    // data = data.replace(/--newline--\},/g, "--newline--}");
    data = data.replace(/,--newline--}/g, "--newline--}");
    data = data.replace(";", "");

    data = data.replaceAll("--newline--", "\n");
    try {
      fs.writeFileSync("/Users/illmonk/fileChanger/outputs/output.txt", data);
      fs.writeFileSync("/Users/illmonk/fileChanger/outputs/output.json", data);
    } catch (error) {}

    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return;
  }
};

// TODO:
// have to fix the spacing such that i am tragting the ,   } differently so that im not
// eliminating the spaces completely

/**
 * Gets the groupStore Object from crisp-solutions
 *
 * @param {string} path path of componentGroupStore.tsx
 * @returns {obj | null} Json Obj or null
 */
const groupStore = (path) => {
  try {
    let data = fs.readFileSync(path, "utf-8");
    data = data.replaceAll("\n", "--newline--");
    data = data.replace(/export interface CompGroup.*?\}/g, "");
    data = data.replace(/export const componentGroupStore: Record<string, CompGroup> =/g, "");
    data = data.replace(/;$/g, "");
    data = data.replace(/(--newline--\s+)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
    data = data.replace(/'(.*?)'/g, (match, innerVal) => {
      // Escape any double quotes inside the single-quoted string.
      const escapedValue = innerVal.replace(/"/g, '\\"');
      return `"${escapedValue}"`;
    });
    data = data.replace(/\s/g, "");
    data = data.replaceAll(",--newline--}", "--newline--}");
    data = data.replaceAll("--newline--", "\n");
    data = data.replace(";", "");

    try {
      fs.writeFileSync("output.json", JSON.stringify(JSON.parse(data), null, 2));
    } catch (error) {
      console.error(error);
    }

    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return;
  }
};

/**
 * Pass the object store
 *
 * @param {object} obj
 * @param {string} path
 * @param {string} trashPath
 * @returns {string} tsx file string
 */

const updateCompStore = (obj, path, trashPath) => {
  const template = `export interface Component {
  componentId: string;
  parentId: string;
  name: string;
  props: Record<string, any>;
}

export const componentStore: Record<string, Component> = ${JSON.stringify(obj, null, 2)};`;

  try {
    softDeleteFile(path, trashPath);
    fs.writeFileSync(path, template);
  } catch (err) {
    console.log(err);
  }

  return template;
};

/**
 * Creates a GroupState file with an object
 *
 * @param {object} obj
 * @param {string} path
 * @param {string} trashPath
 * @returns {string} tsx file string
 */
const updateGroupStore = (obj, path, trashPath) => {
  const template = `export interface CompGroup {
  id: string;
  name: string;
  color: string;
  componentIds: string[];
}

export const componentGroupStore: Record<string, CompGroup> = ${JSON.stringify(obj, null, 2)};`;
  try {
    softDeleteFile(path, trashPath);
    fs.writeFileSync(path, template);
  } catch (err) {
    console.log(err);
  }
  return template;
};

module.exports = { componentStore, groupStore, updateCompStore, updateGroupStore };
