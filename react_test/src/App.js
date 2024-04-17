// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import "./styles.css"; // Import the CSS file

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Router>
      <div>
        <div className="navbar">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/" render={() => <Home addTodo={addTodo} />} />
          <Route path="/contact" render={() => <Contact todos={todos} />} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
