import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginComponent from "./components/login-component";
import WelcomeComponent from "./components/welcome-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>React Demo</code>
        </p>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={LoginComponent}></Route>
            <Route path='/welcome' exact component={WelcomeComponent}></Route>
            <Route path='/' render={() => <div>404</div>}></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
