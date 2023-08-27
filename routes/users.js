const express = require("express");
const router = require("express.router");
const userController = require("../controllers/user_controller");
const postController = require('../controllers/post_controller');

router.get("/", userController.profile);
router.get('/post', postController.post);

module.exports = router;
