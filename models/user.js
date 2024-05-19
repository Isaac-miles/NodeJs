const {Sequelize, DataTypes} = require('sequelize');

const UserModel = new Sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    }
})