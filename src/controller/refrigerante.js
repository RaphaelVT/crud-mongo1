const refrigerante = require("../models/refrigerante.js")

const store =  (req, res) => {
    refrigerante.create(req.body)
    res.json() 
}

const index =  (req, res) => {
    const content = refrigerante.find(req.query).exec();
    res.json(content)
}

const show =  (req, res) => {
    const content = refrigerante.findById(req.params.id).exec();
    res.json(content);
}

const update =  (req, res) => {
    refrigerante.findByIdAndUpdate(req.params.id, req.body).exec()
    res.json()
}

const destroy =  (req, res) => {
    refrigerante.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}