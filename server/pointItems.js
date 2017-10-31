const Sequelize = require("Sequelize");
const sequelize = require("./db");

const PointItems = sequelize.define('pointItems', {
    uuid: {
        type: DataTypes.INTEGER,
        defaultValue: function() {
            return Date.now();
        },
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    point: {
        type: Sequelize.NUMBER,
        defaultValue: 0
    },
    status: {
        type: Sequelize.NUMBER,
        defaultValue: 1
    }
});

module.exports = PointItems;