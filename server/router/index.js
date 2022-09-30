const { Router } = require('express');

const Controller = require('../controllers/controller');

const router = new Router();

router.get('/ru', Controller.getRuData);
router.get('/us', Controller.getUsData);
router.get('/ua', Controller.getUaData);
router.get('/csv', Controller.getCsv);

module.exports = router;