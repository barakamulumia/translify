const controller = require("../controllers/photos.controller"),
  multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 5000000, //5mb
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      cb(new Error("Only upload files with jpg|jpeg|png format"));
    }
    cb(undefined, true); // continue with upload
  },
});

module.exports = function (app) {
  app.get("/api/photos/:id", controller.getPhotoById);

  app.get("/api/photos/img-id", controller.getUserProfilePhotoID);

  app.post(
    "/api/photos",
    upload.single("photo"),
    controller.uploadPhoto,
    (err, req, res, next) => {
      if (err) {
        res.status(500).json({
          upload_error: err.message,
        });
      }
    }
  );
};
