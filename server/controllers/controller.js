const Ru = require("../files/Ru");
const Us = require("../files/Us");
const Ua = require("../files/Ua");

class Controller {
  getRuData(req, res) {
    const { seed, limit, page, errors } = req.query;
    const offset = page * limit;
    const data = Ru.generateData(seed, offset, limit, errors);
    res.json(data);
  }

  getUsData(req, res) {
    const { seed, limit, page, errors } = req.query;
    const offset = page * limit;
    const data = Us.generateData(seed, offset, limit, errors);
    res.json(data);
  }

  getUaData(req, res) {
    const { seed, limit, page, errors } = req.query;
    const offset = page * limit;
    const data = Ua.generateData(seed, offset, limit, errors);
    res.json(data);
  }

  getCsv(req, res) {
    const { seed, count, region } = req.query;
    let data;
    switch (region) {
      case "ru":
        data = Ru.generateCsv(seed, count);
        break;
      case "us":
        data = Us.generateCsv(seed, count);
        break;
      case "ua":
        data = Ua.generateCsv(seed, count);
        break;
    }
    res.json(data);
  }
}

module.exports = new Controller();