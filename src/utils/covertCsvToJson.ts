import csvToJson from "csvtojson";
const csvFilePath = "./../data/users.csv";
console.log(csvFilePath)

async function convertFile() {
  const jsonArray = await csvToJson().fromFile(csvFilePath);
  return jsonArray;
}

export default convertFile;
