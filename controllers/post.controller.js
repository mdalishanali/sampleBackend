const Post = require("../models/post.model");

const createPost = async (req, res) => {
  try {
    const data = req.body;
    const post = await Post.create(data);
    res.send(post).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllPost = async (req, res) => {
  try {
    // const page = req.query.page;
    // const size = req.query.pageSize;

    const posts = await Post.find().populate("author").lean().exec();

    // const totalPages = Math.ceil((await Post.countDocuments()) / size) || 1;
    const counts = await Post.countDocuments();
    return res.send({ posts, counts });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const data = req.params.id;
    const post = await Post.findByIdAndDelete(data);
    res.send(post).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOnePost = async (req, res) => {
  try {
    const data = req.params.id;
    const post = await Post.findById(data);
    res.send(post).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findAndUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const post = await Post.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.send(post).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createPost,
  getAllPost,
  getOnePost,
  deletePost,
  findAndUpdate,
};
