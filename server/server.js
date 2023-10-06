const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000; //5000 express server port, 5432 for postgres, 3001 for mock API
const { Pool } = require('pg');

const db_config = {
    user: 'postgres',
    host: 'localhost',
    database: 'event_tracker',
    password: 'adminpassword',
    port: 5432,
}

const pool = new Pool(db_config);

app.use(cors());
app.use(express.json());

app.post('/page-events', async (req, res) => {
    try {
        const {eventType, timestamp, eventDetails} = req.body;
        await pool.query('INSERT INTO page_events (event_type, timestamp, event_details) VALUES ($1, $2, $3)', [eventType, timestamp, eventDetails]);
        res.status(200).send({status: 'success'});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
});

app.post('/ad-events', async (req, res) => {
    try {
        const {eventType, timestamp, eventDetails} = req.body;
        await pool.query('INSERT INTO ad_events (event_type, timestamp, event_details) VALUES ($1, $2, $3)', [eventType, timestamp, eventDetails]);
        res.status(200).send({status: 'success'});
    } catch (error) {
        res.status(500).send({status: 'error', message: error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

