
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const CartItemModel = sequelize.define('cartItem',{
    id:{
        type:DataTypes.STRING,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    
});

module.exports = CartItemModel;