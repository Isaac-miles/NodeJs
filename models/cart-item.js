
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const CartItemModel = sequelize.define('cartItem',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    quantity:DataTypes.INTEGER
    
});

module.exports = CartItemModel;