import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Styles/main.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/resume'>Resume</Link>
            </li>
            <li>
              <Link to='/skills'>Skills</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/Resume'>
            <Resume />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Resume() {
  return <h2>Resume</h2>;
}

function Skills() {
  return <h2>Skills</h2>;
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
