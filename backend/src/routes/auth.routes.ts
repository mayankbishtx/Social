import { Router } from "express";
import { getMe, login, logout, refreshToken, register } from "../controllers/auth.controller";
import { validateLogin, validateRegister } from "../validators/auth.validator";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/register",validateRegister, register);
router.post("/login", validateLogin, login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/me",authMiddleware, getMe);

export default router;