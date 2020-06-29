
// midelleware   for upload files

// only pdf files
const multer = require('multer');
const jwt = require('jsonwebtoken');

const fileConfigue = {
  destination: (req, file, callback) => {
    callback(null, 'pdfs');
  },
  filename: (req, file, callback) => {
    const decodedToken = jwt.verify(req.headers.authorization, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    const name = userId + '.pdf';
    callback(null, name);
  }
}
const storage = multer.diskStorage(fileConfigue);


module.exports = multer({ storage: storage }).single('pdf');