const express = require("express");
const {
  createUser,
  getAllUser,
  getOneUser,
  deleteUser,
  findAndUpdate,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.put("/:id", findAndUpdate);

module.exports = router;
