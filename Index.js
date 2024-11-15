const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// sample data
let items = [
    { id: 1, name: "sample item1"}
]

// get - read all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// GET - read a single item by ID
app.get('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// POST - create a new item
app.post('/api/items', (req, res) => {
    const { name } = req.body;
    const newItem = {
        id: items.length + 1,
        name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// POST - update an existing item by ID
app.put('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const item = items.find(i => i.id === id);
    if (item) {
        item.name = name;
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// DELETE - delete an item by ID
app.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        res.json({ message: 'Item deleted' });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});


// starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
