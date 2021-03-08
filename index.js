const fs = require('fs');


// const data = require("./github/workflow/event.json");

const event = JSON.parse(fs.readFileSync('/github/workflow/event.json', 'utf8'))

console.log(event);
