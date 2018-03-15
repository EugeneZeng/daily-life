const Sequelize = require("Sequelize");
const sequelize = require("./db");

const PointItems = sequelize.define('pointItems', {
    uuid: {
        type: Sequelize.INTEGER,
        defaultValue: function() {
            return Date.now();
        },
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    point: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
});

module.exports = PointItems;