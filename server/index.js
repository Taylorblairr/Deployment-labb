const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'server/index.js')))


app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './server/index.js'))
  })

app.listen(port, () => {
    console.log(`Lab server listening at http://localhost:${port}`)
  })