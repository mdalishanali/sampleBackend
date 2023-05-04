const User = require("../models/user.model");

// crud
const createUser = async (req, res) => {
  try {
    const data = req.body;
    const user = await User.create(data);
    res.send(user).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllUser = async (req, res) => {
  try {
    // const page = req.query.page;
    // const size = req.query.pageSize;

    const users = await User.find().lean().exec();

    // const totalPages = Math.ceil((await User.countDocuments()) / size) || 1;
    const counts = await User.countDocuments();
    return res.send({ users, counts });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const data = req.params.id;
    const user = await User.findByIdAndDelete(data);
    res.send(user).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const data = req.params.id;
    const user = await User.findById(data);
    res.send(user).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findAndUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const user = await User.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.send(user).status(400);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getAllUser,
  getOneUser,
  deleteUser,
  findAndUpdate,
};
