﻿const express = require("express");
const passport = require("passport");
const admin_controller = require("../controllers/adminController");
const Admin = require("../models/admin.model");
const router = express.Router();

router.get("/login", admin_controller.getLogin);

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

router.get("/logout", admin_controller.getLogout);

router.get("/add-admin", admin_controller.getAddAdmin);

router.post("/add-admin", admin_controller.postAddAdmin);

router.get("/profile", admin_controller.getProfile);

// edit profile
router.get("/edit-profile", admin_controller.getEditProfile);

router.post("/edit-profile", admin_controller.postEditProfile);

// // change password
router.get("/change-password", admin_controller.getChangePassword);

// // change password post
// //router.post("/change-password", AdminController.postChangePassword);

// // show all admin
// router.get("/", admin_controller.showAllAdmin);

module.exports = router;
