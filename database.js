const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "db4free.net",
    user: "fatecd",
    password: "c29dc661",
    database: "fatec_diadema"
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err);
        return;       
    }
    console.log('Conexão estabelecida com o banco de dados');
});

module.exports = connection;