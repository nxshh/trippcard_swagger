exports.getHeaderConfig = (req, res) => {
    const { region, currency, 'user-currency': userCurrency, language } = req.body;

    console.log({ region, currency, userCurrency, language });

    return res.json({
        headerConfig: {
            status: "fulfilled",
            value: {
                info: { profile: "B2C", userType: "PERSONAL" },
                renderConfigurations: {
                    authorization: "h4nhc9jcgpAGIjp",
                    businessCookieMap: { BUSINESS: "b2b", CTA: "myPartner", PERSONAL: "b2c" },
                    defaultAuthorization: true,
                    defaultTNCUrls: true,
                    displayWelcomeOffer: true,
                    languageListMap: { eng: "English", hin: "हिंदी", tam: "தமிழ்" },
                    listYourPropertyLink: "https://in.goibibo.com/newextranet/login?cmp=mmthomepage",
                    menuList: ["Flights","Hotels","Homestays","Holidays","Trains","Buses","Cabs","Tours","Visa","Cruise","Forex","Travel Insurance","MORE_INDIA"],
                    showLanguageSwitcher: true,
                    showListYourProperty: true,
                    showLoginChanges: true,
                    showLoginOtionInSubModal: true,
                    showLoginSignupPersuasion: true,
                    showMMTBlack: true,
                    showMyBizFormSwitcher: true,
                    showMyBizIcon: true,
                    showMyBizSwitcher: true,
                    showProfileLogout: false,
                    showWalletAmount: true,
                    showWalletIcon: false,
                    showWhatsAppLoginConsent: true,
                    topCountriesList: ["us", "ae", "sa", "in"],
                    vendorProfileType: ""
                }
            }
        }
    });
};


exports.getBanner = (req, res) => {
    res.json({
        data: {
            cardSequence: {
                BEST_SELLING_DESTINATIONS: { cardId: "HOLIDAY_BEST_SELLING_DESTINATIONS", priority: 1 },
                BOOK_NOW_LOCK_PRICE: { cardId: "HOLIDAY_BOOK_NOW_LOCK_PRICE", priority: 2 },
                VISA_FREE_DESTINATIONS: { cardId: "HOLIDAY_VISA_FREE_DESTINATIONS", priority: 3 }
            },
            cardData: {
                HOLIDAY_BEST_SELLING_DESTINATIONS: {
                    header: "Best Selling Destinations",
                    cards: [
                        { title: "Kerala", image: "https://example.com/kerala.jpg" },
                        { title: "Thailand", image: "https://example.com/thailand.jpg" },
                        { title: "Goa", image: "https://example.com/goa.jpg" },
                        { title: "Andaman", image: "https://example.com/andaman.jpg" },
                        { title: "Himachal", image: "https://example.com/himachal.jpg" },
                        { title: "South India", image: "https://example.com/southindia.jpg" },
                        { title: "Maldives", image: "https://example.com/maldives.jpg" },
                        { title: "Rajasthan", image: "https://example.com/rajasthan.jpg" }
                    ]
                },
                HOLIDAY_BOOK_NOW_LOCK_PRICE: {
                    header: "Book Now @1: Lock package price now!",
                    cards: [
                        { title: "Goa", image: "https://example.com/goa.jpg" },
                        { title: "Thailand", image: "https://example.com/thailand.jpg" },
                        { title: "Maldives", image: "https://example.com/maldives.jpg" },
                        { title: "Bali", image: "https://example.com/bali.jpg" },
                        { title: "Andaman", image: "https://example.com/andaman.jpg" },
                        { title: "North East", image: "https://example.com/northeast.jpg" },
                        { title: "Kerala", image: "https://example.com/kerala.jpg" }
                    ]
                },
                HOLIDAY_VISA_FREE_DESTINATIONS: {
                    header: "Visa Free Destinations",
                    cards: [
                        { title: "Thailand", image: "https://example.com/thailand.jpg", price: "₹20,000" },
                        { title: "Maldives", image: "https://example.com/maldives.jpg", price: "₹27,000" },
                        { title: "Sri Lanka", image: "https://example.com/srilanka.jpg", price: "₹25,000" },
                        { title: "Almaty", image: "https://example.com/almaty.jpg", price: "₹40,000" },
                        { title: "Vietnam", image: "https://example.com/vietnam.jpg", price: "₹32,000" },
                        { title: "Singapore", image: "https://example.com/singapore.jpg", price: "₹35,000" },
                        { title: "Seychelles", image: "https://example.com/seychelles.jpg", price: "₹50,000" }
                    ]
                }
            }
        }
    });
};


exports.getDestinations = (req, res) => {
    const { funnel, channel, website, context, searchTerm, branch, departureCity, affiliate, lob } = req.body;

    return res.json({
        statusCode: 1,
        success: true,
        searchDestinationList: [
            {
                name: "POPULAR DESTINATIONS",
                type: "HEADER",
                packages: 0,
                displayName: "POPULAR DESTINATIONS"
            },
            {
                name: "Kerala",
                branch: "DOM",
                type: "DEST",
                url: "https://holidayz.makemytrip.com/holidays/india/search?dest=Kerala&depCity={DEP}",
                similarDestination: ["Sri Lanka_OBT", "Andaman_DOM", "South India_DOM", "Krabi_OBT", "Dubai_OBT"],
                packages: 187,
                displayName: "Kerala",
                destinationType: "STATE",
                data: { destinationCity: "Kerala", branch: "DOM" }
            },
            {
                name: "Thailand",
                branch: "OBT",
                type: "DEST",
                url: "https://holidayz.makemytrip.com/holidays/international/search?dest=Thailand&depCity={DEP}",
                similarDestination: ["Singapore_OBT", "Vietnam_OBT", "Andaman_DOM", "Dubai_OBT", "Hong Kong_OBT"],
                packages: 120,
                displayName: "Thailand",
                destinationType: "COUNTRY",
                data: { destinationCity: "Thailand", branch: "OBT" }
            },
            {
                name: "Andaman",
                branch: "DOM",
                type: "DEST",
                url: "https://holidayz.makemytrip.com/holidays/india/search?dest=Andaman&depCity={DEP}",
                similarDestination: ["Goa_DOM", "Kerala_DOM", "Krabi_OBT", "Maldives_OBT", "Mauritius_OBT"],
                packages: 115,
                displayName: "Andaman",
                destinationType: "STATE",
                data: { destinationCity: "Andaman", branch: "DOM" }
            },
            {
                name: "Dubai",
                branch: "OBT",
                type: "DEST",
                url: "https://holidayz.makemytrip.com/holidays/international/search?dest=Dubai&depCity={DEP}",
                similarDestination: ["Sri Lanka_OBT", "Andaman_DOM", "Singapore_OBT", "Bangkok_OBT", "Mauritius_OBT"],
                packages: 42,
                displayName: "Dubai",
                destinationType: "COUNTRY",
                data: { destinationCity: "Dubai", branch: "OBT" }
            },
            {
                name: "Goa",
                branch: "DOM",
                type: "DEST",
                url: "https://holidayz.makemytrip.com/holidays/india/search?dest=Goa&depCity={DEP}",
                similarDestination: ["Krabi_OBT", "Andaman_DOM", "Kerala_DOM", "Maldives_OBT", "Mauritius_OBT"],
                packages: 66,
                displayName: "Goa",
                destinationType: "STATE",
                data: { destinationCity: "Goa", branch: "DOM" }
            },
            {
                name: "Vietnam",
                branch: "OBT",
                type: "DEST",
                url: "https://holidayz.makemytrip.com/holidays/international/search?dest=Vietnam&depCity={DEP}",
                similarDestination: ["Hong Kong_OBT", "Thailand_OBT", "Singapore_OBT", "Malaysia_OBT", "Dubai_OBT"],
                packages: 63,
                displayName: "Vietnam",
                destinationType: "COUNTRY",
                data: { destinationCity: "Vietnam", branch: "OBT" }
            },
            {
                name: "Rajasthan",
                branch: "DOM",
                type: "DEST",
                url: "https://holidayz.makemytrip.com/holidays/india/search?dest=Rajasthan&depCity={DEP}",
                similarDestination: ["Golden Triangle_DOM", "Madhya Pradesh_DOM", "Dubai_OBT", "Maharashtra_DOM"],
                packages: 174,
                displayName: "Rajasthan",
                destinationType: "STATE",
                data: { destinationCity: "Rajasthan", branch: "DOM" }
            },
            {
                name: "Maldives",
                branch: "OBT",
                type: "DEST",
                url: "https://holidayz.makemytrip.com/holidays/international/search?dest=Maldives&depCity={DEP}",
                similarDestination: ["Australia_OBT", "Langkawi_OBT", "Fiji_OBT", "Bali_OBT", "Mauritius_OBT"],
                packages: 41,
                displayName: "Maldives",
                destinationType: "COUNTRY",
                data: { destinationCity: "Maldives", branch: "OBT" }
            },
            {
                name: "Bali",
                branch: "OBT",
                type: "DEST",
                url: "https://holidayz.makemytrip.com/holidays/international/search?dest=Bali&depCity={DEP}",
                similarDestination: ["Sri Lanka_OBT", "Maldives_OBT", "Mauritius_OBT", "Krabi_OBT", "Langkawi_OBT"],
                packages: 45,
                displayName: "Bali",
                destinationType: "CITY",
                data: { destinationCity: "Bali", branch: "OBT" }
            },
            {
                name: "Singapore",
                branch: "OBT",
                type: "DEST",
                url: "https://holidayz.makemytrip.com/holidays/international/search?dest=Singapore&depCity={DEP}",
                similarDestination: ["Malaysia_OBT", "Hong Kong_OBT", "Bali_OBT", "Dubai_OBT"],
                packages: 52,
                displayName: "Singapore",
                destinationType: "COUNTRY",
                data: { destinationCity: "Singapore", branch: "OBT" }
            }
        ]
    });
};
