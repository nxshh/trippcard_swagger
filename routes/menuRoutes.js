const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router.post("/menu", menuController.getHeaderMenu);
router.post("/filter", menuController.getFilter);
router.post("/packages", menuController.getPackages);

module.exports = router;
