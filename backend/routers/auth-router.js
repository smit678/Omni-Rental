const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth-controllers");
const {signupSchema, signinSchema} = require("../validators/auth-validator")
const validate = require("../middlewares/validate-middlware");
const { cars , info , booking , order} = require("../controllers/cars-controllers");
const { users } = require("../controllers/users-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authMiddleware,controller.home);


router.route("/register").post(validate(signupSchema), controller.register);

router.route("/login").post(validate(signinSchema),controller.login);

//router.route("/about").get(controller.about);

router.route("/feedback").post(controller.feedbackForm);



//this user for Analitycs section 
router.route("/user").get(users);

router.route("/cars").get(cars);
router.route("/cars/:id").get(info);
router.route("/cars/:id/booking").post(booking);
router.route("/orders/:id").get(order);

//for auth.jsx file 
router.route("/userd").get(authMiddleware,controller.user);

module.exports = router;