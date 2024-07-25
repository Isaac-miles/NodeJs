const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const UserModel =  sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = UserModel;