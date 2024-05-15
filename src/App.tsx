import Button from "./Components/Button";
import { useUser } from "./context/users";
import { useBearStore } from "./store";

function App() {
  const bears = useBearStore((state) => state.bears);

  const { users, addUser, removeUser } = useUser();

  const user = { address: "Rua 01", id: 1, name: "Junior" };

  return (
    <>
      <h1>Hello world: {bears}</h1>
      <Button />
      <h2>Users</h2>

      <button onClick={() => addUser(user)}>Add</button>
      <button onClick={() => removeUser(1)}>Remove</button>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default App;
