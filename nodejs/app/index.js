const
  execute = require('./mysql_con.js')
const express = require('express')
const app = express()
const port = 80

execute.createPeopleTable()

   
app.get('/', async (req, res) => {
  await execute.insert("insert into people (name) values ('diego')")
  const dados = await execute.select("SELECT * from people");
  res.send(dados)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})