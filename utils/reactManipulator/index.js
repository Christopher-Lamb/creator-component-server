const fs = require("fs");
const { componentStore, groupStore, updateCompStore, updateGroupStore } = require("./objectStorage");
const { getPropsFromTestProps, generateInterface, filterClassAttr, getGlobalProps, addPropsToComponent } = require("./propManipulator");
const { purgeFile } = require("./purgeFile");
const { getAllImports } = require("./importChanger");
const { changeIndexFile, componentFileChanger } = require("./fileChanger");
const { convertDirectory } = require("./dirChanger");

module.exports = {
  componentStore,
  updateGroupStore,
  groupStore,
  componentStore,
  groupStore,
  getPropsFromTestProps,
  generateInterface,
  filterClassAttr,
  getGlobalProps,
  addPropsToComponent,
  getAllImports,
  purgeFile,
  changeIndexFile,
  componentFileChanger,
  updateCompStore,
  convertDirectory,
};
