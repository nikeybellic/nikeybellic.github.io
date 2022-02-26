import logo from './mypic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Emmanuel and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/nikeybellic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my first React App!
        </a>
      </header>
    </div>
  );
}

export default App;
