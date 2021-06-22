import express from "express";
import vvCtrl from "../controllers/vvCtrl";

const router = express.Router();

router.route("/vv/device").get(vvCtrl.list);
router.route("/vv/icon").get(vvCtrl.icon);

export default router;
