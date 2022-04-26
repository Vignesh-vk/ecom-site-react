import '../../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './Login'; 
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Resetpassword from './Resetpassword'

function Signin() {
  return (
    <div className="App">
    <Router>
     
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Forgotpassword" component={ForgotPassword} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/resetPassword/:id" component={Resetpassword}/>
      </Switch>
    </Router>
    </div>
  );
}

export default Signin;
