const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


let items = []; // This will act as our in-memory database

// CREATE
app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).send(item);
});

// READ all items
app.get('/items', (req, res) => {
  res.status(200).send(items);
});

// READ a single item by id
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const item = items.find(i => i.id === parseInt(id));
  if (item) {
    res.status(200).send(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// UPDATE
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(i => i.id === parseInt(id));
  if (index > -1) {
    const updatedItem = { ...items[index], ...req.body };
    items[index] = updatedItem;
    res.status(200).send(updatedItem);
  } else {
    res.status(404).send('Item not found');
  }
});

// DELETE
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(i => i.id === parseInt(id));
  if (index > -1) {
    items.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Item not found');
  }
});