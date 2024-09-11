const mongoose = require("mongoose")

const mongoDB = "mongodb+srv://teste:teste@cluster0.ubya0.mongodb.net/principal"

async function index() {
    await mongoose.connect(mongoDB)
}

index()
    .then(() => console.log("Conexão realizada com sucesso"))
    .catch(err => console.log(err))

module.exports = mongoose