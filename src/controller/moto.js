const moto = require("../models/moto.js")

const store =  (req, res) => {
    moto.create(req.body)
    res.json() 
}

const index =  (req, res) => {
    const content = moto.find(req.query).exec();
    res.json(content)
}

const show =  (req, res) => {
    const content = moto.findById(req.params.id).exec();
    res.json(content);
}

const update =  (req, res) => {
    moto.findByIdAndUpdate(req.params.id, req.body).exec()
    res.json()
}

const destroy =  (req, res) => {
    moto.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}