module.exports = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Trippcard API",
    description: "Packages endpoints: Gallery & Discounts"
  },
  basePath: "/api/packages",
  tags: [
    {
      name: "Packages - Gallery",
    }
  ],
  paths: {
    "/gallery": {
      post: {
        tags: ["Packages - Gallery"],
        summary: "Get gallery images for a package",
        description: "Retrieve detailed images for a given package, from and to location.",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Package ID and locations",
            required: true,
            schema: {
              type: "object",
              properties: {
                Packeges_id: { type: "integer", example: 12344 },
                from: { type: "string", example: "ban" },
                To: { type: "string", example: "goa" }
              },
              required: ["Packeges_id", "from", "To"]
            }
          }
        ],
        responses: {
  200: {
    description: "Gallery retrieved successfully",
    schema: {
      type: "object",
      properties: {
        imageDetail: {
          type: "object",
          properties: {
            images: {
              type: "array",
              example: [
                {
                  "name": "Luxurious Honeymoon in Goa-50962.png",
                  "title": "Luxurious Honeymoon in Goa",
                  "path": "/cities/1328",
                  "day": 0,
                  "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Luxurious Honeymoon in Goa-50962.png"
                },
                {
                  "name": "Goa Beach.jpeg",
                  "title": "",
                  "path": "/cities/1328",
                  "day": 1,
                  "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Goa Beach.jpeg"
                },
                {
                  "name": "Ozran Vagator Beach Goa.jpg",
                  "title": "",
                  "path": "/cities/1328",
                  "day": 1,
                  "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Ozran Vagator Beach Goa.jpg"
                },
                {
                  "name": "Luxurious Honeymoon in Goa.png",
                  "title": "Luxurious Honeymoon",
                  "path": "/cities/1328",
                  "day": 1,
                  "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Luxurious Honeymoon in Goa.png"
                },
                {
                  "name": "M.jpg",
                  "path": "/cities/1328",
                  "day": 2,
                  "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/M.jpg"
                },
                {
                  "name": "S.jpg",
                  "path": "/cities/1328",
                  "day": 2,
                  "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/S.jpg"
                },
                {
                  "name": "N.jpg",
                  "path": "/cities/1328",
                  "day": 3,
                  "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/N.jpg"
                },
                {
                  "name": "ZI.jpg",
                  "path": "/cities/1328",
                  "day": 3,
                  "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/ZI.jpg"
                }
              ]
            },
            gallery: {
              type: "array",
              example: [
                {
                  "type": "CATEGORY",
                  "components": [
                    {
                      "type": "CITY",
                      "components": [
                        {
                          "type": "IMAGE",
                          "category": "Around the Destination",
                          "path": "/cities/1328",
                          "day": 1,
                          "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Goa Beach.jpeg",
                          "city": "Goa",
                          "imageDescription": "",
                          "travellerMedia": false,
                          "packageHighlight": false
                        },
                        {
                          "type": "IMAGE",
                          "category": "Around the Destination",
                          "path": "/cities/1328",
                          "day": 1,
                          "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Ozran Vagator Beach Goa.jpg",
                          "city": "Goa",
                          "imageDescription": "",
                          "travellerMedia": false,
                          "packageHighlight": false
                        },
                        {
                          "type": "IMAGE",
                          "category": "Around the Destination",
                          "path": "/cities/1328",
                          "day": 1,
                          "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Luxurious Honeymoon in Goa.png",
                          "city": "Goa",
                          "imageDescription": "Luxurious Honeymoon",
                          "travellerMedia": false,
                          "packageHighlight": false
                        },
                        {
                          "type": "IMAGE",
                          "category": "Around the Destination",
                          "path": "/cities/1328",
                          "day": 2,
                          "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/M.jpg",
                          "city": "Goa",
                          "travellerMedia": false,
                          "packageHighlight": false
                        },
                        {
                          "type": "IMAGE",
                          "category": "Around the Destination",
                          "path": "/cities/1328",
                          "day": 2,
                          "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/S.jpg",
                          "city": "Goa",
                          "travellerMedia": false,
                          "packageHighlight": false
                        },
                        {
                          "type": "IMAGE",
                          "category": "Around the Destination",
                          "path": "/cities/1328",
                          "day": 3,
                          "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/N.jpg",
                          "city": "Goa",
                          "travellerMedia": false,
                          "packageHighlight": false
                        },
                        {
                          "type": "IMAGE",
                          "category": "Around the Destination",
                          "path": "/cities/1328",
                          "day": 3,
                          "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/ZI.jpg",
                          "city": "Goa",
                          "travellerMedia": false,
                          "packageHighlight": false
                        }
                      ],
                      "title": "Goa"
                    }
                  ],
                  "title": "Around the Destination",
                  "thumbnail": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Goa Beach.jpeg",
                  "count": 7,
                  "id": "around_the_destination"
                },
                {
                  "type": "CATEGORY",
                  "components": [
                    {
                      "type": "CITY",
                      "components": [
                        {
                          "type": "PROPERTY",
                          "components": [
                            {
                              "type": "IMAGE",
                              "category": "Property",
                              "fullPath": "https://r1imghtlak.mmtcdn.com/08d7530a732011e783e6025f77df004f.jpg?&downsize=900:675&crop=900:675;56,0&output-format=jpg",
                              "imageDescription": "Lobby/Common Area",
                              "travellerMedia": false,
                              "packageHighlight": false
                            }
                          ],
                          "name": "Hard Rock Hotel Goa Calangute",
                          "roomType": "Rock Suite with Bathtub",
                          "rating": 5,
                          "checkIn": "07 September, 3 PM",
                          "checkOut": "10 September, 12 PM",
                          "city": "Goa"
                        }
                      ],
                      "title": "Goa"
                    }
                  ],
                  "title": "Property Photos",
                  "thumbnail": "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201302141837083549-2ccb73aa9fd711e9a00d0242ac110002.jpg?&downsize=740:435&crop=740:435;0,29&output-format=jpg",
                  "count": 59,
                  "id": "property_photos"
                },
                {
                  "type": "CATEGORY",
                  "components": [
                    {
                      "type": "CITY",
                      "components": [
                        {
                          "type": "IMAGE",
                          "name": "",
                          "category": "Activity",
                          "fullPath": "https://hldak.mmtcdn.com/prod-acme-image/system/product_media/o/ACME204487/Media_56638ACME204487.png",
                          "imageDescription": "Day 2: North and South Goa Sightseeing Combo - Private Transfers",
                          "travellerMedia": false,
                          "packageHighlight": false
                        }
                      ],
                      "title": "Goa"
                    }
                  ],
                  "title": "Activities & Sightseeing",
                  "thumbnail": "https://hldak.mmtcdn.com/prod-acme-image/system/product_media/o/ACME204487/Media_56638ACME204487.png",
                  "count": 3,
                  "id": "activities_and_sightseeing"
                }
              ]
            },
            gallerySections: {
              type: "array",
              example: [
                {
                  "id": "around_the_destination",
                  "title": "Around the Destination",
                  "galleryMedia": [
                    {
                      "mediaType": "IMAGE",
                      "mediaUrl": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/M.jpg"
                    }
                  ]
                },
                {
                  "id": "property_photos",
                  "title": "Property Photos",
                  "galleryMedia": [
                    {
                      "mediaType": "IMAGE",
                      "mediaUrl": "https://r1imghtlak.mmtcdn.com/08d7530a732011e783e6025f77df004f.jpg?&downsize=900:675&crop=900:675;56,0&output-format=jpg"
                    }
                  ]
                },
                {
                  "id": "activities_and_sightseeing",
                  "title": "Activities & Sightseeing",
                  "galleryMedia": [
                    {
                      "mediaType": "IMAGE",
                      "mediaUrl": "https://hldak.mmtcdn.com/prod-acme-image/system/product_media/o/ACME204487/Media_56638ACME204487.png"
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    }
  },
  400: {
    description: "Bad Request",
    schema: {
      type: "object",
      example: { message: "Invalid Package ID" }
    }
  }
}

      }
    },

    "/discounts/fetch": {
      post: {
        tags: ["Packages - Gallery"],
        summary: "Fetch discounts and coupons for a package",
        description: "Retrieve all available discounts, coupons, and special offers for a package.",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Package and channel details for fetching discounts",
            required: true,
            schema: {
              type: "object",
              properties: {
                channel: { type: "string", example: "B2CNLR" },
                website: { type: "string", example: "IN" },
                funnel: { type: "string", example: "HLD" },
                affiliate: { type: "string", example: "MMT" },
                lob: { type: "string", example: "Holidays" },
                packageId: { type: "integer", example: 59075 },
                dynamicPackageId: { type: "string", example: "680cbeac-3404-4978-b2a1-9274b5d906d6" },
                sections: { type: "array", items: { type: "string" }, example: ["DETAIL_COUPON_LIST", "MMT_BLACK"] },
                pageInfo: {
                  type: "object",
                  properties: {
                    pageName: { type: "string", example: "details" },
                    version: { type: "string", example: "V3" },
                    funnelType: { type: "string", example: "Holidays" }
                  },
                  required: ["pageName", "version", "funnelType"]
                },
                verIdentifier: { type: "string", example: "v3" }
              },
              required: ["channel","website","funnel","affiliate","lob","packageId","dynamicPackageId","sections","pageInfo","verIdentifier"]
            }
          }
        ],
       "responses": {
  "200": {
    "description": "Discounts fetched successfully",
    "schema": {
      "type": "object",
      "properties": {
        "statusCode": { "type": "integer", "example": 1 },
        "success": { "type": "boolean", "example": true },
        "paymentScheduleOptions": { "type": "object", "example": {} },
        "couponDetailSectionData": {
          "type": "object",
          "example": {
            "categoryCouponData": [
              {
                "categoryId": 4,
                "selected": true,
                "packageCouponOutputDetails": [
                  {
                    "moreVerificationRequired": false,
                    "doubleDiscountingAllowed": true,
                    "blockedPaymentOptions": "MMT_REWARD_BONUS_PM",
                    "status": "Coupon Applied successfully!",
                    "hybridDiscount": [
                      {
                        "discount": 5656,
                        "discountType": "Instant",
                        "discountTypeCode": "INSTANT",
                        "timeOfCredit": ""
                      }
                    ],
                    "discount": 5656,
                    "discountType": "PREBOOKING_OFFER",
                    "timeOfCredit": "",
                    "message": "Coupon Applied successfully!",
                    "paymentMessage": "Thank You!",
                    "recommendationMessage": "Grab Your Discount Before It’s Gone!",
                    "couponCode": "MMTHLD",
                    "baseCouponCode": "MMTHLD",
                    "tnc": "",
                    "couponExpiryDate": 1785522599,
                    "limitedTimeDeal": false,
                    "couponEndTime": "1970-01-21T21:28:42+05:30",
                    "extraDiscount": 1131.0,
                    "selected": false,
                    "isBestPromo": false,
                    "isSpecialPromo": false
                  },
                  {
                    "moreVerificationRequired": true,
                    "doubleDiscountingAllowed": true,
                    "blockedPaymentOptions": "MMT_REWARD_BONUS_PM",
                    "status": "Coupon Applied Successfully!",
                    "hybridDiscount": [
                      {
                        "discount": 22657,
                        "discountType": "Instant",
                        "discountTypeCode": "INSTANT",
                        "timeOfCredit": ""
                      }
                    ],
                    "discount": 22657,
                    "discountType": "POSTBOOKING_OFFER",
                    "timeOfCredit": "",
                    "message": "Coupon Applied Successfully!",
                    "paymentMessage": "Thank You!",
                    "recommendationMessage": "Grab Special Discounts upto 15% on No Cost EMI with Federal Bank Credit Cards*",
                    "couponCode": "FEDERALEMI",
                    "baseCouponCode": "FEDERALEMI",
                    "tnc": "",
                    "couponExpiryDate": 1759256999,
                    "limitedTimeDeal": false,
                    "couponEndTime": "1970-01-21T14:10:56+05:30",
                    "extraDiscount": 0.0,
                    "selected": false,
                    "isBestPromo": false,
                    "isSpecialPromo": false
                  },
                  {
                    "moreVerificationRequired": true,
                    "doubleDiscountingAllowed": true,
                    "blockedPaymentOptions": "WALLET_PM,MMT_REWARD_BONUS_PM",
                    "status": "Grab Upto 15% Off* with Axis Credit Cards",
                    "hybridDiscount": [
                      {
                        "discount": 17885,
                        "discountType": "Instant",
                        "discountTypeCode": "INSTANT",
                        "timeOfCredit": ""
                      }
                    ],
                    "discount": 17885,
                    "discountType": "POSTBOOKING_OFFER",
                    "timeOfCredit": "",
                    "message": "Grab Upto 15% Off* with Axis Credit Cards",
                    "paymentMessage": "Thank You!",
                    "recommendationMessage": "Grab Upto 15% Off* with No Cost EMI With Axis Credit Cards",
                    "couponCode": "AXISEMI",
                    "baseCouponCode": "AXISEMI",
                    "tnc": "",
                    "couponExpiryDate": 1757960999,
                    "limitedTimeDeal": false,
                    "couponEndTime": "1970-01-21T13:49:20+05:30",
                    "extraDiscount": 13360.0,
                    "selected": false,
                    "isBestPromo": false,
                    "isSpecialPromo": false
                  },
                  {
                    "moreVerificationRequired": true,
                    "doubleDiscountingAllowed": true,
                    "blockedPaymentOptions": "WALLET_PM,MMT_REWARD_BONUS_PM",
                    "status": "Grab Special Discounts upto 15% on No-cost EMI With Yes Bank Credit Cards*",
                    "hybridDiscount": [
                      {
                        "discount": 20391,
                        "discountType": "Instant",
                        "discountTypeCode": "INSTANT",
                        "timeOfCredit": ""
                      }
                    ],
                    "discount": 20391,
                    "discountType": "POSTBOOKING_OFFER",
                    "timeOfCredit": "",
                    "message": "Grab Special Discounts upto 15% on No-cost EMI With Yes Bank Credit Cards*",
                    "paymentMessage": "Grab special discounts upto 35% with Yes credit cards on EMI",
                    "recommendationMessage": "Grab Special Discounts upto 15% on No-cost EMI With Yes Bank Credit Cards*",
                    "couponCode": "MMTYESEMI",
                    "baseCouponCode": "MMTYESEMI",
                    "tnc": "",
                    "couponExpiryDate": 1759256999,
                    "limitedTimeDeal": false,
                    "couponEndTime": "1970-01-21T14:10:56+05:30",
                    "extraDiscount": 0.0,
                    "selected": false,
                    "isBestPromo": false,
                    "isSpecialPromo": false
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "400": {
    "description": "Bad Request",
    "schema": {
      "type": "object",
      "example": { "message": "Invalid request body" }
    }
  },
  "500": {
    "description": "Internal Server Error",
    "schema": {
      "type": "object",
      "example": { "message": "Something went wrong" }
    }
  }
}

      }
    },


    // dummy endpoint
    "/packages/details": {
      post: {
        tags: ["Packages - Gallery"],
        description: "Returns package details data.",
        summary: "Get package details",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Request body for details",
            required: true,
            schema: {
              type: "object",
              properties: {
                packageId: { type: "integer", example: 12345 }
              },
              required: ["packageId"]
            }
          }
        ],
        responses: {
          200: {
            description: "Package details retrieved successfully",
            schema: {
              type: "object",
              properties: {
                packageId: { type: "integer", example: 12345 },
                name: { type: "string", example: "Amazing Goa Getaway" },
                description: { type: "string", example: "A 5-day luxurious trip to Goa including stay, sightseeing, and activities." }
              }
            }
          },
          400: { description: "Bad Request", schema: { type: "object", example: { message: "Missing packageId" } } }
        }
      }
    }
  }
};
