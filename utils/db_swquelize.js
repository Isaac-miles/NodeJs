// const Sequelize = require('sequelize');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Isaacmiles247$',{
    dialect:'mysql',
    host:'127.0.0.1',
});

module.exports = sequelize;