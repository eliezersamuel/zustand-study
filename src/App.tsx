import './App.css'
import { userStore } from './store/userStore'

function App() {
  const {users, removeUser} = userStore();

  return (
    <ul>
      {
        users.map(user => (
          <li key={user.id}>
            <span>Nome: {user.first_name + ' ' + user.last_name}</span><br/>
            <span>E-mail: {user.email}</span><br/>
            <button
              onClick={() => {
                removeUser(user.id);
              }}
            >
              Remove User
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default App
