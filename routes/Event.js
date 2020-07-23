const express = require("express");
const router = express.Router();
const EventController = require("../Controller/Event");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./public/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

router.post("/create", upload.single("imageEvent"), EventController.createData);
router.get("/show", EventController.getAllData);
router.get("/show/:eventId", EventController.getDataById);
router.put("/edit/:eventId", EventController.updateDataById);
router.delete("/delete/:eventId", EventController.deleteById);

module.exports = router;
