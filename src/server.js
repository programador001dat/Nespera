const app = require("./app"); 

require("dotenv").config(); // Importando o modulo para trazer o endereço e porta para dentro do servidor

const PORT = process.env.PORT; 
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
    console.log("oOo...... Framework Express 5.1.0 ......oOo\n");
    console.log(`[+] http://${HOST}:${PORT}\n`);
});
