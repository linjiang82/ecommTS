import express from "express";
import authCtrl from "../controllers/authCtrl";

const router = express.Router();

router.route("/signup/").post(authCtrl.create);

export default router;
