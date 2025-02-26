const db = require("../models/db/queries");
const getUsers = async (req, res) => {
  const search = req.query.search || "";
  console.log(req.query);
  const usernames = await db.getAllUsernames(search);
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};
const getNewUser = async (req, res) => {
  console.log(req.params);
  res.render("form");
};
const postNewUser = async (req, res) => {
  const { user } = req.body;
  await db.insertUsername(user);
  res.redirect("/");
};
const deleteUsers = async (req, res) => {
  await db.deleteUsernames();
  res.redirect("/");
};
module.exports = {
  getUsers,
  getNewUser,
  postNewUser,
  deleteUsers,
};
