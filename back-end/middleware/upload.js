const multer = require('multer');
const path = require("path");
const shortId = require('shortid')
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..", "assets"),
        filename: function (req, file, cb) {
                cb(null, shortId.generate() + '-' + file.originalname)
              },

    })
}