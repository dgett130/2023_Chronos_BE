## Project Structure
1. `config/`: Contains configuration files for the db and server.
2. `controllers/`: Contains the JS controller files.
3. `middleware/`: Contains the middleware ifles for authentication and validation
4. `migrations/`: Contains the migration class files of our database (here, tables of db since SQL is used).
5. `models/`: Contains the JS model files of our ORM.
6. `routes/`: Contains the JS route files to route requests to controllers.
7. `seeders/`: Contains the seeder class files to seed the database.
8. `services/`: Contains the files with the actual logic used to access the db.

## Return status
1. res.status(200) // Ok
2. res.status(201) // Created
3. res.status(204) // No content
4. res.status(400) // Bad request
5. res.status(401) // Unauthorized
6. res.status(403) // Forbidden
7. res.status(404) // Not found
8. res.status(500) // Server error
