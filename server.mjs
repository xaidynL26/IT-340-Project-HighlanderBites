import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());

const LOG_FILE = '/var/log/highlander/backend.log';

app.post('/log', (req, res) => {
  const msg = `[${new Date().toISOString()}] ${req.body.message}\n`;
  fs.appendFile(LOG_FILE, msg, (err) => {
    if (err) return res.status(500).json({ error: 'Failed to write log' });
    res.json({ success: true });
  });
});

app.listen(4000, () => console.log('Logging server running on port 4000'));
