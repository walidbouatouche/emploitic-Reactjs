
// midelleware   for upload files

// only pdf files
const multer = require('multer');
const jwt = require('jsonwebtoken');

const fileConfigue = {
  destination: (req, file, callback) => {
    callback(null, 'pdfs');
  },
  filename: (req, file, callback) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    const name = userId + '.pdf';
    callback(null, name);
  }
}
const storage = multer.diskStorage(fileConfigue);


module.exports = multer({ storage: storage }).single('pdf');