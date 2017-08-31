const fs = require('fs');

const meme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);
const icon = fs.readFileSync(`${__dirname}/../client/favicon.ico`);

const getMeme = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.write(meme);
  res.end();
};

const getIcon = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/x-icon' });
  res.write(icon);
  res.end();
};

module.exports = {
  getMeme,
  getIcon,
};
