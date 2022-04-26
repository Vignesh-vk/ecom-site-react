import React from "react";
import { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_REGISTER } from '../../actions/user';

class Register extends Component {
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
			gender: '',
			genderError: false
		}
		this.register = this.register.bind(this);
		this.handleinputchange = this.handleinputchange.bind(this);
	}

	register() {
		const email = this.state.email;
		const name = this.state.name;
		const mobile = this.state.mobile;
		const password = this.state.password;
		const gender = this.state.gender
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

		if (gender) {
			this.setState({ genderError: false })
		}
		else {
			this.setState({ genderError: true })
		}

		const formData = {
			email: this.state.email,
			password: this.state.password,
			name: this.state.name,
			mobile: this.state.mobile,
			gender: this.state.gender
		}
		this.props.AC_REGISTER(formData);
		console.log('-=value-=', formData)
	}

	handleinputchange(event) {
		const nameId = event.target.id;
		const nameValue = event.target.value;
		const emailId = event.target.id;
		const emailValue = event.target.value;
		const passwordId = event.target.id;
		const passwordValue = event.target.value;
		const mobileId = event.target.id;
		const mobileValue = event.target.value;
		const genderId = event.target.id;
		const genderValue = event.target.value;
		if (emailId === "email") {
			this.setState({ email: emailValue })
			if (emailValue) {
				if (emailValue.length < 5) {
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

		if (passwordId === "password") {
			this.setState({ password: passwordValue })
			if (passwordValue) {
				if (passwordValue.length < 5) {
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

		if (nameId === "name") {
			this.setState({ name: nameValue })
			if (nameValue) {
				if (nameValue.length < 2) {
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

		if (mobileId === "mobile") {
			this.setState({ mobile: mobileValue })
			if (mobileValue) {
				if (mobileValue.length != 10) {
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

		if (genderId == "gender") {
			this.setState({ gender: genderValue })
			if (genderValue) {
				this.setState({ genderError: false })
			}
			else {
				this.setState({ genderError: true })
			}
		}
	}

	render() {
		return (
			<div class="container-fluid pages">
				<div class="col-12 grid-margin  ">
					<div class="card" >
						<div class="card-body">
							<div class="main1">
								<h1 class="sign" align="center">Welcome to E-commerce, Sign Up to join with us!</h1>

								<div className="row">
									<div class="forms-sample" autoComplete='off'>
										<div class="col-md-11-sm-11-lg-11">
											<input type="text" class="form-control" id="name" aria-describedby="numberHelp" onChange={this.handleinputchange} placeholder="Enter Name" autoComplete='off' />
										</div>
										<div class="col-md-11-sm-11-lg-11">
											<input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleinputchange} placeholder="Enter Email" autoComplete='off' />
										</div>
										<div class="col-md-11-sm-11-lg-11">
											<input type="number" class="form-control" id="mobile" aria-describedby="mobileHelp" onChange={this.handleinputchange} placeholder="Enter Mobile Number" autoComplete='off' />
										</div>
										<div class="col-md-11-sm-11-lg-11">
											<input type="password" class="form-control" id="password" onChange={this.handleinputchange} placeholder="Enter Password" autoComplete='off' />
										</div>
										<div class="form-group">
											{/* <h4 style={{ fontSize: '0.875rem' }}>Gender</h4> */}
											<select class="form-control" id="gender" onChange={this.handleinputchange} >
												<option selected>Select Gender</option>
												<option value="Male" >Male</option>
												<option value="Female" >Female</option>
											</select>
											{/* {this.state.statusError ? <label class="mt-2" style={{ color: 'red' }}>Status is required</label> : ""} */}
										</div>
										<div class="col-md-11-sm-11-lg-11 m-2">
											<button type="submit" class="btn btn-primary button-defalte" onClick={this.register}>Sign up</button>
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
	return bindActionCreators({ AC_REGISTER }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)