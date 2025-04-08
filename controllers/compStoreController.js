const fs = require("fs");
const path = require("path");
const { convertDirectory, componentStore, groupStore, updateCompStore, updateGroupStore } = require("../utils/reactManipulator");

//Crisp Solutions Vars
const compStorePath = "/Users/illmonk/Documents/GitHub/crisp-solutions/src/json/componentStore.ts";
const groupStorePath = "/Users/illmonk/Documents/GitHub/crisp-solutions/src/json/componentGroupStore.ts";
const destPath = "/Users/illmonk/Documents/GitHub/crisp-solution-backend/components";

// Backend testing locations
// const groupStorePath = "/Users/illmonk/Documents/GitHub/Component Creator/server/stores/componentGroupStore.ts";
// const compStorePath = "/Users/illmonk/Documents/GitHub/Component Creator/server/stores/componentStore.ts";
// const destPath = "/Users/illmonk/Documents/GitHub/Component Creator/server/destination";

//Same locations reguardless
const srcPath = "/Users/illmonk/Documents/GitHub/Component Creator/public/src/components";
const trashPath = "/Users/illmonk/Documents/GitHub/Component Creator/server/trash";

const softDeleteDirectory = (dirPath, trashDir = "./trash") => {
  try {
    if (!fs.existsSync(dirPath)) {
      console.log(`Directory does not exist: ${dirPath}`);
      return;
    }

    // Ensure the trash directory exists
    if (!fs.existsSync(trashDir)) {
      fs.mkdirSync(trashDir, { recursive: true });
    }

    // Get current timestamp in a readable format (YYYY-MM-DD_HH-MM-SS)
    const timestamp = new Date().toISOString().replace(/[-T:]/g, "_").split(".")[0];

    // Generate the new trash path with timestamp
    const dirName = path.basename(dirPath);
    const trashPath = path.join(trashDir, `${dirName}_${timestamp}`);

    // Move directory to trash with timestamp
    fs.renameSync(dirPath, trashPath);
    console.log(`Soft deleted directory: ${dirPath} -> ${trashPath}`);
  } catch (error) {
    console.error(`Error soft deleting ${dirPath}:`, error);
  }
};

const compStorController = {
  addComponent: async (req, res) => {
    const { group, component } = req.body;
    if (!group && !component) return res.status(500).send("No Group and No Component");
    if (!component) return res.status(500).send("No Component");
    if (!group) return res.status(500).send("No Group");

    try {
      const props = convertDirectory(group, component, srcPath, destPath, `${trashPath}/components`);
      // console.log(formattedProps);

      // Get Comp store add comp to it update tsx file
      let compStore = componentStore(compStorePath);
      compStore[component] = { componentId: component, parentId: group.toLowerCase(), name: component, props: props };
      updateCompStore(compStore, compStorePath, `${trashPath}/componentStore`);

      //Get groupStore if component in group do nothing else add to group array
      let groupStoreObj = groupStore(groupStorePath);
      const groupName = group.toLowerCase();
      let groupObj = groupStoreObj[groupName];
      if (groupObj) {
        let compIds = groupObj?.componentIds;
        if (compIds) {
          if (!compIds.includes(component)) {
            groupObj.componentIds = [...compIds, component];
          }
        }
      } else {
        //No group stored in store create one
        groupStoreObj[groupName] = { id: groupName, name: group, color: "#ffffff", componentIds: [component] };
      }
      updateGroupStore(groupStoreObj, groupStorePath, `${trashPath}/componentGroupStore`);
      res.send("Component Created");
    } catch (err) {
      console.error(err);
      res.status(500).send("Component Creation Fail");
    }
  },
  deleteComponent: async (req, res) => {
    const { group, component } = req.body;
    if (!group && !component) return res.status(500).send("No Group and No Component");
    if (!component) return res.status(500).send("No Component");
    if (!group) return res.status(500).send("No Group");

    try {
      // Get Comp store delete comp to it update tsx file
      let compStore = componentStore(compStorePath);
      delete compStore[component];
      updateCompStore(compStore, compStorePath, `${trashPath}/componentStore`);

      //get groupStore delete comp from group compIds
      let groupStoreObj = groupStore(groupStorePath);
      const groupName = group.toLowerCase();
      let groupObj = groupStoreObj[groupName];
      if (groupObj) {
        let compIds = groupObj?.componentIds;
        if (compIds) {
          let newCompIds = compIds.filter((i) => i !== component);
          groupObj.componentIds = newCompIds;
        }
      }
      updateGroupStore(groupStoreObj, groupStorePath, `${trashPath}/componentGroupStore`);

      softDeleteDirectory(`${destPath}/${component}`, `${trashPath}/components`);
      res.send("Component Deleted");
    } catch (err) {
      console.error(err);
      res.status(500).send("Component Failed Deletion");
    }
  },
  getComponentIds: async (req, res) => {
    const { group } = req.body;
    if (!group) return res.status(500).send("No Group");
    try {
      let groupStoreObj = groupStore(groupStorePath);
      const groupName = group.toLowerCase();
      let groupObj = groupStoreObj[groupName];

      if (groupObj) {
        let compIds = groupObj?.componentIds;
        if (compIds) {
          res.json(compIds);
        }
      }
      updateGroupStore(groupStoreObj, groupStorePath, `${trashPath}/componentGroupStore`);
    } catch (err) {
      console.error(err);
      res.status(500).send("No Group Found");
    }
  },
  setComponentIds: async (req, res) => {
    const { group, componentIds } = req.body;
    if (!group) return res.status(500).send("No Group");
    try {
      let groupStoreObj = groupStore(groupStorePath);
      const groupName = group.toLowerCase();
      let groupObj = groupStoreObj[groupName];

      if (groupObj) {
        groupObj.componentIds = componentIds;
      }

      updateGroupStore(groupStoreObj, groupStorePath, `${trashPath}/componentGroupStore`);
      res.send("Successfully updated store");
    } catch (err) {
      console.error(err);
      res.status(500).res.send("Could not set Component Ids for " + group);
    }
  },
  getGroup: async (req, res) => {
    const { group } = req.body;
    if (!group) return res.status(500).send("No Group");

    try {
      let groupStoreObj = groupStore(groupStorePath);
      const groupName = group.toLowerCase();

      let groupObj = groupStoreObj[groupName];

      res.status(200).json(groupObj);
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to get a group");
    }
  },
  deleteGroup: async (req, res) => {
    const { group } = req.body;
    if (!group) return res.status(500).send("No Group");

    try {
      let groupStoreObj = groupStore(groupStorePath);
      const groupName = group.toLowerCase();
      delete groupStoreObj[groupName];
      updateGroupStore(groupStoreObj, groupStorePath, `${trashPath}/componentGroupStore`);

      res.send("Successfully Deleted Group");
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to delete group");
    }
  },
  updateGroup: async (req, res) => {
    const { group, color, componentIds } = req.body;
    if (!color || !componentIds || !group) return res.status(500).send("No Color or No comp ids");

    try {
      let groupStoreObj = groupStore(groupStorePath);
      const groupName = group.toLowerCase();
      const groupObj = groupStoreObj[groupName];

      groupStoreObj[groupName] = { ...groupObj, color: color, componentIds: componentIds };

      updateGroupStore(groupStoreObj, groupStorePath, `${trashPath}/componentGroupStore`);

      res.send("Successfully updated Group");
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to update group");
    }
  },
};

module.exports = { ...compStorController };

// const req = { body: { group: "Forms", component: "FormFloating", componentIds: ["Forms"] } };
// const res = {
//   send: (val) => {
//     console.log(val);
//   },
//   json: (val) => {
//     console.log(val);
//   },
//   status: () => {},
// };

// compStorController.deleteComponent(req, res);

// compStorController.getComponentIds(req, res);
// compStorController.setComponentIds(req, res);
// compStorController.deleteGroup(req, res);

// const store = componentStore(compStorePath);
// console.log(store);
