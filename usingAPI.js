const fetch = globalThis.fetch || require('node-fetch');

// URL for ur api
const BASE_URL = 'http://localhost:3000/api/items';

// Function that gets all items
async function getAllItems() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log('All items:', data);
    } catch (error) {
        console.error('Error fetching all items:', error);
    }
}


// Function to get a single item by ID
async function getItemById(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        console.log(`Item ${id}:`, data);
    } catch (error) {
        console.error(`Error fetching item ${id}:`, error);
    }
}

// Function to create a new item
async function createItem(name) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        const data = await response.json();
        console.log('Created item:', data);
    } catch (error) {
        console.error('Error creating item:', error);
    }
}

// Function to update an item by ID
async function updateItem(id, name) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        const data = await response.json();
        console.log(`Updated item ${id}:`, data);
    } catch (error) {
        console.error(`Error updating item ${id}:`, error);
    }
}

// Function to delete an item by ID
async function deleteItem(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
        const data = await response.json();
        console.log(`Deleted item ${id}:`, data);
    } catch (error) {
        console.error(`Error deleting item ${id}:`, error);
    }
}

// usage
(async () => {
    await getAllItems();            
    await createItem('New Item');    
    await getItemById(1);            
    await updateItem(1, 'Updated Item');
    await deleteItem(1);          
})();
