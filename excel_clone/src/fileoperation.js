const fs = require("fs");
const readDataFromFile = (filepath)=>{
  const data = fs.readFileSync(filepath);
  return JSON.parse(data)
}

module.exports = {readDataFromFile}