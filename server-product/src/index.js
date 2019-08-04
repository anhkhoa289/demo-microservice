import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const port = 80

app.get('/', (req, res) => res.send('Hello World! I\'m product'))
app.get('/test/api', (req, res) => res.send({ success: true }))
app.get('/test/products', (req, res) => res.send({
  success: true,
  products: [
    { id: 'para', name: 'laptop' },
    { id: 'tani', name: 'desktop' },
    { id: 'liti', name: 'smartphone' }
  ]
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
