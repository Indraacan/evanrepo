const EventSchema = require("../Models/Event");

module.exports = {
  createData: (req, res) => {
    EventSchema.create({
      title: req.body.title,
      imageEvent: req.file && req.file.path,
      time: req.body.time,
      location: req.body.location,
      date: req.body.date,
      price: req.body.price,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getAllData: (req, res) => {
    EventSchema.find({})
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getDataById: (req, res) => {
    EventSchema.findById(req.params.userId)
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  deleteById: (req, res) => {
    EventSchema.findByIdAndRemove(req.params.userId)
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  updateDataById: (req, res) => {
    EventSchema.update(
      {
        title: req.body.title,
        imageEvent: req.file && req.file.path,
        time: req.body.time,
        location: req.body.location,
        date: req.body.date,
        price: req.body.price,
      },
      {
        where: { id: req.params.eventId },
      }
    )
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
