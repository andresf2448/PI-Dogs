//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Temperament } = require('./src/db')
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    try{
      const resultDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

      let temperaments = "";
      for(let i = 0; i < resultDogs.data.length; i++){
        let temp = resultDogs.data[i].temperament;
        temperaments += temp;
        if(i === resultDogs.data.length){
          continue;
        }
        temperaments += ", ";
      }
      temperaments = temperaments.split(', ');

      const arr = new Set(temperaments.sort());
      let temperamentsUni = [...arr];
      
      temperamentsUni.slice(1,temperamentsUni.length - 1).map(e => {
        Temperament.findOrCreate({
          where:{
            temperament: e
          }
        })
      })
    }
    catch (error){
      console.log(error);
    }
  });
});