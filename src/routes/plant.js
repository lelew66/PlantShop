const fs = require("fs");
const express = require("express");
const router = express.Router();
const axios = require("axios");

const palntIDArray = ["721", "711", "546", "540", "552", "549", "625", "543"];
// const indoorURL = `https://perenual.com/api/species-list?key=sk-3w2n653a8208191c12723&indoor=1`;
const plant721URL = `https://perenual.com/api/species/details/${palntIDArray[0]}?key=sk-3w2n653a8208191c12723`;
const plant711URL = `https://perenual.com/api/species/details/${palntIDArray[1]}?key=sk-3w2n653a8208191c12723`;
const plant546URL = `https://perenual.com/api/species/details/${palntIDArray[2]}?key=sk-3w2n653a8208191c12723`;
const plant540URL = `https://perenual.com/api/species/details/${palntIDArray[3]}?key=sk-3w2n653a8208191c12723`;
const plant552URL = `https://perenual.com/api/species/details/${palntIDArray[4]}?key=sk-3w2n653a8208191c12723`;
const plant549URL = `https://perenual.com/api/species/details/${palntIDArray[5]}?key=sk-3w2n653a8208191c12723`;
const plant625URL = `https://perenual.com/api/species/details/${palntIDArray[6]}?key=sk-3w2n653a8208191c12723`;
const plant543URL = `https://perenual.com/api/species/details/${palntIDArray[7]}?key=sk-3w2n653a8208191c12723`;
const FAQURL = `https://perenual.com/api/article-faq-list?key=sk-3w2n653a8208191c12723`;

router.get("/", async (req, res) => {
  try {
    //   const testData = "This is some test data"; // Define your test data here
    //   res.render("plant", { testData });
    // });

    //   const plantAPI = await axios.get(indoorURL);
    const plant721 = await axios.get(plant721URL);
    const plant711 = await axios.get(plant711URL);
    const plant546 = await axios.get(plant546URL);
    const plant540 = await axios.get(plant540URL);
    const plant552 = await axios.get(plant552URL);
    const plant549 = await axios.get(plant549URL);
    const plant625 = await axios.get(plant625URL);
    const plant543 = await axios.get(plant543URL);

    //   console.log(plantAPI.data);
    console.log(plant721.data);
    console.log(plant711.data);
    console.log(plant546.data);
    console.log(plant540.data);
    console.log(plant552.data);
    console.log(plant549.data);
    console.log(plant625.data);
    console.log(plant543.data);
    //   console.log(plantFAQ.data);

    //
    //   const plantsArray = Object.values(plantAPI.data);
    const plant721Array = Object.values(plant721.data);
    const plant711Array = Object.values(plant711.data);
    const plant546Array = Object.values(plant546.data);
    const plant540Array = Object.values(plant540.data);
    const plant552Array = Object.values(plant552.data);
    const plant549Array = Object.values(plant549.data);
    const plant625Array = Object.values(plant625.data);
    const plant543Array = Object.values(plant543.data);
    // console.log(plant721Array);

    res.render("plant", {
      // plants: plantsArray,
      plant721: plant721Array,
      plant711: plant711Array,
      plant546: plant546Array,
      plant540: plant540Array,
      plant552: plant552Array,
      plant549: plant549Array,
      plant625: plant625Array,
      plant543: plant543Array,
      // FAQ: FAQArray,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.error("Error", error.message);
    }
  }
});
// export routes and middleware here
module.exports = router;
