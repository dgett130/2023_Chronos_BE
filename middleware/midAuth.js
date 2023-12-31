const auth = (req, res, next) => {
    const user = req.query.user;
    if (user === "admin") {
        req.user = {name: "admin", role: "admin", id: 1};
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}

module.exports = auth;