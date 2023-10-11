//@dec Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Getting all the contacts" });
};

//@dec Create new contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    console.log("The output will be: ",req.body);
  res.status(201).json({ message: "Create a new contacts" });
};

//@dec Get contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    
  res.status(200).json({ message: `Getting contact for ${req.params.id}` });
};

//@dec Update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Updating contact for ${req.params.id}` });
};

//@dec Delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Deleting contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
