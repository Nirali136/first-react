import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <div className="App">

      <UserContextProvider>
        <h1>React Context</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </div>
  );
}

export default App;
