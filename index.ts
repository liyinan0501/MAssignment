import express from 'express'
import bodyParser from 'body-parser'
import getData from './modules/getData'
import getRank from './modules/getRank'
import getAverage from './modules/getAverage'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/get-data', getData)
app.get('/get-average/:pro', getAverage)
app.get('/get-rank', getRank)

app.get('**', (_, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
