const errorHandler = require("./errors/errorHandler")
const notFound = require("./errors/notFound")


app.use(errorHandler)
app.use(notFound)