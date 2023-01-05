const express = require("express");
const router = express.Router();


// import controllers
const UserController = require("../../controllers/user-controller");

router.post('/signup', UserController.create);

module.exports = router;