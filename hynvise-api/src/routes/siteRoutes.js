import express from "express";
import {
  getSites,
  postSite,
  deleteSite,
  putSite
} from "../controllers/siteController.js";

const router = express.Router();

router.get("/sites", getSites);
router.post("/sites", postSite);
router.delete("/sites/:id", deleteSite);
router.put("/sites/:id", putSite);

export default router;
