import React from "react";
import { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LOGIN } from '../../actions/user';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
class Login extends Component {
    constructor(props) {
		super(props);
		this.state = {
			login:"",
			loginError:false,
			pass:"",
			passError:false

		}
		this.login = this.login.bind(this);
		this.inputchange = this.inputchange.bind(this);
	}
    login() {
		const email=this.state.email;
		const password=this.state.password 
		if (email) {
		  if (email.length < 3) {
			this.setState({ loginError: false, color0: "red" })
		  }
		  else {
			this.setState({ loginError: false,  color0: "" })
		  }
		}
		else {
		  this.setState({ loginError: true, color0: "red" })
		}
	
		if (password) {
		  if (password.length < 2) {
			this.setState({ passwordError: false,  color1: "red" })
		  }
		  else {
			this.setState({ passwordError: false, color1: "" })
		  }
		}
		else {
		  this.setState({ passwordError: true,color1: "red" })
		}
		const formData = {
		  email: this.state.email,
		  password: this.state.password,
		}
		this.props.AC_LOGIN(formData);
		console.log('-=value-=', formData)
	  }
	  
	  inputchange(event) {
		const fieldId = event.target.id;
		const fieldValue = event.target.value;
	
		if (fieldId === "login") {
		  this.setState({ email: fieldValue })
		  if (fieldValue) {
			if (fieldValue.length < 5) {
			  this.setState({ loginError: false, color0: 'red' })
			}
			else {
			  this.setState({ loginError: false, color0: '' })
			}
		  }
		  else {
			this.setState({ loginError: true, color0: '' })
		  }
		}
	
		if (fieldId === "password") {
		  this.setState({ password: fieldValue })
		  if (fieldValue) {
			if (fieldValue.length < 5) {
			  this.setState({ passwordError: false, color1: 'red' })
			}
			else {
			  this.setState({ passwordError: false, color1: '' })
			}
		  }
		  else {
			this.setState({ passwordError: true, color1: '' })
		  }
		}
	  }
    render() {
        return (
            <div class="container-fluid pages">
                <div class="col-12 grid-margin ">
                    <div class="card" >
                        <div class="card-body">
                            <div class="main">
                                <h1 class="sign" align="center">Welcome to E-commerce, Sign In to Continue!</h1>

                                <div className="row">
                                    <div class="forms-sample" autoComplete='off'>
                                        <div class="col-md-11-sm-11-lg-11">
                                        <input type="email" class="form-control" id="login" aria-describedby="emailHelp" onChange={this.inputchange} placeholder="Enter email" autoComplete='off' />
                                        </div>
                                        <div class="col-md-11-sm-11-lg-11">
                                        <input type="password" class="form-control" id="password" aria-describedby="numberHelp" onChange={this.inputchange} placeholder="Password" autoComplete='off' />
                                        </div>
                                        <div class="col-md-11-sm-11-lg-11 m-2">
                                        <button type="submit" class="btn btn-primary"onClick={this.login}>Log In</button>
                                        </div>
                                        <div class="col-md-11-sm-11-lg-11 m-2">

                                        </div>
                                        <div class="col-md m-4">
                                            <Link class="forgot" to="/forgotpassword"  >Forgot Password?</Link>
                                        </div>
                                        <div class="col-md m-4">
                                            <Link class="forgot" to="/register">Register as new user?</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
	console.log('map state', state);
	return {
		userreducer: state.USER_Reducer
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ AC_LOGIN }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)