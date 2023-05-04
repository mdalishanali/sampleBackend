require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const connectDb = require("./config/db");

connectDb();

const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

// middleware authenticate
// jwt - userLogged 
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(
    `Listening on Port ${port} and running in ${process.env.NODE_ENV}`
  );
});
