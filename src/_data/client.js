module.exports = {
  name: "Rick's Mobile RV Service",
  email: "service@ricksmobilervservice.com",
  phoneForTel: "770-540-7462",
  phoneFormatted: "(770) 540-7462",
  address: {
    lineOne: "First Address Line",
    lineTwo: "Second Address Line",
    city: "Denver",
    state: "CO",
    zip: "80206",
    country: "US",
    mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
  },
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  hours: "7 days a week 9-7 (Winter 9-5)",
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.example.com",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
