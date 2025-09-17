// configurações do servidor
const express = require("express");  // Importando o modulo para dentro do codigo
const path = require("path");
const bodyParser = require("body-parser");

const app = express();  // Criando um estancia do servidor

app.use(express.static(path.join(__dirname, "../public")));  // Configurando o servidor para servir pasta estaticas
app.use(bodyParser.urlencoded({extended: true}));



module.exports = app;  // Exportando para usar em outro codigo.

