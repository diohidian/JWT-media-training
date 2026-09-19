const express = require('express');
const uploadRouter = express.Router();
const uploadCloudinary = require('../../libs/upload-cloudinary')
const uploader = require('../../middlewares/uploader')

// Upload method using multer
uploadRouter.post('/product', uploader.single('file'), async (req, res) => {
    res.status(200).json({
        message: "Upload Berhasil!",
        data: (process.env.NODE_ENV !== 'production') ? process.env.BASEURL + ':' + process.env.PORT + "/" + req.file.filename :
            process.env.BASEURL + "/" + req.file.filename
    })
})

uploadRouter.post("/cart", uploader.single('file'), async (req, res) => {
    const result = await uploadCloudinary(req.file.path)

    if (result && result.url) {
        res.status(200).json({
            message: "Upload Berhasil!",
            url: result.url
        })
    } else {
        res.status(400).json({
            message: "Upload Gagal!",
            url: null
        })        
    }
})

module.exports = uploadRouter