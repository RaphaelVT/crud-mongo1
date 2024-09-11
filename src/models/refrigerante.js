const { model } = require("mongoose");
const db = require("../db.js");
const Schema = db.Schema;

const refrigeranteSchema = new Schema({
    porcentagem_suco: {
        type: String,
        required: true
    },
    kcal200ml: {
        type: Number,
        required: true
    },
    sabor:{
        type: String,
        required: true
    },
    tamanhoMl:{
        type: Number,
        required: true
    }

});

const refrigerante = db.model("refrigerante", refrigeranteSchema);

module.exports = refrigerante;