const express = require("express")
const cookieParser = require("cookie-parser")


const app = express()

app.use(express.json())
app.use(cookieParser())

const authRouters = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")

app.use("/api/auth", authRouters)
app.use("/api/account", accountRouter)

module.exports = app