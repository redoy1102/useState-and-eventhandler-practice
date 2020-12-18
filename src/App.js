import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect( () => {
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  }, [])

  const addMember = (fullName) => {
    setTeam([...team, fullName]);
  }

  return (
    <div className="App">
      <h1>Team builder</h1>
      <ul>
        {
          team.map(member => <h2>{member}</h2>)
        }
      </ul>

      {
        users.map(user => <User user={user} addMember={addMember}></User>)
      }
    </div>
  );
}

export default App;
