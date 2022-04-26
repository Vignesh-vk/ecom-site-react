import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Signin from './components/login/Authenticate';
import mainboard from './mainboard';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Login: false,
    }
  }
  render() {
    var token = localStorage.getItem("token")
    if (!token) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Signin} />
          </Switch>
        </Router>
      )
    }
    else {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={mainboard} />
          </Switch>
        </Router>
      );
    }
  }
}
export default App;
