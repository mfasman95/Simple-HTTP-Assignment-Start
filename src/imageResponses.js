const fs = require('fs');

const meme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getMeme = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.write(meme);
  res.end();
};

module.exports = {
  getMeme,
};
