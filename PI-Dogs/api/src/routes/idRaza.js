require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const { Dog } = require('../db')
const axios = require("axios");

router.get('/:idRaza', async(req, res) => {
    const id = req.params.idRaza;
    
    if(id.length < 10){
        try{
            const resultApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
            const result = resultApi.data.filter(e => e.id === Number(id));
            result.length === 0?res.send("id no encontrado"):res.send(result);
        }
        catch(error){
            res.send(404);
        }
    }else{
        try{
            const resultDb = await Dog.findByPk(id);
            res.send(resultDb);
        }
        catch (error){
            res.send(404);
        }
    }
})

module.exports = router;