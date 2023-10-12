const express = require("express");

const {
  registerUser,
  currentUser,
  loginUser,
} = require("../controllers/userController");

const validateToken = require("../middleware/validateTokenhandler");

//defing router
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken ,currentUser);

module.exports = router;
