const Sequelize = require("Sequelize");
const sequelize = require("./db");
const DataTypes = Sequelize.DataTypes;

const User = sequelize.define('user', {
    uuid: {
        type: DataTypes.INTEGER,
        defaultValue: function() {
            return Date.now();
        },
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING //values: "kits", "parents", "family"
    },
    own: {
        type: DataTypes.STRING
    },
    face: {
        type: DataTypes.STRING
    },
    updateDate: {
        type: DataTypes.DATE
    }
});

module.exports = User;