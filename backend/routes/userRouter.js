import express from "express";
import protect from "../middleware/authMiddleware.js";
import { getUserById, loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/data',protect,getUserById);

export default userRouter