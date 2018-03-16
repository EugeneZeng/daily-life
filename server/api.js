const express = require("express");
const service = require("./service");
const router = express.Router();
const config = require("../configure/config");
const fs = require("fs");

function scandir(dirpath) {
    let result = [];
    let isNotExist = true;
    console.log(dirpath)
    try {
        fs.accessSync(dirpath, fs.constants.R_OK);
        isNotExist = false;
    } catch (err) {
        console.error(err);
        isNotExist = true;
    }
    if(isNotExist){
        return null;
    }
    let ls = fs.readdirSync(dirpath);
    ls.forEach(item => {
        let currentPath = `${dirpath}/${item}`;
        let stat = fs.statSync(currentPath);
        if(stat.isDirectory()){
            let dir = {};
            dir[item] = scandir(currentPath);
            result.push(dir);
        } else if(stat.isFile){
            result.push(currentPath);
        }
    });
    return result;
}

router.get("/user", (req, res) => {
    let json = {
        "data": "hello list",
        "code": 0,
        "msg": null
    };
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
    let json = {
        "data": "hello list",
        "code": 0,
        "msg": null
    };
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
    let json = {
        "data": "hello list",
        "code": 0,
        "msg": null
    };
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

router.get("/vedioList", (req, res) => {
    let ls = scandir(config.vedioPath);
    res.json(ls);
})
module.exports = router;