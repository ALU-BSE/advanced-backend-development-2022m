To integrate MySQL with your Express application for CRUD operations, follow these steps:

1. **Install MySQL Driver**: Use npm to install the MySQL driver.
   ```bash
   npm install mysql
   ```

2. **Create a MySQL Connection**: Set up a connection to your MySQL database.
3. **Implement CRUD Operations**: Use the connection to perform CRUD operations.

### Step 1: Create a MySQL Connection
```javascript
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the MySQL server.');
});
```

### Step 2: Implement CRUD Operations

#### CREATE
```javascript
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  const sql = 'INSERT INTO items (name, description) VALUES (?, ?)';
  connection.query(sql, [name, description], (err, result) => {
    if (err) throw err;
    res.send('Item added successfully');
  });
});
```

#### READ All Items
```javascript
app.get('/items', (req, res) => {
  const sql = 'SELECT * FROM items';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
```

#### READ a Single Item by ID
```javascript
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM items WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});
```

#### UPDATE
```javascript
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const sql = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
  connection.query(sql, [name, description, id], (err, result) => {
    if (err) throw err;
    res.send('Item updated successfully');
  });
});
```

#### DELETE
```javascript
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM items WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send('Item deleted successfully');
  });
});
```

