import React, { useState } from 'react'

const App = () => {
  const [items, setItems] = useState([])

  function handleAddItem(item) {
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItems={handleDeleteItem} onToggleItems={handleToggleItem} />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1>🌴Far away🧳</h1>
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);



  function handleSubmit(e) {
    e.preventDefault()

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  return <form className='add-form' onSubmit={handleSubmit}>
    <h3>What do you need for your 😍 trip?</h3>
    <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
      {Array.from({ length: 20 }, (_, i) => i + 1).map((num) =>
        <option value={num} key={num}>{num}</option>)}
    </select>
    <input type='text' placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
    <button>ADD</button>
  </form >
}

function PackingList({ items, onDeleteItems, onToggleItems }) {

  return <div className='list'>
    <ul>
      {items.map((item) => (<Item key={item.id} item={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} />))}
    </ul>
  </div>
}

function Item({ item, onDeleteItems, onToggleItems }) {
  return <li>
    <input type='checkbox' value={item.packed} onChange={() => onToggleItems(item.id)} />
    <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.description}</span>
    <button onClick={() => onDeleteItems(item.id)}>❌</button>
  </li>
}
function Stats() {
  return <footer className='stats'>
    <em>
      🧳 You have X items on your list, and you already packed X (X%)
    </em>
  </footer>
}

export default App