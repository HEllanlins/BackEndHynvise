const express = require('express');
const {
  getSites,
  postSite,
  deleteSite,
  putSite,
} = require('../controllers/siteController');

const router = express.Router();

router.get("/sites", getSites);
router.post("/sites", postSite);
router.delete("/sites/:id", deleteSite);
router.put("/sites/:id", putSite);

module.exports = router;
