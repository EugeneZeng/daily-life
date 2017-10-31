const Sequelize = require('sequelize');
const config = require('../configure/config');
module.exports = new Sequelize('dailyLife', null, null, config.db);