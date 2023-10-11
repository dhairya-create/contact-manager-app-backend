const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoke")

//@dec Register a user
//@route GET /api/user/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  //destructuring the info coming from user

  const { username, email, password } = req.body;

  //Validating if any field is kept empty by the user
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvailable = await User.findOne({ email });

  //checking if user email already registered or not

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //Hashing the password
  const hashedPassword = await bcrpyt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);

  //Sending the reponse to the client side
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid!");
  }

  res.json({ message: "Register the user" });
});

//@dec Login a user
//@route GET /api/user/login
//@access public

const loginUser = asyncHandler(async (req, res) => {

    const {email,password} = req.body;

    //Checking if user have entered all the value
    if(!email || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }

  res.json({ message: "Login the user" });
});

//@dec Current info user
//@route GET /api/user/login
//@access public

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user info" });
});

module.exports = { registerUser, loginUser, currentUser };
