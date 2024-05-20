
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const OrderItemModel = sequelize.define('orderitem',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }    
});

module.exports = OrderItemModel;