IMPORTANT NOTE IN SUBMISSION BOX!

Setup:
Prerequisites:
Node.js version: 18.0.0
PostgresSQL version: 16.0
Git (for cloning the project)

clone the repository to your machine:
git clone https://github.com/LiadArama/CIQ-Website.git

Install PostgreSQL and setup the database using the provided .sql file.
Update the database connection details in your API server code.

PORT for React: 3000, hosted on http://localhost:3000
PORT for Node: 5000, hosted on http://localhost:5000
PORT for PostgresSQL: 5432 hosted on http://localhost:5432
PORT for mock API server: 3001 hosted on http://localhost:3001

in order to install all packages from react package.json run:
```npm install```

in order to install all packages from node package.json run:
navigate to server folder (cd server)
run npm init -y
run npm install

Make sure PostgresSQL server is running on your machine.
PostgresSQL server version: 16.0
Database name: event_tracker.
Username: postgres.
password: adminpassword (for my machine, you can change it in the server.js file).
host: localhost.

Make sure to run the event_tracker.sql file.
If fails navigate to snippets folder and run the snippet.sql file content under psql shell.

In order to run the mock API server:
npm run api.

Run the Applications:
API Server:
navigate to server folder (cd server)
node server.js

React start application:
npm start.

Key challenges:
Finding commercials for this project was harder than I thought.
Setting up the database was a bit tricky, since it was my one of the few times using PostgresSQL.
I had a problem with cors (cross-origin resource sharing) when I tried to fetch data from the API server.

Other than that I had a lot of fun working on this project.
I learned some new stuff like utilizing the SPA principles when coming to event tracking on one document.
I also learned how to use PostgresSQL and how to use it with Node.js.

I hope you will enjoy my project.
Liad Arama.