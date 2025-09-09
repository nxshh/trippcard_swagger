const menuSwagger = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Trippcard API"
  },
  basePath: "/api/menu",
  tags: [
    {
      name: "Packages - Menu"
    }
  ],
  paths: {
    "/menu": {
      post: {
        tags: ["Packages - Menu"],
        summary: "Get menu details",
        description: "Returns menu configuration for holidays",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Menu request payload",
            required: true,
            schema: {
            type: "object",
            properties: {
              channel: { type: "string", example: "B2CNLR" },
              website: { type: "string", example: "IN" },
              funnel: { type: "string", example: "HLD" },
              affiliate: { type: "string", example: "MMT" },
              lob: { type: "string", example: "Holidays" }
            }
          }
        }
      ],
        responses: {
          200: {
            description: "Menu data returned successfully",
            schema: {
              type: "object",
              example: {
                statusCode: 1,
                "success": true,
    "headerMenu": [
        {
            "name": "Honeymoon",
            "priority": 2,
            "type": "TEXT",
            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3891/Sangla_Ajay%20Jain.jpg",
            "subMenu": [
                {
                    "name": "MakeMyTrip Honeymoon Packages",
                    "priority": 3,
                    "type": "TEXT",
                    "image": "",
                    "subMenu": [
                        {
                            "name": "Trending",
                            "priority": 1,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?campaign=Themed%20Escapes%20for%20Honeymoons&mcat=Themed%20Escapes%20for%20Honeymoons",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Inspiration.jpg"
                        },
                        {
                            "name": "Maldives",
                            "priority": 1,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?depCity=New%20Delhi&dest=Maldives&destValue=Maldives&version=3&affiliate=MMT&themes=Honeymoon&mcat=Honeymoon",
                            "type": "LINK"
                        },
                        {
                            "name": "Bucket List",
                            "priority": 2,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?campaign=New%20Honeymoon%20Escapes&mcat=New%20Honeymoon%20Escapes",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/wishlists.jpg"
                        },
                        {
                            "name": "Bali",
                            "priority": 2,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?depCity=New%20Delhi&dest=Bali&destValue=Bali&affiliate=MMT&version=3&themes=Honeymoon",
                            "type": "LINK"
                        },
                        {
                            "name": "Trip finder",
                            "priority": 3,
                            "deeplink": "https://www.makemytrip.com/tripideas/blog/flipbook/honeymoon-wishlist&mcat=Honeymoon",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Cover.jpg"
                        },
                        {
                            "name": "Thailand",
                            "priority": 3,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?depCity=New%20Delhi&dest=Thailand&destValue=Thailand&affiliate=MMT&themes=honeymoon&mcat=honeymoon",
                            "type": "LINK"
                        },
                        {
                            "name": "Malaysia",
                            "priority": 4,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=58829%2C58757%2C57751%2C24662%2C30089%2C35463%2C56597%2C55383%2C54468&dest=Malaysia&destValue=Malaysia&%20redirectionPage=listing&mcat=Honeymoon",
                            "type": "LINK"
                        },
                        {
                            "name": "View All",
                            "priority": 4,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?fromSearchWidget=true&destValue=Honeymoon&depCity=New%20Delhi&initd=searchwidget_landing__notheme&dateSearched=All%2BDates&rooms=2%2C0%2C0%2C0%2C%2C%2C&campaign=Honeymoon&mcat=Honeymoon",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/MicrosoftTeams-image%20(18).png"
                        },
                        {
                            "name": "Dubai",
                            "priority": 5,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=58913%2C54860%2C54920%2C58150%2C58346%2C44327%2C55457%2C55403%2C58098%2C24406%2C54525%2C54525&dest=Dubai&destValue=Dubai&%20redirectionPage=listing&mcat=Honeymoon",
                            "type": "LINK"
                        },
                        {
                            "name": "North East",
                            "priority": 7,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?depCity=New%20Delhi&dest=North%20East&destValue=North%20East&affiliate=MMT&version=3&themes=Honeymoon&flexibility=FLEXIBLE&mcat=Honeymoon",
                            "type": "LINK"
                        },
                        {
                            "name": "Rajasthan",
                            "priority": 8,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?depCity=New%20Delhi&dest=Rajasthan&destValue=Rajasthan&version=3&affiliate=MMT&themes=Honeymoon&mcat=Honeymoon",
                            "type": "LINK"
                        },
                        {
                            "name": "Goa",
                            "priority": 10,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?depCity=New%20Delhi&dest=Goa&destValue=Goa&version=3&affiliate=MMT&themes=Honeymoon&mcat=Honeymoon",
                            "type": "LINK"
                        },
                        {
                            "name": "Andaman",
                            "priority": 10,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=Andaman&version=2&themes=Honeymoon&flexibility=FLEXIBLE&mcat=Honeymoon",
                            "type": "LINK"
                        },
                        {
                            "name": "Kerala",
                            "priority": 11,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=33549%2C26767%2C35321%2C31329%2C25625%2C27682%2C56609%2C24294%2C36501%2C30181%2C29001%2C56624%2C30855%2C55309%2C35331%2C28415%2C32679%2C35327%2C33159%2C26463%2C26537%2C26717%2C26731%2C18445%2C21220%2C26787%2C23762&dest=Kerala&destValue=Kerala&%20redirectionPage=listing&mcat=Honeymoon",
                            "type": "LINK"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Book @1",
            "priority": 3,
            "type": "TEXT",
            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Aerial%20view%20of%20a%20beach%20in%20Goa.jpg",
            "subMenu": [
                {
                    "name": "Book @ 1",
                    "priority": 1,
                    "type": "TEXT",
                    "subMenu": [
                        {
                            "name": "Domestic",
                            "priority": 3,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=58865%2C60047%2C59723%2C58825%2C59726%2C59727%2C59729%2C55589%2C59769%2C59758%2C58825%2C59877%2C59888%2C60047%2C60064%2C60065%2C60117%2C60067%2C56901%2C26143%2C57407%2C60752%2C60755%2C60760%2C60762%2C60763%2C60764%2C60765%2C60766%2C55582%2C60223%2C60759%2C60761%2C60775%2C60776%2C60777%2C60774%2C60773%2C60771%2C60770%2C53164%2C60772&redirectionPage=listing",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/beach.jpeg"
                        },
                        {
                            "name": "Kerala",
                            "priority": 3,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=59726%2C60764%2C60765%2C60766&dest=Kerala&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "International",
                            "priority": 4,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=27081%2C59733%2C59753%2C58939%2C59755%2C59766%2C59829%2C58534%2C57760%2C59524%2C59911%2C59848%2C59843%2C59901%2C56726%2C55638%2C60751%2C53075%2C60767%2C56798%2C60756%2C60757&redirectionPage=listing",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Pura-Ulun-Danu-Bratan,-Bali-Temple.jpg"
                        },
                        {
                            "name": "Andaman",
                            "priority": 4,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=58865%2C60047%2C60752%2C60755&dest=Andaman&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Mauritius",
                            "priority": 5,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=58939%2C59911%2C60846%2C60847&dest=Mauritius&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Goa",
                            "priority": 6,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=59758%2C60067%2C55582&dest=Goa&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "North East",
                            "priority": 7,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=59727%2C60223%2C60759%2C60761&dest=North%20East&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Almaty",
                            "priority": 8,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=59766&dest=Almaty&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Thailand",
                            "priority": 9,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=59733%2C59524%2C59901%2C55638%2C60751&dest=Thailand&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Indonesia",
                            "priority": 9,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=59755%2C59829%2C60756%2C60757&dest=Indonesia&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Maldives",
                            "priority": 10,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=58534%2C53075%2C60767%2C57760&dest=Maldives&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Bhutan",
                            "priority": 10,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=27081&redirectionPage=listing&dest=Bhutan",
                            "type": "TEXT"
                        },
                        {
                            "name": "Dubai",
                            "priority": 11,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=60846%2c60847&dest=Dubai&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Uttarakhand",
                            "priority": 12,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=59769%2c60774%2c60773%2c60771%2c60770%2c61056&dest=Uttarakhand&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "View All",
                            "priority": 13,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=27081%2C59733%2C59753%2C58939%2C59755%2C59766%2C59829%2C58534%2C57760%2C59524%2C59911%2C59848%2C59843%2C59901%2C56726%2C55638%2C60751%2C53075%2C60767%2C56798%2C60756%2C60757%2C58865%2C60047%2C59723%2C58825%2C59726%2C59727%2C59729%2C55589%2C59769%2C59758%2C58825%2C59877%2C59888%2C60047%2C60064%2C60065%2C60117%2C60067%2C56901%2C26143%2C57407%2C60752%2C60755%2C60760%2C60762%2C60763%2C60764%2C60765%2C60766%2C55582%2C60223%2C60759%2C60761%2C60775%2C60776%2C60777%2C60774%2C60773%2C60771%2C60770%2C53164%2C60772%2C61014%2C59729%2C60784%2C60106%2C60067&redirectionPage=listing",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/UK.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Group Tour Packages",
            "priority": 4,
            "type": "TEXT",
            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Group%20View%20all2.jpg",
            "subMenu": [
                {
                    "name": "Expertly Planned Group Tours",
                    "priority": 1,
                    "type": "TEXT",
                    "subMenu": [
                        {
                            "name": "Europe",
                            "priority": 1,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=59895%2C59909%2C59930%2C59931%2C59932%2C59937%2C59939%2C59952%2C59956%2C59957%2C59958%2C59959%2C59960%2C60120%2C60156%2C60157%2C60215%2C60287%2C60477%2C60468%2C61502%2C61539%2C61544%2C61545%2C61543&dest=Europe&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Japan",
                            "priority": 2,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=55336%2C61489%2C61526%2C61524%2C61532&dest=Japan&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Australia",
                            "priority": 3,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=60193%2C61311%2C61336&dest=Australia&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "South Africa",
                            "priority": 4,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=57473%2C57852&dest=South%20Africa&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Singapore",
                            "priority": 5,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=60693%2C60735&dest=Singapore&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Andaman",
                            "priority": 6,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=61085%2C61086%2C61087%2C60170&dest=Andaman&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Char Dham",
                            "priority": 7,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=60718%2C60715%2C60716%2C61341%2C60699&dest=Char%20Dham&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Kashmir",
                            "priority": 8,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=54836%2C54837%2C54838&dest=Kashmir&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Sri Lanka",
                            "priority": 9,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=58589%2C61417%2C61145&dest=Sri%20Lanka&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Bhutan",
                            "priority": 10,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/international/search?packageIds=56681&dest=Bhutan&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Domestic",
                            "priority": 11,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=59309%2C59310%2C61085%2C61086%2C61087%2C60170%2C60718%2C60715%2C60716%2C61341%2C60699%2C61340%2C54836%2C54837%2C54838%2C53421%2C60703%2C60704%2C60705%2C60706%2C60707%2C60708%2C60709%2C60710%2C60826%2C60825%2C60738%2C60739&redirectionPage=listing&version=2",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/DOM%20Group.jpg"
                        },
                        {
                            "name": "Quick Fly",
                            "priority": 12,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=57978%2C56681%2C60744%2C61342%2C60693%2C60735%2C58589%2C61417%2C61145%2C60561%2C60563%2C60629%2C61511%2C60850&redirectionPage=listing&version=2",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Group%20SH.jpg"
                        },
                        {
                            "name": "Bucket List",
                            "priority": 13,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=60193%2C61311%2C61336%2C60192%2C59895%2C59909%2C59930%2C59931%2C59932%2C59937%2C59939%2C59952%2C59956%2C59957%2C59958%2C59959%2C59960%2C60120%2C60156%2C60157%2C60215%2C60287%2C60477%2C60468%2C55336%2C57473%2C57852%2C61489%2C61526%2C61524%2C61532%2C61510%2C61502%2C61292%2C60743%2C61539%2C61544%2C61545%2C61543%2C61548&redirectionPage=listing&version=2",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Group%20LH.jpg"
                        },
                        {
                            "name": "View All",
                            "priority": 14,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=57978%2C60193%2C61311%2C61336%2C56681%2C60744%2C60192%2C59895%2C59909%2C59930%2C59931%2C59932%2C59937%2C59939%2C59952%2C59956%2C59957%2C59958%2C59959%2C59960%2C60120%2C60156%2C60157%2C60215%2C60287%2C60477%2C60468%2C55336%2C61342%2C60693%2C60735%2C57473%2C57852%2C58589%2C61417%2C61145%2C60561%2C60563%2C60629%2C61489%2C61526%2C61524%2C61532%2C61510%2C61502%2C61292%2C60743%2C61539%2C61544%2C61545%2C61543%2C61548%2C61511%2C60850%2C59309%2C59310%2C61085%2C61086%2C61087%2C60170%2C60718%2C60715%2C60716%2C61341%2C60699%2C61340%2C54836%2C54837%2C54838%2C53421%2C60703%2C60704%2C60705%2C60706%2C60707%2C60708%2C60709%2C60710%2C60826%2C60825%2C60738%2C60739&redirectionPage=listing&version=2",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Group%20View%20all2.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Pilgrimage Carnival",
            "priority": 4,
            "type": "TEXT",
            "subMenu": [
                {
                    "name": "Apply Code MYSPIRITUALINDIA to explore specially curated pilgrimage packages!",
                    "priority": 1,
                    "type": "TEXT",
                    "subMenu": [
                        {
                            "name": "Ujjain",
                            "priority": 1,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?generalTags=other%20pilgrimage%20sites&places=ujjain&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Puri",
                            "priority": 2,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?generalTags=other%20pilgrimage%20sites&places=Puri&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Madurai & Rameswaram",
                            "priority": 3,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?generalTags=other%20pilgrimage%20sites&places=Madurai&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Dwarka and Somnath",
                            "priority": 4,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?generalTags=other%20pilgrimage%20sites&places=Dwarka&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Varanasi & Ayodhya",
                            "priority": 5,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?generalTags=other%20pilgrimage%20sites&places=Varanasi&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Tirupati",
                            "priority": 6,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?generalTags=other%20pilgrimage%20sites&places=Tirupati&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Shirdi",
                            "priority": 7,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?generalTags=other%20pilgrimage%20sites&places=Shirdi&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Amritsar",
                            "priority": 8,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?generalTags=other%20pilgrimage%20sites&places=Amritsar&redirectionPage=listing",
                            "type": "TEXT"
                        },
                        {
                            "name": "Pilgrimage By Theme",
                            "priority": 9,
                            "deeplink": "https://www.makemytrip.com/promos/pilgrimage-packages-010925.html",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Pilgrimage- A.jpg"
                        },
                        {
                            "name": "Group Tours",
                            "priority": 10,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?packageIds=60694%2C60699%2C60715%2C60716%2C60717%2C60718%2C61457%2C61541%2C61542%2C61584%2C61585%2C61728%2C61730%2C61733%2C61734%2C61749%2C61750%2C61751%2C61752%2C61753%2C61775&redirectionPage=listing&version=2",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Pilgrimage- B.jpg"
                        },
                        {
                            "name": "View All",
                            "priority": 11,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?fromSearchWidget=true&destValue=Pilgrimage&depCity=New%20Delhi&initd=searchwidget_landing__notheme&dateSearched=24%2F8%2F2026&glp=true&pdo=true&rooms=2%2C0%2C0%2C0%2C%2C%2C&campaign=Pilgrimage&affiliate=MMT&mcat=Pilgrimage",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Pilgrimage- C.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Easy VISA Destinations",
            "priority": 5,
            "type": "TEXT",
            "subMenu": [
                {
                    "name": "Easy- Visa Holidays Just Got Cheaper – Apply Code SALESPECIAL Now!",
                    "priority": 1,
                    "type": "TEXT",
                    "subMenu": [
                        {
                            "name": "Thailand",
                            "priority": 1,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=thailand",
                            "type": "TEXT"
                        },
                        {
                            "name": "Dubai",
                            "priority": 2,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=dubai",
                            "type": "TEXT"
                        },
                        {
                            "name": "Maldives",
                            "priority": 3,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=Maldives",
                            "type": "TEXT"
                        },
                        {
                            "name": "Bali",
                            "priority": 4,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=bali",
                            "type": "TEXT"
                        },
                        {
                            "name": "Vietnam",
                            "priority": 5,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=vietnam",
                            "type": "TEXT"
                        },
                        {
                            "name": "Singapore",
                            "priority": 6,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=Singapore",
                            "type": "TEXT"
                        },
                        {
                            "name": "Malaysia",
                            "priority": 7,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=malaysia",
                            "type": "TEXT"
                        },
                        {
                            "name": "Sri Lanka",
                            "priority": 8,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=sri%20lanka",
                            "type": "TEXT"
                        },
                        {
                            "name": "Mauritius",
                            "priority": 9,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=mauritius",
                            "type": "TEXT"
                        },
                        {
                            "name": "Almaty",
                            "priority": 10,
                            "deeplink": "https://holidayz.makemytrip.com/holidays/india/search?dest=kazakhstan&version=3&places=Almaty",
                            "type": "TEXT"
                        },
                        {
                            "name": "View All",
                            "priority": 11,
                            "deeplink": "https://www.makemytrip.com/holidays-international/leisure-packages.html",
                            "type": "IMAGE",
                            "image": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Indonesia-%20A.jpg"
                        }
                    ]
                }
            ]
        }
    ],
    "searchMenu": []

              }
            }
          }
        }
      }
    },




    "/filter": {
  "post": {
    "tags": ["Packages - Menu"],
    "summary": "Get filters for holidays",
    "description": "Returns available filters to refine holiday packages",
    "consumes": ["application/json"],
    "parameters": [
      {
        "in": "body",
        "name": "body",
        "description": "Filter request payload",
        "required": true,
        "schema": {
          "type": "object",
          "properties": {
            "channel": { "type": "string", "example": "B2CNLR" },
            "website": { "type": "string", "example": "IN" },
            "funnel": { "type": "string", "example": "HLD" },
            "affiliate": { "type": "string", "example": "MMT" },
            "lob": { "type": "string", "example": "Holidays" },
            "departureCity": { "type": "string", "example": "Bangalore" },
            "destinationCity": { "type": "string", "example": "Bali" },
            "filterSorterParam": { "type": "boolean", "example": true },
            "filteredFiltersRequired": { "type": "boolean", "example": true },
            "apiVersion": { "type": "string", "example": "v21" },
            "rooms": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "noOfAdults": { "type": "integer", "example": 2 },
                  "noOfChildrenWB": { "type": "integer", "example": 0 },
                  "noOfChildrenWOB": { "type": "integer", "example": 0 },
                  "noOfInfants": { "type": "integer", "example": 0 },
                  "listOfAgeOfChildrenWB": { "type": "array", "items": { "type": "integer" }, "example": [] },
                  "listOfAgeOfChildrenWOB": { "type": "array", "items": { "type": "integer" }, "example": [] },
                  "listOfInfAge": { "type": "array", "items": { "type": "integer" }, "example": [] }
                }
              }
            },
            "packageDate": { "type": "string", "format": "date", "example": "2025-10-01" }
          }
        }
      }
    ],
    "responses": {
      "200": {
        "description": "Filter options returned successfully",
        "schema": {
          "type": "object",
          "properties": {
            "filters": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": { "type": "string" },
                  "name": { "type": "string" },
                  "type": { "type": "string", "enum": ["checkbox", "radio", "slider"] },
                  "listingFilterValues": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": { "type": "string" },
                        "value": { "type": ["string", "integer"] },
                        "selected": { "type": "boolean" }
                      }
                    }
                  },
                  "filterStats": {
                    "type": "object",
                    "additionalProperties": true
                  }
                }
              }
            }
          },
          "example": {
            "filters": [
              {
                "id": "flight_choice",
                "name": "Flight Choice",
                "type": "checkbox",
                "listingFilterValues": [
                  { "id": "non_stop", "value": "Non Stop", "selected": false },
                  { "id": "1_stop", "value": "1 Stop", "selected": false },
                  { "id": "2_plus_stop", "value": "2+ Stops", "selected": false }
                ],
                "filterStats": { "total": 3 }
              },
              {
                "id": "dates",
                "name": "Dates",
                "type": "radio",
                "listingFilterValues": [
                  { "id": "jan", "value": "January", "selected": false },
                  { "id": "feb", "value": "February", "selected": false },
                  { "id": "mar", "value": "March", "selected": false }
                ],
                "filterStats": { "total": 12 }
              },
              {
                "id": "typologies",
                "name": "Typologies",
                "type": "checkbox",
                "listingFilterValues": [
                  { "id": "family", "value": "Family", "selected": false },
                  { "id": "honeymoon", "value": "Honeymoon", "selected": false },
                  { "id": "adventure", "value": "Adventure", "selected": false }
                ],
                "filterStats": { "total": 5 }
              },
              {
                "id": "price",
                "name": "Price",
                "type": "slider",
                "listingFilterValues": [
                  { "id": "min", "value": 5000 },
                  { "id": "max", "value": 200000 }
                ],
                "filterStats": { "currency": "INR" }
              },
              {
                "id": "duration",
                "name": "Duration",
                "type": "radio",
                "listingFilterValues": [
                  { "id": "3n_4d", "value": "3N/4D", "selected": false },
                  { "id": "4n_5d", "value": "4N/5D", "selected": false },
                  { "id": "5n_6d", "value": "5N/6D", "selected": false }
                ],
                "filterStats": { "total": 6 }
              },
              {
                "id": "hotel_category",
                "name": "Hotel Category",
                "type": "checkbox",
                "listingFilterValues": [
                  { "id": "3_star", "value": "3 Star", "selected": false },
                  { "id": "4_star", "value": "4 Star", "selected": false },
                  { "id": "5_star", "value": "5 Star", "selected": false }
                ],
                "filterStats": { "total": 3 }
              }
            ]
          }
        }
      }
    }
  }
},

    
    "/packages": {
      post: {
    tags: ["Packages - Menu"],
    summary: "Get package listings for holidays",
    description: "Returns holiday packages based on search criteria",
    consumes: ["application/json"],
    parameters: [
      {
        in: "body",
        name: "body",
        description: "Packages request payload",
        required: true,
        schema: {
          type: "object",
          properties: {
            channel: { type: "string", example: "B2CNLR" },
            website: { type: "string", example: "IN" },
            funnel: { type: "string", example: "HLD" },
            affiliate: { type: "string", example: "MMT" },
            lob: { type: "string", example: "Holidays" },
            departureCity: { type: "string", example: "Bangalore" },
            destinationCity: { type: "string", example: "Bali" },
            offset: { type: "integer", example: 0 },
            criterias: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "integer", example: 20 },
                  values: { type: "array", items: { type: "string" }, example: ["All"] }
                }
              }
            },
            sorterCriterias: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "integer", example: 2 },
                  values: { type: "array", items: { type: "string" }, example: ["1"] }
                }
              }
            },
            apiPokus: { type: "string", example: "apiPokusListing=false" },
            searchText: { type: "string", example: "" },
            groupId: { type: "integer", example: 3402 },
            packageDate: { type: "string", format: "date", example: "2025-10-01" },
            rooms: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  noOfAdults: { type: "integer", example: 2 },
                  noOfChildrenWB: { type: "integer", example: 0 },
                  noOfChildrenWOB: { type: "integer", example: 0 },
                  noOfInfants: { type: "integer", example: 0 },
                  listOfAgeOfChildrenWB: { type: "array", items: { type: "integer" }, example: [] },
                  listOfAgeOfChildrenWOB: { type: "array", items: { type: "integer" }, example: [] },
                  listOfInfAge: { type: "array", items: { type: "integer" }, example: [] }
                }
              }
            }
          },
          example: {
            channel: "B2CNLR",
            website: "IN",
            funnel: "HLD",
            affiliate: "MMT",
            lob: "Holidays",
            departureCity: "Bangalore",
            destinationCity: "Bali",
            offset: 0,
            criterias: [
              { id: 20, values: ["All"] },
              { id: 22, values: ["Ubud"] },
              { id: 42, values: ["Hong Kong","Malaysia","Vietnam","Australia","Bali","Singapore"] },
              { id: 22, values: ["Ubud"] }
            ],
            sorterCriterias: [{ id: 2, values: ["1"] }],
            apiPokus: "apiPokusListing=false",
            searchText: "",
            groupId: 3402,
            packageDate: "2025-10-01",
            rooms: [
              {
                noOfAdults: 2,
                noOfChildrenWB: 0,
                noOfChildrenWOB: 0,
                noOfInfants: 0,
                listOfAgeOfChildrenWB: [],
                listOfAgeOfChildrenWOB: [],
                listOfInfAge: []
              }
            ]
          }
        }
      }
    ],
        responses: {
          200: {
            description: "Packages listing returned successfully",
            schema: {
              type: "object",
              example: {
    "statusCode": 1,
    "success": true,
    "attributes": {
        "values": {
            "StoryImageSize": "crop=0.56xh:h;*,*&resize=400:720"
        }
    },
    "destImageUrl": "/holidays/images/holidayListingDefault.png",
    "nextOffset": 10,
    "packageDetails": [
        {
            "noOfNights": 6,
            "inclusions": [
                "4 Star Hotels",
                "Airport Pickup & Drop",
                "4 Activities",
                "Visa",
                "Selected Meals"
            ],
            "cardImages": [
                {
                    "name": "145.jpg",
                    "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/6518/145.jpg"
                }
            ],
            "heroImages": [],
            "listingPricingDetails": {
                "pricePersuasion": [
                    {
                        "text": "This price is lower than the average price in",
                        "isEmphasized": false
                    },
                    {
                        "text": "October",
                        "isEmphasized": false
                    }
                ],
                "priceInfo": [
                    [
                        {
                            "text": "₹43,646",
                            "isEmphasized": true
                        },
                        {
                            "text": "/Person",
                            "isEmphasized": false
                        }
                    ],
                    [
                        {
                            "text": "Total Price",
                            "isEmphasized": false
                        },
                        {
                            "text": "₹87,292",
                            "isEmphasized": false
                        }
                    ]
                ],
                "urgencyPersuasion": {
                    "info": []
                },
                "priceKey": "PU_PU_2|PP_CAL_2"
            },
            "categoryDetails": {
                "defaultCategoryId": 4,
                "categories": [
                    {
                        "id": 4,
                        "name": "Deluxe"
                    }
                ]
            },
            "id": "58002",
            "requestMeta": {
                "variantId": "NO_MAJOR_COMMUTE_7441F95D"
            },
            "responseMeta": {
                "commuteV2Enabled": true
            },
            "name": "Couples Bali Retreat - Pool Villa Special",
            "packageType": "FIT",
            "branch": "OBT",
            "storyEnabled": false,
            "bundled": false,
            "description": "Go for a wonderful vacation at the stunning destination of Bali! Stay in highly rated best star accommodations and enjoy exciting inclusions like Activities and Transfers that will make your trip even better. A 6N package will let you explore the interesting cities of Seminyak and Ubud.",
            "destinationDetails": {
                "count": 2,
                "destinations": [
                    {
                        "seqNo": 1,
                        "name": "Seminyak",
                        "nights": 3,
                        "countryName": "Indonesia"
                    },
                    {
                        "seqNo": 2,
                        "name": "Ubud",
                        "nights": 3,
                        "countryName": "Indonesia"
                    }
                ],
                "showCountryNames": false
            },
            "departureDetails": {
                "cityId": 3752,
                "cityName": "Bangalore",
                "startingCity": "Seminyak",
                "departureDate": 1759257000000
            },
            "listingPackageVariantsDetails": {
                "variantType": "COMMUTE",
                "variantTitle": "Please select an option",
                "packageVariants": [
                    {
                        "packageId": "58002",
                        "uniqueId": "58002_NO_MAJOR_COMMUTE",
                        "requestMeta": {
                            "variantId": "NO_MAJOR_COMMUTE_7441F95D",
                            "dynamicVariantType": "NO_MAJOR_COMMUTE"
                        },
                        "responseMeta": {
                            "commuteV2Enabled": true
                        },
                        "variantType": "NO_MAJOR_COMMUTE",
                        "isParent": true,
                        "price": 46545.0,
                        "discountedPrice": 46545.0,
                        "heading": "Without Flight",
                        "subHeading": "Starting from - Seminyak",
                        "listingPackageVariantUrlInfo": {
                            "id": "58002",
                            "defaultCategoryId": 4,
                            "departureDate": "2025-10-01T00:00:00+05:30",
                            "departureCity": "Bangalore",
                            "duration": 6
                        },
                        "categoryPrices": [
                            {
                                "categoryId": 4,
                                "price": 46545,
                                "discountedPrice": 46545,
                                "starRating": "4"
                            }
                        ],
                        "variantMeta": {
                            "isWinnerForCommuteType": true,
                            "isWinner": true
                        }
                    },
                    {
                        "packageId": "58002",
                        "uniqueId": "58002_FLIGHT",
                        "requestMeta": {
                            "variantId": "FLIGHT_E1350196",
                            "dynamicVariantType": "FLIGHT"
                        },
                        "responseMeta": {
                            "commuteV2Enabled": true
                        },
                        "variantType": "FLIGHT",
                        "isParent": false,
                        "heading": "With Flight",
                        "subHeading": "Starting from - Bangalore",
                        "listingPackageVariantUrlInfo": {
                            "id": "58002",
                            "defaultCategoryId": 4,
                            "departureDate": "2025-10-01T00:00:00+05:30",
                            "departureCity": "Bangalore",
                            "duration": 6
                        },
                        "variantMeta": {
                            "isWinnerForCommuteType": true,
                            "isWinner": false
                        }
                    }
                ]
            },
            "packageDetailDeepLink": "https://holidayz.makemytrip.com/holidays/india/package?pkgType=FIT&searchDate=2025-10-01&listingClassId=4&id=58002&affiliate=MMT&fromCity=Bangalore&room=2,0,0,0,,,&depDate=2025-10-01",
            "highlightsData": [
                {
                    "iconUrl": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/highlights_tick3x.png",
                    "type": "LISTING_PACKAGE_HIGHLIGHTS",
                    "colorCode": "#007E7D",
                    "highlights": [
                        "Free Nusa Penida Tour",
                        "Waterfall Tour",
                        "Candle Light Dinner"
                    ]
                }
            ],
            "isPremium": false
        },
        {
            "noOfNights": 6,
            "inclusions": [
                "4 Star Hotels",
                "Airport Pickup & Drop",
                "6 Activities",
                "Visa",
                "Selected Meals"
            ],
            "cardImages": [
                {
                    "name": "istockphoto-1301132146-612x612.jpg",
                    "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/6518/istockphoto-1301132146-612x612.jpg"
                }
            ],
            "heroImages": [],
            "listingPricingDetails": {
                "pricePersuasion": [
                    {
                        "text": "Price is likely to increase for this date",
                        "isEmphasized": false
                    }
                ],
                "priceInfo": [
                    [
                        {
                            "text": "₹40,456",
                            "isEmphasized": true
                        },
                        {
                            "text": "/Person",
                            "isEmphasized": false
                        }
                    ],
                    [
                        {
                            "text": "Total Price",
                            "isEmphasized": false
                        },
                        {
                            "text": "₹80,912",
                            "isEmphasized": false
                        }
                    ]
                ],
                "urgencyPersuasion": {
                    "info": []
                },
                "priceKey": "PU_PU_2|PP_CAL_3"
            },
            "categoryDetails": {
                "defaultCategoryId": 10,
                "categories": [
                    {
                        "id": 10,
                        "name": "Deluxe"
                    },
                    {
                        "id": 264,
                        "name": "Luxury"
                    },
                    {
                        "id": 606,
                        "name": "Premium"
                    }
                ]
            },
            
            "packageDetailDeepLink": "https://holidayz.makemytrip.com/holidays/india/package?pkgType=FIT&searchDate=2025-10-01&listingClassId=264&id=20433&affiliate=MMT&fromCity=Bangalore&room=2,0,0,0,,,&depDate=2025-10-01",
            "highlightsData": [
                {
                    "iconUrl": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/highlights_tick3x.png",
                    "type": "LISTING_PACKAGE_HIGHLIGHTS",
                    "colorCode": "#007E7D",
                    "highlights": [
                        "Balinese Spa",
                        "Candle Light Dinner",
                        "Ubud Market Tour"
                    ]
                }
            ],
            "isPremium": false
        },
        {
            "noOfNights": 8,
            "inclusions": [
                "4 Star Hotels",
                "Airport Pickup & Drop",
                "7 Activities",
                "Visa",
                "Selected Meals"
            ],
            "cardImages": [
                {
                    "name": "pexels-haiivaan-3681469.jpg",
                    "fullPath": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/6520/pexels-haiivaan-3681469.jpg"
                }
            ],
            "heroImages": [],
            "listingPricingDetails": {
                "pricePersuasion": [
                    {
                        "text": "This price is lower than the average price in",
                        "isEmphasized": false
                    },
                    {
                        "text": "October",
                        "isEmphasized": false
                    }
                ],
                "priceInfo": [
                    [
                        {
                            "text": "₹45,282",
                            "isEmphasized": true
                        },
                        {
                            "text": "/Person",
                            "isEmphasized": false
                        }
                    ],
                    [
                        {
                            "text": "Total Price",
                            "isEmphasized": false
                        },
                        {
                            "text": "₹90,564",
                            "isEmphasized": false
                        }
                    ]
                ],
                "urgencyPersuasion": {
                    "info": []
                },
                "priceKey": "PU_PU_2|PP_CAL_2"
            },
            "categoryDetails": {
                "defaultCategoryId": 10,
                "categories": [
                    {
                        "id": 2,
                        "name": "Standard"
                    },
                    {
                        "id": 4,
                        "name": "Deluxe"
                    },
                    {
                        "id": 10,
                        "name": "Deluxe"
                    },
                    {
                        "id": 606,
                        "name": "Premium"
                    }
                ]
            },
            "id": "53734",
            "requestMeta": {
                "variantId": "NO_MAJOR_COMMUTE_C094A750"
            },
            "responseMeta": {
                "commuteV2Enabled": true
            },
            "name": "Jewels of Bali - Couple Edition ",
            "packageType": "FIT",
            "branch": "OBT",
            "storyEnabled": false,
            "bundled": false,
            "description": "Go for a wonderful vacation at the stunning destination of Bali! Stay in highly rated best star accommodations and enjoy exciting inclusions like Activities and Transfers that will make your trip even better. A 8N package will let you explore the interesting cities of Kuta, Seminyak, Nusa Dua and Ubud.",
            "destinationDetails": {
                "count": 4,
                "destinations": [
                    {
                        "seqNo": 1,
                        "name": "Kuta",
                        "nights": 2,
                        "countryName": "Indonesia"
                    },
                    {
                        "seqNo": 2,
                        "name": "Seminyak",
                        "nights": 2,
                        "countryName": "Indonesia"
                    },
                    {
                        "seqNo": 3,
                        "name": "Nusa Dua",
                        "nights": 2,
                        "countryName": "Indonesia"
                    },
                    {
                        "seqNo": 4,
                        "name": "Ubud",
                        "nights": 2,
                        "countryName": "Indonesia"
                    }
                ],
                "showCountryNames": false
            },
            "departureDetails": {
                "cityId": 3752,
                "cityName": "Bangalore",
                "startingCity": "Kuta",
                "departureDate": 1759257000000
            },
            "listingPackageVariantsDetails": {
                "variantType": "COMMUTE",
                "variantTitle": "Please select an option",
                "packageVariants": [
                    {
                        "packageId": "53734",
                        "uniqueId": "53734_NO_MAJOR_COMMUTE",
                        "requestMeta": {
                            "variantId": "NO_MAJOR_COMMUTE_C094A750",
                            "dynamicVariantType": "NO_MAJOR_COMMUTE"
                        },
                        "responseMeta": {
                            "commuteV2Enabled": true
                        },
                        "variantType": "NO_MAJOR_COMMUTE",
                        "isParent": true,
                        "price": 53077.0,
                        "discountedPrice": 53077.0,
                        "heading": "Without Flight",
                        "subHeading": "Starting from - Kuta",
                        "listingPackageVariantUrlInfo": {
                            "id": "53734",
                            "defaultCategoryId": 10,
                            "departureDate": "2025-10-01T00:00:00+05:30",
                            "departureCity": "Bangalore",
                            "duration": 8
                        },
                        "categoryPrices": [
                            {
                                "categoryId": 2,
                                "price": 41139,
                                "discountedPrice": 41139,
                                "starRating": "3"
                            },
                            {
                                "categoryId": 4,
                                "price": 53077,
                                "discountedPrice": 53077,
                                "starRating": "4"
                            },
                            {
                                "categoryId": 10,
                                "price": 53077,
                                "discountedPrice": 53077,
                                "starRating": "4"
                            },
                            {
                                "categoryId": 606,
                                "price": 53077,
                                "discountedPrice": 53077,
                                "starRating": "4"
                            }
                        ],
                        "variantMeta": {
                            "isWinnerForCommuteType": true,
                            "isWinner": true
                        }
                    },
                    {
                        "packageId": "53734",
                        "uniqueId": "53734_FLIGHT",
                        "requestMeta": {
                            "variantId": "FLIGHT_E1350196",
                            "dynamicVariantType": "FLIGHT"
                        },
                        "responseMeta": {
                            "commuteV2Enabled": true
                        },
                        "variantType": "FLIGHT",
                        "isParent": false,
                        "heading": "With Flight",
                        "subHeading": "Starting from - Bangalore",
                        "listingPackageVariantUrlInfo": {
                            "id": "53734",
                            "defaultCategoryId": 10,
                            "departureDate": "2025-10-01T00:00:00+05:30",
                            "departureCity": "Bangalore",
                            "duration": 8
                        },
                        "variantMeta": {
                            "isWinnerForCommuteType": true,
                            "isWinner": false
                        }
                    }
                ]
            },
            "packageDetailDeepLink": "https://holidayz.makemytrip.com/holidays/india/package?pkgType=FIT&searchDate=2025-10-01&listingClassId=10&id=53734&affiliate=MMT&fromCity=Bangalore&room=2,0,0,0,,,&depDate=2025-10-01",
            "highlightsData": [
                {
                    "iconUrl": "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/highlights_tick3x.png",
                    "type": "LISTING_PACKAGE_HIGHLIGHTS",
                    "colorCode": "#007E7D",
                    "highlights": [
                        "40% Off on Uluwatu Temple Tour",
                        "Balinese Spa",
                        "Transfers"
                    ]
                }
            ],
            "isPremium": false
        }
    ],
    "criterias": [
        {
            "id": 20,
            "values": [
                "All"
            ]
        },
        {
            "id": 22,
            "values": [
                "Ubud"
            ]
        },
        {
            "id": 42,
            "values": [
                "Hong Kong",
                "Malaysia",
                "Vietnam",
                "Australia",
                "Bali",
                "Singapore"
            ]
        }
    ],
    "noMorePackages": false,
    "noPackageFound": false,
    "numFound": 21,
    "budgetElasticAppliedForPackages": false
}
              
            }
          }
        }
      }
    }
  }
};

module.exports = menuSwagger;
