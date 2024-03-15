const logger  = (req, res, next) => {
    console.log("!!!! MIDDLEWARE !!!!")
    console.log("Url: " + req.url)
    next()
}

module.exports = logger