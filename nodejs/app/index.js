const
execute = require('./mysql_con.js')
const express = require('express')
const app = express()
const port = 80

//execute.select('SELECT 1 + 1 AS solution')
execute.sql("select * from people")


app.get('/', (req, res) => {
  res.send(JSON.stringify(execute.select("SELECT 1 + 1 AS solution")[0]))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})