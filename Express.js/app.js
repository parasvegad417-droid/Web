const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/blog/:slug', (req, res) => {
  res.send(`Hello World ${req.params.slug}`);
  console.log(req)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
