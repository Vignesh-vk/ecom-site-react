import React from "react";
import { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_FORGOTPASSWORD} from '../../actions/user';
class Forgotpassword extends Component {
    constructor(props) {
		super(props);
		this.state = {
			login:"",
			loginError:false
		}
		this.submit = this.submit.bind(this);
		this.handleinputchange = this.handleinputchange.bind(this);
	}
    submit(){
        const email = this.state.email;
        if (email) {
			const formData={
				email:this.state.email,
				link:"http://localhost:3000/resetPassword/:id"
			}
			this.props.AC_FORGOTPASSWORD(formData);
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
                                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleinputchange} placeholder="Enter Email" autoComplete='off' />
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
	return bindActionCreators({ AC_FORGOTPASSWORD }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Forgotpassword)