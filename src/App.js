import logo from "./logo.svg";
import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));
  const handleAddContacts = () => {
    const addContacts =
      allContacts[Math.floor(Math.random() * allContacts.length)];
    const copy = [...contacts];
    copy.push(addContacts);
    setContacts(copy);
  };
  const handleSortPopularity = () => {
    const copy = [...contacts];
    copy.sort((a, b) => a.popularity - b.popularity);
    setContacts(copy);
  };

  const handleSortName = () => {
    const copy = [...contacts];
    copy.sort((c, d) => (c.name > d.name ? -1 : 1));
    setContacts(copy);
  };

  const handleDelete = (id) => {
    const newList = contacts.filter((contact) => contact.id !== id);
    setContacts(newList);
  };

  return (
    <div className="App">
      <section>
        <button className="a " onClick={handleAddContacts}>
          Add Random Contacts
        </button>
        <button className="b" onClick={handleSortPopularity}>
          Sort by Popularity
        </button>
        <button className="c" onClick={handleSortName}>
          Sort by Name
        </button>
      </section>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl}></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🌟"}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
