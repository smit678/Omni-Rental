const express = require("express");
const AdminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const routers = express.Router();



routers.route("/users").get(authMiddleware,adminMiddleware,AdminController.getAllUsers);

routers.route("/users/:id").get(authMiddleware,adminMiddleware,AdminController.getUserById);

routers.route("/users/update/:id").patch(authMiddleware,adminMiddleware,AdminController.updateUserById);

routers.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,AdminController.dleteUserById);

routers.route("/feedbacks").get(authMiddleware,adminMiddleware,AdminController.getAllFeedback);

routers.route("/feedbacks/delete/:id").delete(authMiddleware,adminMiddleware,AdminController.dleteFeedbackById);

routers.route("/cars").get(authMiddleware,adminMiddleware,AdminController.getAllCars);

routers.route("/cars/:id").get(authMiddleware,adminMiddleware,AdminController.getSingleCar);

routers.route("/cars/update/:id").patch(authMiddleware,adminMiddleware,AdminController.updateCarById);

routers.route("/cars/delete/:id").delete(authMiddleware,adminMiddleware,AdminController.dleteCarById);

module.exports = routers ;