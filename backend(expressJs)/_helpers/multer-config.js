
// midelleware   for upload files

const multer = require('multer');
const fileConfigue = {
  destination: (req, file, callback) => {
    callback(null, 'pdfs');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    callback(null, Date.now() + name);
  }
}
const storage = multer.diskStorage(fileConfigue);

module.exports = multer({ storage: storage }).single('pdf');