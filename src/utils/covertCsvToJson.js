const csvToJson = require('csvtojson');
const csvFilePath = '../data/users.csv';

const convertFile = async () => {
  return await csvToJson().fromFile(csvFilePath);
}

export default convertFile;