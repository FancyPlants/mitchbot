const fs = require('fs');
const path = require('path');

const main = async () => {
  const pathName = path.join(__dirname, 'cash');
  const files = await readdirAsync(pathName);
  console.log(files);
};

const readdirAsync = (path) => new Promise((res, rej) => {
  fs.readdir(path, (err, files) => err ? rej(err) : res(files));
})

module.exports = {
  readdirAsync,
};
