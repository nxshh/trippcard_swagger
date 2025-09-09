const express = require("express");
const router = express.Router();
const { trackPackage, checkFlightAvailability, suggestHotels } = require("../controllers/verifyController");

router.post("/track", trackPackage);
router.post("/flight_availability", checkFlightAvailability);
router.post("/hotel_suggestion", suggestHotels);

module.exports = router;
