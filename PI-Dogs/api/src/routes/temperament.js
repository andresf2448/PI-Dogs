const { Router } = require('express');
const router = Router();
const { Temperament } = require('../db');

router.get('/', async (req, res) => {
    const results = await Temperament.findAll();
    res.send(results);
})

module.exports = router;