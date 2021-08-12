import logo from "./logo.svg";
import "./App.css";
import LoginComponent from "./components/login-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>React Demo</code>
        </p>
        <LoginComponent />
      </header>
    </div>
  );
}

export default App;
