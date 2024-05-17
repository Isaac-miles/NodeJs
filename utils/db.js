const mysql = require('mysql2');
const Sequelize = require('sequelize');
// const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Isaacmiles247$',{
    dialect:'mysql',
    host:'127.0.0.1',
});

// const pool = mysql.createPool({
//     host:'127.0.0.1',
//     user:'root',
//     database:'node-complete',
//     password:'Isaacmiles247$'
// })

// module.exports = pool.promise();
module.exports = sequelize;