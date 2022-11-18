const { response } = require('express');
const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp'
};

try {
  //Telling multer where to store and how to name file
  const storage = multer.diskStorage({
    //where to store uploaded file
    destination: (request, file, callback) => {
      callback(null, 'images');
    },
    //how to name to store image
    filename: (request, file, callback) => {
      const name = file.originalname.split('.')[0].split(' ').join('_');
      const extension = MIME_TYPES[file.mimetype];
      callback(null, name + Date.now() + '.' + extension);
    }
  });
  
  
  module.exports = multer({storage: storage}).single('image');
  
} catch (error) {
  return response.status(500).json({message: error});
}