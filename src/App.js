
import logo from "./Logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"/>
      </header>
      <main>
        <Dictionary defaultKeyword="sunrise"/>
      </main>
      <footer className="App-footer">
        Coded by J.B
      </footer>
      </div>
    </div>
  );
}

