const fs = require("fs");
const path = require("path");
const { changeIndexFile, componentFileChanger, arrayChanger } = require("./fileChanger");

const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
};

const copyDirRecursive = (srcDir, destDir) => {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.readdirSync(srcDir).forEach((entry) => {
    const srcEntry = path.join(srcDir, entry);
    const destEntry = path.join(destDir, entry);
    if (fs.statSync(srcEntry).isDirectory()) {
      copyDirRecursive(srcEntry, destEntry);
    } else {
      fs.copyFileSync(srcEntry, destEntry);
    }
  });
};

const softDeleteDir = (dirPath, trashDir = "./trash") => {
  if (fs.existsSync(dirPath)) {
    if (!fs.existsSync(trashDir)) {
      fs.mkdirSync(trashDir, { recursive: true });
    }

    // Generate timestamp for directory renaming (YYYY-MM-DD_HH-MM-SS)
    const timestamp = new Date().toISOString().replace(/[-T:]/g, "_").split(".")[0];

    // Get directory name and create a new trash path with timestamp
    const dirName = path.basename(dirPath);
    const trashPath = path.join(trashDir, `${dirName}_${timestamp}`);

    // Move the entire directory to trash
    fs.renameSync(dirPath, trashPath);

    console.log(`Soft deleted directory: ${dirPath} -> ${trashPath}`);
  } else {
    try {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created directory: ${dirPath}`);
    } catch (err) {
      console.error(err);
    }
  }
};

/**
 * Format a group into crisp solution digestable from a src and copy it to a dest
 *
 * @param {string} groupName
 * @param {string} compName
 * @param {string} srcPath src of creatorComponent Directory
 * @param {string} destPath path where new Directory will be
 *
 * @returns {object} Resulting Props from file
 */
const convertDirectory = (groupName, compName, srcPath, destPath, trashDir) => {
  //get directory in question
  try {
    let returnProps = {};
    //loop through array of dir content to find compName and an index
    // direguard any .files
    const dirPath = `${srcPath}/${groupName}/${compName}`;
    let files = fs.readdirSync(dirPath).filter((fileName) => !fileName.startsWith("."));

    let toAddObj = {};

    console.log("Files", files);

    // Loop through each file in src directory and convert it
    // we are also grabbing props from "main file" testProps
    files.forEach((file) => {
      // Src path of current file in files array / src directory
      const relevantPath = srcPath + `/${groupName}/${compName}/${file}`;

      // Main file
      //These Ifs are only for if we need to change something in the file
      if (file === compName + ".tsx") {
        const { newFileStr, props } = componentFileChanger(relevantPath, compName);
        returnProps = props;
        toAddObj[compName + ".tsx"] = newFileStr;
        // Index specific changes
      } else if (file === "index.tsx") {
        const indexStr = changeIndexFile(relevantPath);
        toAddObj["index.tsx"] = indexStr;
        //All files ending in .tsx just changing const {array: ex } = array as any
      } else if (file.endsWith(".tsx")) {
        //place to enact on all other files such as changing parsing lohic
        const fileStr = fs.readFileSync(relevantPath, "utf-8");
        const newFile = arrayChanger(fileStr);
        toAddObj[file] = newFile;
      }
    });

    softDeleteDir(destPath + `/${compName}`, trashDir);

    ensureDirectoryExists(destPath + `/${compName}`);

    Object.entries(toAddObj).forEach(([fileName, fileStr]) => {
      const newPath = `${destPath}/${compName}/${fileName}`;
      fs.writeFileSync(newPath, fileStr);
    });
    files = files.filter((fileName) => !Object.keys(toAddObj).includes(fileName));

    files.forEach((fileName) => {
      const src = path.join(srcPath, groupName, compName, fileName);
      const dest = path.join(destPath, compName, fileName);
      if (fs.statSync(src).isDirectory()) {
        copyDirRecursive(src, dest);
      } else {
        fs.copyFileSync(src, dest);
      }
    });

    return returnProps;
  } catch (err) {
    throw err;
  }
};

module.exports = { convertDirectory };

// convertDirectory("Cards", "NumberedDivs");
// convertDirectory("Cards", "ContentCard");
// convertDirectory("Phony", "PhonyComponent");
// convertDirectory("Forms", "FormFloating");
