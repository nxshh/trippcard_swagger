module.exports = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Trippcard API",
    description: "Packages - Verify endpoints"
  },
  basePath: "/api/packages",
  tags: [
    {
      name: "Packages - Verify",
    }
  ],
  paths: {
    "/track": {
      post: {
        tags: ["Packages - Verify"],
        summary: "Track package status",
        description: "Track the status and progress of a holiday package.",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Tracking information",
            required: true,
            schema: {
              type: "object",
              properties: {
                packageId: { type: "integer", example: 12345 },
                userId: { type: "integer", example: 67890 }
              },
              required: ["packageId", "userId"]
            }
          }
        ],
        responses: {
          200: {
            description: "Tracking data retrieved successfully",
            schema: {
              type: "object",
              properties: {
                statusCode: { type: "integer", example: 1 },
                success: { type: "boolean", example: true },
                trackingInfo: { type: "object", example: { currentLocation: "Delhi", estimatedArrival: "2025-09-10" } }
              }
            }
          }
        }
      }
    },

    "/flight_availability": {
      post: {
        tags: ["Packages - Verify"],
        summary: "Check flight availability",
        description: "Get available flights for a specified route and date.",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Flight search parameters",
            required: true,
            schema: {
              type: "object",
              properties: {
                from: { type: "string", example: "DEL" },
                to: { type: "string", example: "BOM" },
                date: { type: "string", example: "2025-09-15" }
              },
              required: ["from", "to", "date"]
            }
          }
        ],
        responses: {
          200: {
            description: "Flight availability retrieved successfully",
            schema: {
              type: "object",
              properties: {
                statusCode: { type: "integer", example: 1 },
                success: { type: "boolean", example: true },
                flights: { type: "array", example: [{ flightNumber: "AI101", airline: "Air India", price: 5000 }] }
              }
            }
          }
        }
      }
    },

    "/hotel_suggestion": {
      post: {
        tags: ["Packages - Verify"],
        summary: "Get hotel suggestions",
        description: "Provide hotel suggestions based on destination and budget.",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Hotel search parameters",
            required: true,
            schema: {
              type: "object",
              properties: {
                destination: { type: "string", example: "Goa" },
                checkIn: { type: "string", example: "2025-10-01" },
                checkOut: { type: "string", example: "2025-10-05" },
                budget: { type: "integer", example: 10000 }
              },
              required: ["destination", "checkIn", "checkOut", "budget"]
            }
          }
        ],
        responses: {
          200: {
            description: "Hotel suggestions retrieved successfully",
            schema: {
              type: "object",
              properties: {
                statusCode: { type: "integer", example: 1 },
                success: { type: "boolean", example: true },
                hotels: { type: "array", example: [{ name: "Beach View Resort", pricePerNight: 2500 }] }
              }
            }
          }
        }
      }
    }
  }
};
