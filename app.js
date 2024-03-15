
const PORT = process.env.port || 3000;


//Dichiarazione del modulo express
const express = require('express');

//Aggiunta del modulo cors
const cors = require('cors');

//Dichiarazione dei Middleware
const logger = require("./middleware/midLogger");
const auth = require("./middleware/midAuth");

//Dichiarazione delle routes
const projects_routes = require("./routes/projects");
const project_types_routes = require("./routes/project-types");
const records_routes = require("./routes/records");

//Assegno il modulo express alla variabile app per utilizzarne le funzionalità
const app = express();

app.use(express.json());

app.use(cors(
    {
        origin: function(origin, callback) {
            if (origin === "http://localhost:3001") {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true
    }
));

app.use('/status',logger)
app.use('/about',[logger, auth])
app.use("/api/projects", logger, projects_routes);
app.use("/api/project-types", logger, project_types_routes);
app.use("/api/records", logger, records_routes);

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
