import { Request, Response } from "express"

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Bangladesh I am Come Back !!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})