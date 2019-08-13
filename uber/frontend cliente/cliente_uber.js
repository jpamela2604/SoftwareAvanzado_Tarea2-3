



var Request = require("request");

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:7002/bus",
    "body": JSON.stringify({
        "ID": "C5896",
        "altitud": "CLIENTE",
        "latitud": "CLIENTE"
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});