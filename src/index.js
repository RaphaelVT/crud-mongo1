const express = require("express")
const app = express()
const port = 5000

const aeroporto_router = require("./router/aeroporto.js")
const caneta_router = require("./router/caneta.js")
const moto_router = require("./router/moto.js")
const refrigerante_router = require("./router/refrigerante.js")


app.use(express.json())

// areporto
app.use("/aeroporto", aeroporto_router)

//caneta
app.use("/caneta", caneta_router)

//moto
app.use("/moto", moto_router)

//refrigerante
app.use("/refrigerante", refrigerante_router)

app.listen(port, () => console.log("Servidor escutando na porta " + port))