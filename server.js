const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));           // Serves HTML files
app.use(express.json());                      // Parse JSON body

app.get('/data', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Failed to read file');
    res.send(JSON.parse(data));
  });
});

app.post('/data', (req, res) => {
  fs.writeFile('./data.json', JSON.stringify(req.body, null, 2), err => {
    if (err) return res.status(500).send('Failed to save data');
    res.send({ message: 'Data saved successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
