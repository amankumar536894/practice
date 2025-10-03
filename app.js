import express from 'express'
import dotenv from 'dotenv'
dotenv.config({
    quiet: true
})

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
