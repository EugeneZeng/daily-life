const Sequelize = require("Sequelize");
const db = require("./db");

const User = db.define('user', {
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
    role: {
        type: Sequelize.STRING //values: "kits", "parents", "family"
    },
    own: {
        type: Sequelize.STRING
    },
    face: {
        type: Sequelize.STRING
    },
    updateDate: {
        type: Sequelize.DATE
    }
});

module.exports = User;