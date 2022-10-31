const fs = require('fs');

// Codificamos la data y la guardamos en el json
const saveToData = (data) => {
    fs.writeFileSync("./data/data.json", JSON.stringify(data, null, 2), {
    encoding: 'utf8'});
}

module.exports = {saveToData};