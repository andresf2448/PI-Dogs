const { Router } = require('express');
const router = Router();
const { v4: uuidv4 } = require('uuid');
const { Dog, Temperament } = require('../db');

router.post('/', async (req, res) => {
    const dog = req.body;
    let idTemp;

    const createDog = await Dog.create({
        name: dog.name,
        life_span: dog.life_span,
        weight: dog.weight,
        height: dog.height,
        image: dog.image,
        id: uuidv4()
    });
    
    for(let i = 0; i < dog.temperaments.length; i++){
        try{
            idTemp = await Temperament.findAll({
                where: {
                    temperament: dog.temperaments[i]
                },
                attributes: ['id']
            })
            createDog.addTemperament(idTemp);
        }
        catch (erro){
            res.status(400);
        }
    }

    res.send(createDog);
})

module.exports = router;