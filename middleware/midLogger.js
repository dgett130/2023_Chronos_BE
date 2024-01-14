const logger  = (req, res, next) => {
    console.log("!!!! MIDDLEWARE !!!!")
    console.log("Url: " + req.url)
    console.log("params: ")
    console.log(req.params)
    console.log("query: ")
    console.log(req.query)
    console.log("!!!! MIDDLEWARE !!!!")
    next()
}

module.exports = logger