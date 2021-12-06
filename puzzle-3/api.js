const express = require('express')
const app = express()
const api = express.Router()
const baseUrl = 'http://localhost'
const port = 3000
const apiUrl = `${baseUrl}:${port}/api`

app.use('/api', api)

app.listen(port, () => {
    console.log(`✓ Elf Coffee Shop backend running`)
    console.log(`✓ API available through ${apiUrl}`)
})

module.exports = { api, apiUrl }
