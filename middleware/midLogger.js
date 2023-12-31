const logger  = (req, res, next) => {
    console.log("!!!! MIDDLEWARE !!!!")
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    console.log("!!!! MIDDLEWARE !!!!")
    next()
}

module.exports = logger