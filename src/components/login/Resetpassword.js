import React from "react";
import { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_RESET} from '../../actions/user';
class Resetpassword extends Component {
    constructor(props) {
		super(props);
		this.state = {
			password:"",
		    passwordError:false,
            cpassword:"",
		    cpasswordError:false
		}
		this.submit = this.submit.bind(this);
		this.handleinputchange = this.handleinputchange.bind(this);
	}
	UNSAFE_componentWillMount(){
		var url=window.location.href;
		var links=url.replace("http://localhost:3000/resetPassword/","")
		const formData={
			token:links,
		}
		this.props.AC_RESET(formData)
	}
    submit(){
        const password = this.state.password;
        const cpassword =this.state.cpassword
        if (password) {
			if (password.length < 3) {
				this.setState({ passwordError: false, color0: "red" })
			}
			else {
				this.setState({ passwordError: false, color0: "" })
			}
		}
		else {
			this.setState({ passwordError: true, color0: "red" })
		}
        if (cpassword) {
			if (cpassword.length < 3) {
				this.setState({ cpasswordError: false, color0: "red" })
			}
			else {
				this.setState({ cpasswordError: false, color0: "" })
			}
		}
		else {
			this.setState({ cpasswordError: true, color0: "red" })
		}
        const formData = {
            password: this.state.password,
            cpassword: this.state.cpassword
          }
          this.props.AC_RESET(formData);
    }
    handleinputchange(event) {
		const fieldId = event.target.id;
		const fieldValue = event.target.value;

		if (fieldId === "password") {
			this.setState({ password: fieldValue })
			if (fieldValue) {
				if (fieldValue.length < 5) {
					this.setState({ passwordError: false, color0: 'red' })
				}
				else {
					this.setState({ passwordError: false, color0: '' })
				}
			}
			else {
				this.setState({ passwordError: true, color0: '' })
			}
		}

        if (fieldId === "cpassword") {
			this.setState({ cpassword: fieldValue })
			if (fieldValue) {
				if (fieldValue.length < 5) {
					this.setState({ cpasswordError: false, color0: 'red' })
				}
				else {
					this.setState({ cpasswordError: false, color0: '' })
				}
			}
			else {
				this.setState({ cpasswordError: true, color0: '' })
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
                                <h1 class="sign" align="center">Forgot Password</h1>

                                <div className="row">
                                    <div class="forms-sample" autoComplete='off'>
                                        <div class="col-md-11-sm-11-lg-11">
                                            <input class="pass" type="password" id="password" align="center" placeholder="New Password" />
                                        </div>
                                        <div class="col-md-11-sm-11-lg-11">
                                            <input class="pass" type="password" id="password" align="center" placeholder="Confirm Password" />
                                        </div>
                                        <div class="col-md-11-sm-11-lg-11 m-2">
                                        <button type="submit" class="btn btn-primary button-defalte" onClick={this.submit}>Submit</button>
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
	return bindActionCreators({ AC_RESET }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Resetpassword)