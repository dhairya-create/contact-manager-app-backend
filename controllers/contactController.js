const asyncHandler = require("express-async-handler");

//@dec Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Getting all the contacts" });
});

//@dec Create new contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log("The output will be: ", req.body);

  //destructuring
  const { name, phone, email } = req.body;
  if (!name || !phone || !email) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create a new contacts" });
});

//@dec Get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Getting contact for ${req.params.id}` });
});

//@dec Update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updating contact for ${req.params.id}` });
});

//@dec Delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleting contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
