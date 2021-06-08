const { Router } = require('express');
const router = Router();
const { v4: uuidv4 } = require('uuid');
const { Dog } = require('../db');

router.post('/', async (req, res) => {
    const dog = req.body;

    const createDog = await Dog.create({
        name: dog.name,
        life_span: dog.life_span,
        weight: dog.weight,
        height: dog.height,
        image: dog.image,
        id: uuidv4()
    });

    res.send(createDog);
})

module.exports = router;