const Sequelize = require("Sequelize");
const sequelize = require("./db");

const PointItems = sequelize.define('pointItems', {
    uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV1,
        primaryKey: true
    },
    itemName: {
        type: Sequelize.STRING
    },
    point: {
        type: Sequelize.NUMBER,
        defaultValue: 0
    },
    updateDate: {
        type: Sequelize.DATE
    }
});

module.exports = PointItems;