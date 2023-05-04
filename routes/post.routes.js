const express = require("express");
const {
  createPost,
  getAllPost,
  getOnePost,
  deletePost,
  findAndUpdate,
} = require("../controllers/post.controller");
const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPost);
router.get("/:id", getOnePost);
router.delete("/:id", deletePost);
router.put("/:id", findAndUpdate);

module.exports = router;
