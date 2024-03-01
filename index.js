const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());


app.get('/api/colleges/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM colleges WHERE id = ?';
  
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      if (result.length === 0) {
        res.status(404).json({ error: 'collegeId not found' });
      } else {
        res.status(200).json(result[0]);
      }
    });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});