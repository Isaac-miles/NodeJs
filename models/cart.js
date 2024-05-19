
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const CartModel = sequelize.define('cart',{
    id:{
        type:DataTypes.STRING,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    
});

module.exports = CartModel;