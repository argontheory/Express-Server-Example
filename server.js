const express = require('express')
const app = express()

app.use(require('./router'))

app.listen(3000, () => {
    console.log("Beta server is running!\nVisit http://localhost:3000")
})