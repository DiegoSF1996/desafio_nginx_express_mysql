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
    createPeopleTable: function () {
        const sql = `
                    CREATE TABLE IF NOT EXISTS people (
                        id int NOT NULL AUTO_INCREMENT,
                        name varchar(255) NOT NULL,
                        PRIMARY KEY (ID)
                    );
                `
        connection.query(sql, (err, rows, fields) => {
            return rows
        })
    },
    insert: async function (query){
        return new Promise((resolve, reject) => {
            connection.query(query, (err, rows, fields) => {
                if (err) {
                    console.error(err);
                    return reject(err);
                }
                resolve(rows);
            });
        });

    },
    select:  async function (query) {
        return new Promise((resolve, reject) => {
            connection.query(query, (err, rows, fields) => {
                if (err) {
                    console.error(err);
                    return reject(err);
                }
                resolve(rows);
            });
        });
    },
};