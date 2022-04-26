import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_VIEW_POLICY } from '../../../actions/pages/policy';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
class policy extends React.Component {
    componentWillMount() {
        let policyId = this.props.match.params.id;
        // console.log("-=-=faqId-=",faqId);
        let formData = { id: policyId }
        this.props.AC_VIEW_POLICY(formData);
    }
    render() {
        const title = this.props.policyReducer.policyInfo.title 
        const description = this.props.policyReducer.policyInfo.description;
        return (
            <div className="container-fluid">
                <h3 class="page-title"><span class="page-title-icon bg-gradient-primary text-white me-2" style={{ marginLeft: '37px', marginTop: '47px' }}><i class="mdi mdi-comment-plus-outline"></i></span>View Page</h3>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample" id="editPage">
                                    <div className="form-group">
                                        <div>
                                            value={title}
                                        </div>
                                        <div>
                                            value={description}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('map state =====================', state);
    return {
        policyReducer: state.POLICY_Reducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AC_VIEW_POLICY }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(policy)