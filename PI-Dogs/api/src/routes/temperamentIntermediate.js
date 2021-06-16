require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Dog, Temperament } = require('../db');

router.get('/:tempe', async (req, res) => {
    try{
        const tempe = req.params.tempe;
        let temperamentDogs;
    
        let dataIntermediate = await Temperament.findAll({
            include: {model: Dog}
        });

        for(let i = 0; i < 124; i++){
            if(dataIntermediate[i].temperament === tempe){
                temperamentDogs = dataIntermediate[i].dogs;
            }
        }
        
        let resultsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

        let resultsTempe = resultsApi.data.filter(x => x.temperament !== undefined);

        let resultsFil = resultsTempe.filter(x => x.temperament.includes(tempe));

        let resultsApiDb = temperamentDogs.concat(resultsFil);
        
        res.send(resultsApiDb);
    }
    catch (error){
        res.status(404);
    }
})

module.exports = router;