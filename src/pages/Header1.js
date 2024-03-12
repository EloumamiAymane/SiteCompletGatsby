import React, { useEffect } from 'react'
import  insea1 from "../images/insea1.png"
import  insea2 from "../images/insea2.png"
import logo1 from  "../images/logo1.png"
const Header1 = () => {
    useEffect(() => {
        const handleScroll = () => {
          const mainHeader = document.querySelector('.main-header');
          if (mainHeader) {
            const windowpos = window.scrollY || window.pageYOffset;
            if (windowpos >= 110) {
              mainHeader.classList.add('fixed-header');
            } else {
              mainHeader.classList.remove('fixed-header');
            }
          }
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up event listener on unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
return (
<header class="main-header style-three">

    <div class="header-upper">
        <div class="outer-box clearfix">
            <div class="left-column pull-left clearfix">
                <div class="logo-box pull-left">
                    <figure class="logo"><a href="https://naxly.wpcomstaging.com/" title="Titre du site"><img
                                src={logo1} alt="logo" id="Imag-1"
                                style={{}}  /></a></figure>
                </div>
                <div class="menu-area pull-right clearfix">
                  
                    <div class="mobile-nav-toggler">
                        <i class="icon-bar"></i>
                        <i class="icon-bar"></i>
                        <i class="icon-bar"></i>
                    </div>
                    <nav class="main-menu navbar-expand-md navbar-light">
                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix" style={{position:"relative",bottom:"28px"}}>
                                <li id="menu-item-15"
                                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                                    <a title="Home" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Home</a>

                                </li>
                                <li id="menu-item-353"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
                                    <a title="Company" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Company</a>

                                </li>
                                <li id="menu-item-354"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
                                    <a title="Services" href="#" data-toggle="dropdown1"
                                        class="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Services</a>

                                </li>
                                <li id="menu-item-355"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
                                    <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Works</a>

                                </li>
                                <li id="menu-item-356"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
                                    <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Blog</a>

                                </li>
                                <li id="menu-item-357"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
                                    <a title="Elements" href="#" data-toggle="dropdown1"
                                        class="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Elements</a>

                                </li>
                                <li id="menu-item-358"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
                                    <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Pages</a>

                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
            <div class="right-column pull-right clearfix">
                <div class="btn-box"><a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/"
                        class="theme-btn style-six">Get in Touch</a></div>

                <ul class="social-links clearfix" style={{position:"relative",bottom:"28px"}}>
                    <li><a href="https://www.facebook.com/"
                    
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.skype.com/"
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-skype"></i></a></li>
                    <li><a href="https://www.twitter.com/"
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </div>

   
    <div class="sticky-header" style={{position:'fixed',top:'0px',height:'80px'}}>
        <div class="outer-box clearfix">
            <div class="left-column pull-left">
                <figure class="logo-box"><a href="https://naxly.wpcomstaging.com/" title="Titre du site"><img
                            src={logo1} alt="logo"
                            style={{height:'55px',width:"60px"}}/></a></figure>
                <div class="menu-area">
                    <nav class="main-menu clearfix">
                    
                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix" style={{position:"relative",bottom:"10px"}}>
                                <li id="menu-item-15"
                                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                                    <a title="Home" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Home</a>

                                </li>
                                <li id="menu-item-353"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
                                    <a title="Company" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Company</a>

                                </li>
                                <li id="menu-item-354"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
                                    <a title="Services" href="#" data-toggle="dropdown1"
                                        class="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Services</a>

                                </li>
                                <li id="menu-item-355"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
                                    <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Works</a>

                                </li>
                                <li id="menu-item-356"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
                                    <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Blog</a>

                                </li>
                                <li id="menu-item-357"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
                                    <a title="Elements" href="#" data-toggle="dropdown1"
                                        class="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Elements</a>

                                </li>
                                <li id="menu-item-358"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
                                    <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Pages</a>

                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
            <div class="right-column pull-right clearfix">

                {/*<div class="btn-box"><a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/"*/}
                {/*        class="theme-btn style-six">Get in Touch</a></div>*/}

                <ul class="social-links clearfix"  id="HelA">
                    <li><a href="https://www.facebook.com/"
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.skype.com/"
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-skype"></i></a></li>
                    <li><a href="https://www.twitter.com/"
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </div>

</header>
)
}

export default Header1
