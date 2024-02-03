module.exports = {
    name: "tarasis.net", // optional, falls back to object key
    description: "Rob's Blog & Personal Site",
    // skip if localhost
    // skip if this is a new fork of the speedlify (not Zach’s)
    // skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
    skip: false,
    options: {
        frequency: 1, //60 * 23, // 23 hours
        // Use "run" if the sites don’t share assets on the same origin
        //           and we can reset chrome with each run instead of
        //           each site in every run (it’s faster)
        // Use "site" if sites are all on the same origin and share assets.
        freshChrome: "site",
        // runs: 1,
    },
    urls: [
        "https://tarasis.net",
        // in theory individual pages on site
    ],
};
