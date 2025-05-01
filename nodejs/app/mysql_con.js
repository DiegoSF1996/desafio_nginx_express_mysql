const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'mysql_desafio_2',
    port: '3306',
    user: 'desafio_2',
    password: 'desafio_2',
    database: 'desafio_2'
})

connection.connect()

module.exports = {
    select: function (query) {
        return connection.query(query, (err, rows, fields) => {
            console.log(rows[0])

            return rows
        })
    },
};