const express = require("express")
const app = express()

const errorHandler = require("./middleware/error-handler")

const pdfRouter = require("./routers/pdf-router")

const cors = require("cors")

app.use(express.json())
app.use(cors())

app.use('/api/v1/pdf', pdfRouter)

app.use(errorHandler)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});