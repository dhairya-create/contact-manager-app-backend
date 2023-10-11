const asyncHandler = require("express-async-handler");

//@dec Register a user
//@route GET /api/user/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@dec Login a user
//@route GET /api/user/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});

//@dec Current info user
//@route GET /api/user/login
//@access public

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user info" });
});

module.exports = { registerUser, loginUser, currentUser };
