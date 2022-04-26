import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_REGISTER, AC_LOGIN } from '../../actions/user';
// import swal from 'sweetalert';
class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nameError: false,
			name: "",
			passwordError: false,
			password: "",
			email: "",
			emailError: false,
			mobile: "",
			mobileError: false,
			login:"",
			loginError:false,
			pass:"",
			passError:false

		}
		this.register = this.register.bind(this);
		this.login = this.login.bind(this);
		this.handleinputchange = this.handleinputchange.bind(this);
		this.inputchange = this.inputchange.bind(this);
	}

	register() {
		const email = this.state.email;
		const name = this.state.name;
		const mobile = this.state.mobile;
		const password = this.state.password;
		if (email) {
			if (email.length < 3) {
				this.setState({ loginError: false, color0: "red" })
			}
			else {
				this.setState({ loginError: false, color0: "" })
			}
		}
		else {
			this.setState({ loginError: true, color0: "red" })
		}

		if (name) {
			if (name.length < 2) {
				this.setState({ nameError: false, color0: "red" })
			}
			else {
				this.setState({ nameError: false, color0: "" })
			}
		}
		else {
			this.setState({ nameError: true, color0: "red" })
		}

		if (mobile) {
			if (mobile.length != 10) {
				this.setState({ mobileError: false, color0: "red" })
			}
			else {
				this.setState({ mobileError: false, color0: "" })
			}
		}
		else {
			this.setState({ mobileError: true, color0: "red" })
		}

		if (password) {
			if (password.length < 2) {
				this.setState({ passwordError: false, color1: "red" })
			}
			else {
				this.setState({ passwordError: false, color1: "" })
			}
		}
		else {
			this.setState({ passwordError: true, color1: "red" })
		}
		const formData = {
			email: this.state.email,
			password: this.state.password,
			name: this.state.name,
			mobile: this.state.mobile
		}
		this.props.AC_REGISTER(formData);
		console.log('-=value-=', formData)
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

	handleinputchange(event) {
		const fieldId = event.target.id;
		const fieldValue = event.target.value;

		if (fieldId === "email") {
			this.setState({ email: fieldValue })
			if (fieldValue) {
				if (fieldValue.length < 5) {
					this.setState({ emailError: false, color0: 'red' })
				}
				else {
					this.setState({ emailError: false, color0: '' })
				}
			}
			else {
				this.setState({ emailError: true, color0: '' })
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

		if (fieldId === "name") {
			this.setState({ name: fieldValue })
			if (fieldValue) {
				if (fieldValue.length < 2) {
					this.setState({ nameError: false, color1: 'red' })
				}
				else {
					this.setState({ nameError: false, color1: '' })
				}
			}
			else {
				this.setState({ nameError: true, color1: '' })
			}
		}

		if (fieldId === "mobile") {
			this.setState({ mobile: fieldValue })
			if (fieldValue) {
				if (fieldValue.length != 10) {
					this.setState({ mobileError: false, color1: 'red' })
				}
				else {
					this.setState({ mobileError: false, color1: '' })
				}
			}
			else {
				this.setState({ mobileError: true, color1: '' })
			}
		}
	}
	render() {
		return (
			<div class="main-body">
				<section class="login-sec">
					<div class="login-div">
						<div class="login-inner-div">
							<div class="top-nav">
								<div class="flex-div">
									<div class="left">
										<div class="heading">
											<h6 class="main-header">E-Commerce</h6>
										</div>
									</div>
									<div class="right">
										<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
											<li class="nav-item">
												<a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
													Log In
												</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
													Sign Up
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="bottom">
								<div class="login">
									<div class="inner-div">
										<div class="heading">
											<h3 class="main-header">E-Commerce</h3>
										</div>
										<div class="tab-content" id="pills-tabContent">
											<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
												<div>
													<div class="form-group">
														<label>Enter email</label>
														<input type="email" class="form-control" id="login" aria-describedby="emailHelp" onChange={this.inputchange} placeholder="Enter email" autoComplete='off' />
													</div>
													<div class="form-group">
														<label>Password</label>
														<input type="password" class="form-control" id="password" aria-describedby="numberHelp" onChange={this.inputchange} placeholder="Password" autoComplete='off' />
													</div>
													<div class="form-group">
														<div class="custom-control custom-radio custom-control-inline">
															<input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
															<label class="custom-control-label" for="customRadioInline1">Check me out</label>

														</div>
														<a class="right" href="javascript:void(0)">Forgot Password?</a>
													</div>

													<button type="submit" class="btn btn-primary"onClick={this.login}>Log In</button>
												</div>
											</div>
											<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
												<div>
													<div class="group">
														<label>Enter Email</label>
														<input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleinputchange} placeholder="Enter Email" autoComplete='off' />
													</div>
													<div class="form-group">
														<label>Enter Name</label>
														<input type="text" class="form-control" id="name" aria-describedby="numberHelp" onChange={this.handleinputchange} placeholder="Enter Name" autoComplete='off' />
													</div>
													<div class="form-group">
														<label>Enter Mobile number</label>
														<input type="number" class="form-control" id="mobile" aria-describedby="mobileHelp" onChange={this.handleinputchange} placeholder="Enter Mobile Number" autoComplete='off'/>
													</div>
													<div class="form-group">
														<label>Enter Password</label>
														<input type="password" class="form-control" id="password" onChange={this.handleinputchange} placeholder="Enter Password" autoComplete='off'/>
													</div>
													<div class="form-group">
														<div class="custom-control custom-radio custom-control-inline">
															<input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" autoComplete='off'/>
															<label class="custom-control-label" for="customRadioInline1">Check me out</label>

														</div>
														<a class="right" href="javascript:void(0)">Forgot Password?</a>
													</div>

													<button type="submit" class="btn btn-primary button-defalte" onClick={this.register}>Sign up</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
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
	return bindActionCreators({ AC_REGISTER, AC_LOGIN }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(login)