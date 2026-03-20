const express = require('express');
const mysql = require('mysql2');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

const counter = new client.Counter({
  name: 'my_app_requests_total',
  help: 'Total number of requests',
  registers: [register]
});

const db = mysql.createConnection({
  host: process.env.DB_HOST || '192.168.190.30',
  user: process.env.DB_USER || 'appuser',
  password: process.env.DB_PASSWORD || 'apppass',
  database: process.env.DB_NAME || 'appdb'
});

db.connect(err => {
  if (err) console.error('DB error:', err);
  else console.log('DB connected');
});

app.get('/', (req, res) => {
  counter.inc();
  res.send('Hello World');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(4000, () => {
  console.log('App running on port 4000');
});
