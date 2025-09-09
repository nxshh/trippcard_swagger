const headerMenuResponse = {
  statusCode: 1,
  success: true,
  headerMenu: [
    {
      name: "Honeymoon",
      priority: 2,
      type: "TEXT",
      image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3891/Sangla_Ajay%20Jain.jpg",
      subMenu: [
        {
          name: "MakeMyTrip Honeymoon Packages",
          priority: 3,
          type: "TEXT",
          image: "",
          subMenu: [
            {
              name: "Trending",
              priority: 1,
              deeplink: "https://holidayz.makemytrip.com/holidays/india/search?campaign=Themed%20Escapes%20for%20Honeymoons&mcat=Themed%20Escapes%20for%20Honeymoons",
              type: "IMAGE",
              image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Inspiration.jpg"
            }
          ]
        }
      ]
    }
  ],
  searchMenu: []
};


exports.getHeaderMenu = async (req, res) => {
  try {
    const { channel, website, funnel, affiliate, lob } = req.body;

    if (!channel || !website || !funnel || !affiliate || !lob) {
      return res.status(400).json({ statusCode: 0, success: false, message: "Missing required fields" });
    }

    res.status(200).json(headerMenuResponse);
  } catch (error) {
    console.error("Error in getHeaderMenu:", error);
    res.status(500).json({ statusCode: 0, success: false, message: "Server Error" });
  }
};


exports.getFilter = async (req, res) => {
  try {
    const { packageId, funnel, channel } = req.body;

    if (!packageId || !funnel || !channel) {
      return res.status(400).json({ statusCode: 0, success: false, message: "Missing required fields" });
    }

    const filterResponse = {
      statusCode: 1,
      success: true,
      filters: [
        { type: "PRICE", options: ["0-10000", "10001-20000", "20001-50000"] },
        { type: "DURATION", options: ["1-3 Days", "4-7 Days", "8+ Days"] }
      ]
    };

    res.status(200).json(filterResponse);
  } catch (error) {
    console.error("Error in getFilter:", error);
    res.status(500).json({ statusCode: 0, success: false, message: "Server Error" });
  }
};


exports.getPackages = async (req, res) => {
  try {
    const { destination, fromDate, toDate } = req.body;

    if (!destination || !fromDate || !toDate) {
      return res.status(400).json({ statusCode: 0, success: false, message: "Missing required fields" });
    }

    const packagesResponse = {
      statusCode: 1,
      success: true,
      packages: [
        { id: 101, title: "Goa Honeymoon Package", price: 25000, duration: "3 Days" },
        { id: 102, title: "Kerala Backwaters Package", price: 30000, duration: "4 Days" }
      ]
    };

    res.status(200).json(packagesResponse);
  } catch (error) {
    console.error("Error in getPackages:", error);
    res.status(500).json({ statusCode: 0, success: false, message: "Server Error" });
  }
};
