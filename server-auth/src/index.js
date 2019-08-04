import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const port = 80

app.get('/', (req, res) => res.send('Hello World! I\'m auth'))
app.get('/test/api', (req, res) => res.send({ success: true }))
app.get('/test/users', (req, res) => res.send({
  success: true,
  users: [
    { id: 'aba', name: 'khoa' },
    { id: 'nat', name: 'nhật' },
    { id: 'lia', name: 'hợp' }
  ]
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
