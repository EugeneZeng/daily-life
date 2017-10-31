const User = require("./userModel");
const PointItems = require("./pointItems");

let userService = {
    addUser(params) {
        return User.create({
            name: params.name,
            role: params.role || "kits",
            face: params.face || "",
            updateDate: new Date()
        });
    },
    getUser(params) {
        if (params) {
            let where = Object.assign({}, params);
            return User.findAll({
                where: where
            });
        }
    },
    updateUser(params) {
        return User.findOne({ where: { uuid: params.uuid } })
            .then(user => {
                let accepts = ["name", "role", "own"];
                accepts.forEach(accept => params[accept] && (user[accept] = params[accept]));
                return user.save();
            });
    }
};

let pointItemService = {
    addPointItem(params) {
        return PointItems.create({
            name: params.name,
            point: params.point,
            status: 1
        });
    },
    getPointItems(params) {
        if (params) {
            let where = Object.assign({ status: 1 }, params);
            return PointItems.findAll({
                where: where
            });
        }
    },
    updatePointItem(params) {

    }
};

module.exports = {
    addUser: userService.addUser,
    getUser: userService.getUser,
    updateUser: userService.updateUser
};