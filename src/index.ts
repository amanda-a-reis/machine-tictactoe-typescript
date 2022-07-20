import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/index'

dotenv.config({ path: './.env' })

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', router)

const PORT = 5000
const host = '0.0.0.0'

const server = app.listen(PORT, host, () => console.log(`Server running on port ${PORT}`))

export default server
