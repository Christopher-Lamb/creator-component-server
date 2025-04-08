const express = require("express");
const router = express.Router();
const { addComponent, deleteComponent, setComponentIds, getComponentIds, deleteGroup, getGroup, updateGroup } = require("../../controllers/compStoreController");

router.post("/add-component", addComponent);
router.post("/delete-component", deleteComponent);
router.post("/set-component-ids", setComponentIds);
router.post("/get-component-ids", getComponentIds);

router.post("/get-group", getGroup);
router.post("/delete-group", deleteGroup);
router.post("/update-group", updateGroup);

module.exports = router;
