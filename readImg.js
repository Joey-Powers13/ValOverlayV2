const axios = require("axios");
const fs = require("fs");

const image = fs.readFileSync("./img/valorant-headshot-gray.png", {
    encoding: "base64"
});

const key = "hehehe if the api key you wish to see, first you must solve my riddles three";

axios({
    method: "POST",
    url: "https://detect.roboflow.com/valorant-images-jtdwe/2",
    params: {
        api_key: key
    },
    data: image,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error.message);
});
