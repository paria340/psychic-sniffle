import './App.css';
import { useState, useEffect } from 'react'; 
import UserAccountPage from './UserAccountPage'
import AccountTimer from './AccountTimer';

function App() {

  const [ login, setLogin ] = useState(false);
  const [ likes, setLikes ] = useState(0);
  const [ username, setUsername ] = useState("someone");


  const handleLogin = () => {
    setLogin(!login);
  }

  const handleLikes = () => {
    setLikes(likes + 1);
  }

  useEffect(() => {

    console.log("This side effect is running every time the App component renders (AKA *any* time *any* piece of state updates!")

  })


  useEffect(() => {

    if (login) {
      setUsername(username + "👋");
    }

  }, [login])


  return (
    <main className="App">
      <h1>Welcome to your Recipe Storage app</h1>

      <button onClick={handleLogin}>{login ? "Logout" : "Login"}</button>

      <p>{ login ? `Hello ${username}` : "You're not logged in!" }</p>

      <button onClick={handleLikes} disabled={!login}>Click for likes!</button>
      <p>This app has {likes} likes</p>

    {
      login
        ? <UserAccountPage />
        : null
    }

    </main>
  );
}

export default App;