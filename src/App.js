import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login';
import PersonList from './components/PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <PersonList />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>        
      </header>
    </div>
  );
}

export default App;
