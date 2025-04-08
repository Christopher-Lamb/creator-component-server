function removeInterfacePattern(str, interfaceName) {
  // Create a dynamic regex pattern
  const regex = new RegExp(`--newline--interface ${interfaceName} \{.*?\}--newline--`, "gs");

  // Replace occurrences with an empty string
  return str.replace(regex, "");
}

/**
 *
 * @param {string} file
 * @returns {string} purged file
 */
const purgeFile = (file) => {
  let newFile = file;

  newFile = newFile.replaceAll("\n", "--newline--");

  newFile = removeInterfacePattern(newFile, "FormFloatingProps");

  newFile = newFile.replaceAll(/--newline--const testProps = \{.*?\};--newline--/g, "");

  // Target props and testProps
  // Things breakdown when something is placed above them the fix for this will be commented out for until it breaks lmao
  // newFile = newFile.replaceAll(/--newline--\s*const\s*\{[^}]*\}\s*=\s*props;--newline--/g, "--newline--");
  // newFile = newFile.replaceAll(/--newline--\s*const\s*\{[^}]*\}\s*=\s*testProps;--newline--/g, "--newline--");

  newFile = newFile.replace(/--newline--  const \{.*?\} = props;--newline--/, "--newline--");
  newFile = newFile.replace(/--newline--  const \{.*?\} = testProps;--newline--/, "--newline--");

  newFile = newFile.replaceAll(/^(export|import).*?;--newline--/g, "--newline--");
  newFile = newFile.replaceAll(/--newline--(export|import).*?;--newline--/g, "");

  newFile = newFile.replaceAll("--newline--", "\n");

  return newFile;
};

module.exports = { purgeFile };
