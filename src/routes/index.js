const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const router = express.Router();

const simpleMiddleware = (req, res, next) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    console.log(`=> requisição de ${ip}`);
    next();
}
router.use(simpleMiddleware);

router.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.sendFile(path.join(__dirname, "../views", "article.html"));
});


module.exports = router;