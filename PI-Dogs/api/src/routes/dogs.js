require('dotenv').config();
const { API_KEY } = process.env;
const { Dog } = require('../db');
const axios = require('axios');
const {Op} = require('sequelize');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {

    const {name} = req.query;

    if(!name){
        try {
            let results = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

            let eightResults = results.data.slice(0,8);
            console.log("melo");
            return res.send(eightResults);
        }
        catch (error){
            res.send(error);
        }
    }

    if(name){
        try {
            let resultsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

            let resultsApiFil = resultsApi.data.filter(x => x.name.includes(`${name}`));
            
            let resultsDb = await Dog.findAll({
                where: {name:{
                    [Op.iLike]: `%${name}%`
                }}
            });

            let resultsApiDb = resultsDb.concat(resultsApiFil);
            let results = resultsApiDb.slice(0,8);
            
            res.send(results);
        }
        catch (error){
            res.send(error);
        }
    }
});

module.exports = router;