const multer = require('multer');
const path = require ("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
         cb(null, './uploads')
    },

    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '_' + uniqueSuffix + fileExtension);
     }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image/')) {
        cb(null, true)
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
}

const uploader = multer({
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = uploader;