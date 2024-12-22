const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data/data.json');

app.use(cors());

app.get('/projects', (req, res) => {
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
