import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return <button onClick={onClick} className="button">{children}</button>
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => cur?.id === friend.id ? null : friend)

    setShowAddFriend(false);
  }

  return <div className="app">
    <div className="sidebar">
      <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />

      {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
      <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
    </div>
    {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
  </div >
}

function FriendsList({ friends, onSelection, selectedFriend }) {

  return <ul>
    {friends.map((friend) => (
      <Friend selectedFriend={selectedFriend} friend={friend} key={friend.id} onSelection={onSelection} />
    ))}
  </ul>
}

function Friend({ friend, onSelection, selectedFriend }) {

  const isSelected = selectedFriend?.id === friend.id;

  return <li className={isSelected ? 'selected' : ''}>
    <img src={friend.image} alt={friend.name} />
    <h3>{friend.name}</h3>

    {friend.balance < 0 && (
      <p className="red">
        You owe {friend.name} {Math.abs(friend.balance)}$
      </p>
    )}
    {friend.balance > 0 && (
      <p className="green">
        {friend.name} owes you {Math.abs(friend.balance)}$
      </p>
    )}
    {friend.balance === 0 && (
      <p>
        You and {friend.name} are even
      </p>
    )}

    <Button onClick={() => onSelection(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
  </li>
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48?u=499476')

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id, name, image: `${image}?=${id}`, balance: 0,
    }

    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48?u=499476');
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>🌟Image URL</label>
      <input type="text" value={image} onChange={e => setImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  )
}

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  return <form className="form-split-bill">
    <h2>Split a bill with {selectedFriend.name}</h2>

    <label>💰Bill Value</label>
    <input type="text" value={bill} onChange={(e) => setBill(Number((e.target.value)))} />

    <label>✈️Your expense</label>
    <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(Number((e.target.value) > bill ? paidByUser : (Number(e.target.value))))} />

    <label>🧑‍🤝‍🧑{selectedFriend.name}'s expense</label>
    <input type="text" disabled value={paidByFriend} />

    <label>🤑Who is paying the bill</label>
    <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
      <option value='user'>You</option>
      <option value='friend'>{selectedFriend.name}</option>
    </select>

    <Button>Split Bill</Button>
  </form>
}