const express = require("express");
const service = require("./service");
const router = express.Router();

router.get("/user", (req, res) => {
    let json = { "data": "hello list", "code": 0, "msg": null };
    service.getUser(req.query)
        .then(result => {
            json.data = result;
            res.json(json);
        }).catch(e => {
            console.error(e);
            json.data = null;
            json.code = 500;
            json.msg = e.message;
            res.json(json);
        });
});

router.post("/user", (req, res) => {
    let json = { "data": "hello list", "code": 0, "msg": null };
    service.addUser(req.body)
        .then(result => {
            json.data = result;
            res.json(json);
        }).catch(e => {
            console.error(e);
            json.data = null;
            json.code = 500;
            json.msg = e.message;
            res.json(json);
        });
});

router.put("/user", (req, res) => {
    let json = { "data": "hello list", "code": 0, "msg": null };
    service.updateUser(req.body)
        .then(result => {
            json.data = result;
            res.json(json);
        }).catch(e => {
            console.error(e);
            json.data = null;
            json.code = 500;
            json.msg = e.message;
            res.json(json);
        });
});
module.exports = router;