
const PORT = process.env.port || 3000;


//Dichiarazione del modulo express
const express = require('express');

//Dichiarazione dei Middleware
const logger = require("./middleware/midLogger");
const auth = require("./middleware/midAuth");

//Dichiarazione delle routes
const projects_routes = require("./routes/projects");

//Assegno il modulo express alla variabile app per utilizzarne le funzionalità
const app = express();

app.use(express.json());

app.use('/status',logger)
app.use('/about',[logger, auth])
app.use("/api/projects", logger, projects_routes);

/**** ROUTES ****/

app.get('/', function (req, res) {
    res.send('Hello World!');
});

/** General **/

app.get("/status", (req, res) => {
    const status = {
        status: "ok",
        timestamp: Date.now(),
        uptime: process.uptime(),
    };

    res.send(status);
});

app.get('/about', (req, res) => {
    return res.send('About Page')
})


// Start of a server on port 3000
app.listen(PORT, function () {
    console.log('Chronos listening on port 3000!');
});
