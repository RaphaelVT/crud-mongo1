const { model } = require("mongoose");
const db = require("../db.js");
const Schema = db.Schema;

const aeroportoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
       type: Schema.Types.Mixed,
        required: true
    }

});

const aeroporto = db.model("aeroporto", aeroportoSchema);

module.exports = aeroporto;