import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_VIEW_POLICY } from '../../actions/pages/policy';
class footer extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            viewId:'',
			pageId:'',
			viewStatus:false
        }
        this.viewPage = this.viewPage.bind(this);
	}
	viewPage(event) {
        let pageId = event.target.id;
        this.setState({ viewStatus: true, viewId: pageId })
    }
    render() {
        // var page = this.props.policyReducer.listPolicy;
		// console.log("===================",page);
		if (this.state.viewStatus) {
            return <Redirect to={"/policy/" + this.state.viewId} />
        }
        return (
            <div class="main-body">
<footer>
		<div class="container-middle container">
			<div class="footer-div">
				<div class="row">
					<div class="col-lg-3">
						<div class="main-img">
							<img src="images/banner4.png"/>
						</div>
					</div>
					<div class="col-lg-9">
						<div class="row">
							<div class="col-lg-3">
								<div class="news">
									<div class="heading">
										<h5 class="main-heading">POPULAR NEWS</h5>
									</div>
									<ul class="list-unstyled">
										<li>
											<a href="javascript:void(0)">
												<span>
													Top
												</span>
												<p class="sub-content">
													Tour de France 2018: Geraint Thomas' transformation from precocious talent to a champion was worth its wait
												</p>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<span>
													Top
												</span>
												<p class="sub-content">
													Tour de France 2018: Geraint Thomas' transformation from precocious talent to a champion was worth its wait
												</p>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<span>
													Top
												</span>
												<p class="sub-content">
													Tour de France 2018: Geraint Thomas' transformation from precocious talent to a champion was worth its wait
												</p>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<span>
													Top
												</span>
												<p class="sub-content">
													Tour de France 2018: Geraint Thomas' transformation from precocious talent to a champion was worth its wait
												</p>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3">
								<div class="news">
									<div class="heading">
										<h5 class="main-heading">POPULAR TWICTS</h5>
									</div>
									<ul class="list-unstyled">
										<li>
											<a href="javascript:void(0)">
												<div class="flex-div">
													<span class="icon"><i class="la la-twitter"></i></span>
													<p class="sub-content">Tour de France 2018: Geraint Thomas' transformation from</p> 
												</div>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<div class="flex-div">
													<span class="icon"><i class="la la-twitter"></i></span>
													<p class="sub-content">Tour de France 2018: Geraint Thomas' transformation from</p> 
												</div>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<div class="flex-div">
													<span class="icon"><i class="la la-twitter"></i></span>
													<p class="sub-content">Tour de France 2018: Geraint Thomas' transformation from</p> 
												</div>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<div class="flex-div">
													<span class="icon"><i class="la la-twitter"></i></span>
													<p class="sub-content">Tour de France 2018: Geraint Thomas' transformation from</p> 
												</div>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<div class="flex-div">
													<span class="icon"><i class="la la-twitter"></i></span>
													<p class="sub-content">Tour de France 2018: Geraint Thomas' transformation from</p> 
												</div>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<div class="flex-div">
													<span class="icon"><i class="la la-twitter"></i></span>
													<p class="sub-content">Tour de France 2018: Geraint Thomas' transformation from</p> 
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3">
								<div class="news">
									<div class="heading">
										<h5 class="main-heading">INSTAGRAM</h5>
									</div>
									<div class="insta-img">
										<div class="row no-gutters">
											<div class="col-lg-6">
												<div class="main-img">
													<a href="javascript:void(0)">
														<img src="images/shop1.jpg"/>
													</a>
												</div>
											</div>
											<div class="col-lg-6">
												<div class="main-img">
													<a href="javascript:void(0)">
														<img src="images/shop2.jpg"/>
													</a>
												</div>
											</div>
											<div class="col-lg-6">
												<div class="main-img">
													<a href="javascript:void(0)">
														<img src="images/shop3.jpg"/>
													</a>
												</div>
											</div>
											<div class="col-lg-6">
												<div class="main-img">
													<a href="javascript:void(0)">
														<img src="images/shop4.jpg"/>
													</a>
												</div>
											</div>
											<div class="col-lg-6">
												<div class="main-img">
													<a href="javascript:void(0)">
														<img src="images/shop5.jpg"/>
													</a>
												</div>
											</div>
											<div class="col-lg-6">
												<div class="main-img">
													<a href="javascript:void(0)">
														<img src="images/shop6.jpg"/>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div class="heading">
										<h5 class="main-heading">TAGS</h5>
									</div>
									<ul class="list-inline">
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												Thomas
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												from
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												France
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												Thomas
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												champion
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												from
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												champion
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												Thomas
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												talent
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												from
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												France
											</a>
										</li>
										<li class="list-inline-item">
											<a href="javascript:void(0)" class="tag">
												champion
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3">
								<div class="news">
									<div class="heading">
										<h5 class="main-heading">PAGES</h5>
									</div>
									<ul class="list-unstyled">
										<li>
											<a onClick={this.viewPage}>
												<div class="flex-div">
													<span class="icon"><i class="la la-dot-circle-o"></i></span>
													<p class="sub-content">Return Policy</p> 
												</div>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<div class="flex-div">
													<span class="icon"><i class="la la-dot-circle-o"></i></span>
													<p class="sub-content">Terms of use</p> 
												</div>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<div class="flex-div">
													<span class="icon"><i class="la la-dot-circle-o"></i></span>
													<p class="sub-content">Security</p> 
												</div>
											</a>
										</li>
										<li>
											<a href="javascript:void(0)">
												<div class="flex-div">
													<span class="icon"><i class="la la-dot-circle-o"></i></span>
													<p class="sub-content">Privacy</p> 
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<section class="bottom-footer">
		<div class="container-middle container">
			<div class="bottom-footer-div">
				<div class="flex-div">
					<div class="left">
						<div class="logo">
							<div class="main-img">
								<img src="images/logo.png" alt="no images"/>
							</div>
						</div>
					</div>
					<div class="middle">
						<ul class="list-inline">
							<li class="list-inline-item">
								<a href="javascript:void(0)" class="fb">
									<i class="la la-facebook-square"></i>
								</a>
							</li>
							<li class="list-inline-item">
								<a href="javascript:void(0)" class="twit">
									<i class="la la-twitter"></i>
								</a>
							</li>
							<li class="list-inline-item">
								<a href="javascript:void(0)" class="drible">
									<i class="la la-dribbble"></i>
								</a>
							</li>
							<li class="list-inline-item">
								<a href="javascript:void(0)" class="google">
									<i class="la la-google-plus"></i>
								</a>
							</li>
							<li class="list-inline-item">
								<a href="javascript:void(0)" class="pin">
									<i class="la la-pinterest"></i>
								</a>
							</li>
						</ul>
					</div>
					<div class="right">
						<div class="pay">
							<div class="row">
								<div class="col-lg-3 col-sm-3">
									<div class="main-img">
										<img src="images/pay1.png"/>
									</div>
								</div>
								<div class="col-lg-3 col-sm-3">
									<div class="main-img">
										<img src="images/pay2.png"/>
									</div>
								</div>
								<div class="col-lg-3 col-sm-3">
									<div class="main-img">
										<img src="images/pay3.png"/>
									</div>
								</div>
								<div class="col-lg-3 col-sm-3">
									<div class="main-img">
										<img src="images/pay4.png"/>
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
		console.log('map state =====================', state);
		return {
			POLICY_Reducer: state.POLICY_Reducer
		}
	}
	function mapDispatchToProps(dispatch) {
		return bindActionCreators({ AC_VIEW_POLICY }, dispatch)
	}
	export default connect(mapStateToProps, mapDispatchToProps)(footer)