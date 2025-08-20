import logo from './logo.svg';
import './App.css';

function App() {
  const name = <p>Olá Alexandre!</p>;
  const idade = <p>Você possui 30 anos.</p>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {name}
        {idade}
      </header>
    </div>
  );
}

export default App;
