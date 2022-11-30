const axios = require("axios");
// axios gets the url and configurations as parameters

const dotenv = require("dotenv").config();

const input = process.argv.slice(2);

const options = {
  headers: {
    app_id: process.env.APP_ID,
    app_key: process.env.APP_API_KEY,
  },
};

async function getData() {
  const response = await axios.get(
    `https://od-api.oxforddictionaries.com:443/api/v2/entries/en-us/${input}`,
    options
  );

    const definitions =
      response.data.results[0].lexicalEntries[0].entries[0].senses.map(
        (item) => {
          return item.definitions[0];
        }
      );

    const newObject = Object.entries(definitions);

    console.log("Definitions:", definitions);
}

getData();
