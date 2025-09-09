const trackPackage = (req, res) => {
    const { packageId, userId } = req.body;

    if (!packageId || !userId) {
        return res.status(400).json({ message: "packageId and userId are required" });
    }

    return res.status(200).json({
        statusCode: 1,
        success: true,
        trackingInfo: {
            currentLocation: "Delhi",
            estimatedArrival: "2025-09-10"
        }
    });
};

const checkFlightAvailability = (req, res) => {
    const { from, to, date } = req.body;

    if (!from || !to || !date) {
        return res.status(400).json({ message: "from, to, and date are required" });
    }

    return res.status(200).json({
        statusCode: 1,
        success: true,
        flights: [
            { flightNumber: "AI101", airline: "Air India", price: 5000 }
        ]
    });
};

const suggestHotels = (req, res) => {
    const { destination, checkIn, checkOut, budget } = req.body;

    if (!destination || !checkIn || !checkOut || !budget) {
        return res.status(400).json({ message: "destination, checkIn, checkOut, and budget are required" });
    }

    return res.status(200).json({
        statusCode: 1,
        success: true,
        hotels: [
            { name: "Beach View Resort", pricePerNight: 2500 }
        ]
    });
};

module.exports = { trackPackage, checkFlightAvailability, suggestHotels };
