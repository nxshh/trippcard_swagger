const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");

router.post("/gallery", galleryController.getGallery);
router.post("/discounts/fetch", galleryController.getDiscounts);
router.post("/packages/details", galleryController.getPackagesDetails);

module.exports = router;
