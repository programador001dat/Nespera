const express = require("express");  // Importando o modulo para dentro do codigo
const path = require("path"); // Modulo de manipulação de caminhos
const bodyParser = require("body-parser"); // Modulo para receber as requisições de um POST. etc.

const router = express.Router(); // Criando uma estancia do roteamento com express 5.1.0

// Configuração de Middleware, para cada GET retorne o IP da requisição.
const simpleMiddleware = (req, res, next) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    console.log(`=> requisição de ${ip}`);
    next();
}
router.use(simpleMiddleware); // Use dentro das rotas

// Criando uma rota
router.get("/", (req, res) => {
    res.statusCode = 200; // Codigo de sucesso
    res.setHeader("Content-Type","text/html"); // Tipo de cabeçalho HTML
    res.sendFile(path.join(__dirname, "../views", "article.html")); // renderizar o que tem dentro da pasta estatica views
});



module.exports = router;  // Exporta o codigo para outro arquivo.
