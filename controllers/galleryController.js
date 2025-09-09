exports.getGallery = (req, res) => {
  const { Packeges_id, from, To } = req.body;

  if (!Packeges_id || !from || !To) {
    return res.status(400).json({ message: "Package ID, from, and To are required" });
  }

  const response = {
    imageDetail: {
      images: [
        {
          name: "Luxurious Honeymoon in Goa-50962.png",
          title: "Luxurious Honeymoon in Goa",
          path: "/cities/1328",
          day: 0,
          fullPath: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Luxurious Honeymoon in Goa-50962.png"
        },
        {
          name: "Goa Beach.jpeg",
          title: "",
          path: "/cities/1328",
          day: 1,
          fullPath: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Goa Beach.jpeg"
        },
        {
          name: "Ozran Vagator Beach Goa.jpg",
          title: "",
          path: "/cities/1328",
          day: 1,
          fullPath: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Ozran Vagator Beach Goa.jpg"
        }
      ],
      gallery: [
        {
          type: "CATEGORY",
          components: [
            {
              type: "CITY",
              components: [
                {
                  type: "IMAGE",
                  category: "Around the Destination",
                  path: "/cities/1328",
                  day: 1,
                  fullPath: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Goa Beach.jpeg",
                  city: "Goa",
                  imageDescription: "",
                  travellerMedia: false,
                  packageHighlight: false
                }
              ],
              title: "Goa"
            }
          ],
          title: "Around the Destination",
          thumbnail: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Goa Beach.jpeg",
          count: 1,
          id: "around_the_destination"
        }
      ],
      gallerySections: [
        {
          id: "around_the_destination",
          title: "Around the Destination",
          galleryMedia: [
            {
              mediaType: "IMAGE",
              mediaUrl: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Goa Beach.jpeg"
            }
          ]
        }
      ]
    }
  };

  return res.json(response);
};

exports.getDiscounts = (req, res) => {
  const { channel, website, funnel, affiliate, lob, packageId, dynamicPackageId, sections, pageInfo, verIdentifier } = req.body;

  if (!channel || !website || !funnel || !affiliate || !lob || !packageId || !dynamicPackageId || !sections || !pageInfo || !verIdentifier) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const response = {
    statusCode: 1,
    success: true,
    paymentScheduleOptions: {},
    couponDetailSectionData: {
      categoryCouponData: [
        {
          categoryId: 4,
          selected: true,
          packageCouponOutputDetails: [
            {
              moreVerificationRequired: false,
              doubleDiscountingAllowed: true,
              blockedPaymentOptions: "MMT_REWARD_BONUS_PM",
              status: "Coupon Applied successfully!",
              hybridDiscount: [
                {
                  discount: 5656,
                  discountType: "Instant",
                  discountTypeCode: "INSTANT",
                  timeOfCredit: ""
                }
              ],
              discount: 5656,
              discountType: "PREBOOKING_OFFER",
              timeOfCredit: "",
              message: "Coupon Applied successfully!",
              paymentMessage: "Thank You!",
              recommendationMessage: "Grab Your Discount Before It’s Gone!",
              couponCode: "MMTHLD",
              baseCouponCode: "MMTHLD",
              tnc: "",
              couponExpiryDate: 1785522599,
              limitedTimeDeal: false,
              couponEndTime: "1970-01-21T21:28:42+05:30",
              extraDiscount: 1131.0,
              selected: false,
              isBestPromo: false,
              isSpecialPromo: false
            }
          ]
        }
      ]
    }
  };

  return res.json(response);
};

exports.getPackagesDetails = (req, res) => {
  const { packageId } = req.body;

  if (!packageId) {
    return res.status(400).json({ message: "Package ID is required" });
  }

  const response = {
    packageId,
    name: "Luxurious Honeymoon in Goa",
    duration: 5,
    price: "₹45,000",
    highlights: ["Beach stay", "Romantic dinner", "Sightseeing"],
    itinerary: [
      { day: 1, activity: "Arrival and hotel check-in" },
      { day: 2, activity: "Beach day and water sports" },
      { day: 3, activity: "Sightseeing tour" },
      { day: 4, activity: "Local market visit" },
      { day: 5, activity: "Departure" }
    ]
  };

  return res.json(response);
};
