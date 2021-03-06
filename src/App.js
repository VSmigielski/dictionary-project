import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="img-fluid App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset"/>
      </main>
      <footer className="App-footer">
        <small>Coded by Veronica Smigielski</small>
      </footer>
      </div>
    </div>
  );
}

