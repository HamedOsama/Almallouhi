const multer = require("multer")
const path = require("path")

exports.uploadImage = multer({
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|jfif)$/))
      return cb(new Error('please upload image !'))
    cb(null, true)
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const fullPath = path.join(__dirname, '../images')
      cb(null, fullPath)
    },
    filename: (req, file, cb) => {
      const fileName = Date.now().toString() + "_" + file.originalname
      cb(null, fileName)
    }
  }),
})
exports.uploadImageController = async (req, res, next) => {
  if (req.file)
    res.status(201).json({
      ok: true,
      code: 201,
      message: "Image uploaded successfully",
      filename: req.file.filename
    });
  else
    res.status(400).json({
      ok: false,
      code: 400,
      message: "No image uploaded"
    });
}
