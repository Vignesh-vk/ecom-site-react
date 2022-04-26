import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { AC_VIEW_USER } from '../../actions/account';
class navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            viewStatus: false,
            viewId:'',
            accountId:''
        }
        this.logout = this.logout.bind(this)
        this.view=this.view.bind(this)
    }
        logout(){
            localStorage.clear();
            <Redirect to={"/"} />
        }
        view(event) {
            let accountId = event.target.id;
            this.setState({ viewStatus: true, viewId: accountId })
        }
    render() {
        var account=this.props.accountReducer.accountInfo
        console.log("Account ======",account);
        if (this.state.viewStatus) {
            return <Redirect to={"/account/" + this.state.viewId} />
        }
        return (
            <div class="main-body">
                <nav class="navbar navbar-expand-lg fixed-top navbar-light">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img src="images/logo.png" width="auto" height="65" alt="" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <Link to="/" class="nav-link">HOME <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/shop" class="nav-link">SHOP</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/faq" class="nav-link">FAQ</Link>
                                </li>
                                {/* <li class="nav-item">
                                    <Link to="/contact-us" class="nav-link disabled">CONTACT</Link>
                                </li> */}
                                <li class="nav-item">
                                    <Link to="/cart" class="nav-link">CART</Link>
                                </li>
                                <li class="nav-item">
                                    <a id={account._id} onClick={this.view} class="nav-link">ACCOUNT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={this.logout}>LOG OUT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('map state', state);
    return {
        accountReducer: state.ACCOUNT_Reducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AC_VIEW_USER }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(navbar);