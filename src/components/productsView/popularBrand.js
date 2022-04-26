import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
export default class popularBrands extends React.Component {
	componentDidMount(){
    window.$('.carousel').carousel()
    window.$(window).scroll(function() {    
      var scroll = window.$(window).scrollTop();
  
      if (scroll >= 100) {
        window.$(".navbar").addClass("navbar-color");
      } else {
        window.$(".navbar").removeClass("navbar-color");
      }
  });
    window.$(document).ready(function(){
      window.$(".wish-list").click(function(){
        window.$(".wish-list").removeClass('wish-active');
        window.$(this).addClass('wish-active');
      });
  
      var $window = window.$(window);
      var windowsize = window.$window.width();
  
      function checkWidth() {
            var windowsize = window.$window.width();
            if(windowsize < 800) {
              window.$('.navbar').addClass('sticky-top');
              var element = window.$('.product-list-div div.row').find('div.col-lg-1');
              
              if(element.find('a').hasClass('left-icon') == false) {
                window.$('.left-list').before('<a href="javascript:void(0)" class="left-icon"><i class="la la-angle-left"></i></a>');
              }
              if(element.find('a').hasClass('right-icon') == false) {
                window.$('.left-list').after('<a href="javascript:void(0)" class="right-icon"><i class="la la-angle-right"></i></a>');
              }
        } else {
          window.$('.navbar').removeClass('sticky-top');
        }
        }
  
        checkWidth();
  
        window.$(window).resize(checkWidth);	
  
        window.$('.right-icon').click(function() {
          var pos = window.$('.left-list .nav').scrollLeft() + (window.$('.left-list .nav .nav-link').width() + 10);
          window.$('.left-list .nav').animate({scrollLeft: pos},500);
        })
  
        window.$('.left-icon').click(function() {
          var pos = window.$('.left-list .nav').scrollLeft() - (window.$('.left-list .nav .nav-link').width() + 10);
          window.$('.left-list .nav').animate({scrollLeft: pos},500);
        })
  
    });
    window.$('.owl-carousel-1').owlCarousel({
      loop:true,
      margin:25,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:false,
              loop:false
          }
      }
  })
//   window.$('.play').on('click',function(){
//       owl.trigger('play.owl.autoplay',[1000])
//   })
//   window.$('.stop').on('click',function(){
//       owl.trigger('stop.owl.autoplay')
//   })
    window.$('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:false,
              loop:true
          }
      }
  })
//   window.$('.play').on('click',function(){
//       owl.trigger('play.owl.autoplay',[1000])
//   })
//   window.$('.stop').on('click',function(){
//       owl.trigger('stop.owl.autoplay')
//   })
	}
    render() {
        return (
            <div class="main-body">
<section class="popular-brabds-sec">
		<div class="container-middle container">
			<div class="popular-brabds-div">
				<div class="flex-div">
					<div class="left">
						<div class="popular-conte">
							<div class="heading">
								<h1 class="main-heading">Popular Brabds</h1>
							</div>
							<p class="sub-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							<p class="sub-content">Lorem Ipsum is simply dummy text</p>
						</div>
					</div>
					<div class="right">
						<div class="brands">
							<div class="flex-div">
								<div class="div-1">
									<div class="main-img">
										<img src="images/brand1.png" alt="no images"/>
									</div>
								</div>
								<div class="div-1">
									<div class="main-img">
										<img src="images/brand2.png" alt="no images"/>
									</div>
								</div>
								<div class="div-1">
									<div class="main-img">
										<img src="images/brand3.png" alt="no images"/>
									</div>
								</div>
								<div class="div-1">
									<div class="main-img">
										<img src="images/brand4.png" alt="no images"/>
									</div>
								</div>
								<div class="div-1">
									<div class="main-img">
										<img src="images/brand5.png" alt="no images"/>
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