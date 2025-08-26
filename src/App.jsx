import { useEffect, useState } from "react";
import User from "./components/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
      );
      const data = await response.json();

      setUsers(data);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length === 0) alert("Ingen brugere!");
  }, [users]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      id: crypto.randomUUID(),
      name: form.name.value,
      mail: form.mail.value,
      title: form.title.value,
    };
    setUsers([...users, newUser]);
    form.reset();
  }

  return (
    <>
      <Header></Header>
      <div className="page">
        <h2>Users</h2>
        <section className="grid">
          {users.map((user) => (
            <User user={user} />
          ))}
          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Navn" />
            <input type="mail" placeholder="Mail" />
            <input type="title" placeholder="Titel" />
            <input type="image" placeholder="Billede-URL" />
            <button type="submit">Tilføj bruger</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
