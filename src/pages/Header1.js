import React, {useContext, useEffect} from 'react'
import  insea1 from "../images/insea1.png"
import  insea2 from "../images/insea2.png"
import logo1 from  "../images/logo1.png"
import ClickContext from "../Context/Context";
const Header1 = () => {
    const {  openMenu } = useContext(ClickContext);
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
<header className="main-header style-three">

    <div className="header-upper">
        <div className="outer-box clearfix">
            <div className="left-column pull-left clearfix">
                <div className="logo-box pull-left">
                    <figure className="logo"><a href="https://naxly.wpcomstaging.com/" title="Insea"><img
                                src={logo1} alt="logo" id="Imag-1"
                                style={{}}  /></a></figure>
                </div>
                <div className="menu-area pull-right clearfix">
                  
                    <div className="mobile-nav-toggler" onClick={openMenu}>
                        <i className="icon-bar"></i>
                        <i className="icon-bar"></i>
                        <i className="icon-bar"></i>
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix" style={{position:"relative",bottom:"28px"}}>
                                <li id="menu-item-15"
                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                                    <a title="Home" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Home</a>

                                </li>
                                <li id="menu-item-353"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
                                    <a title="Company" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Company</a>

                                </li>
                                <li id="menu-item-354"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
                                    <a title="Services" href="#" data-toggle="dropdown1"
                                        className="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Services</a>

                                </li>
                                <li id="menu-item-355"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
                                    <a title="Works" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Works</a>

                                </li>
                                <li id="menu-item-356"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
                                    <a title="Blog" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Blog</a>

                                </li>
                                <li id="menu-item-357"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
                                    <a title="Elements" href="#" data-toggle="dropdown1"
                                        className="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Elements</a>

                                </li>
                                <li id="menu-item-358"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
                                    <a title="Pages" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Pages</a>

                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
            <div className="right-column pull-right clearfix">
                <div className="btn-box"><a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/"
                        className="theme-btn style-six">Get in Touch</a></div>

                <ul className="social-links clearfix" style={{position:"relative",bottom:"28px"}}>
                    <li><a href="https://www.facebook.com/"
                    
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.skype.com/"
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                className="fab fa-skype"></i></a></li>
                    <li><a href="https://www.twitter.com/"
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                className="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </div>

   
    <div className="sticky-header" style={{position:'fixed',top:'0px',height:'80px'}}>
        <div className="outer-box clearfix">
            <div className="left-column pull-left">
                <figure className="logo-box"><a href="https://naxly.wpcomstaging.com/" title="Insea"><img
                            src={logo1} alt="logo"
                            style={{height:'55px',width:"60px"}}/></a></figure>
                <div className="menu-area">
                    <nav className="main-menu clearfix">
                    
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix" style={{position:"relative",bottom:"10px"}}>
                                <li id="menu-item-15"
                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                                    <a title="Home" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Home</a>

                                </li>
                                <li id="menu-item-353"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
                                    <a title="Company" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Company</a>

                                </li>
                                <li id="menu-item-354"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
                                    <a title="Services" href="#" data-toggle="dropdown1"
                                        className="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Services</a>

                                </li>
                                <li id="menu-item-355"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
                                    <a title="Works" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Works</a>

                                </li>
                                <li id="menu-item-356"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
                                    <a title="Blog" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Blog</a>

                                </li>
                                <li id="menu-item-357"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
                                    <a title="Elements" href="#" data-toggle="dropdown1"
                                        className="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Elements</a>

                                </li>
                                <li id="menu-item-358"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
                                    <a title="Pages" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Pages</a>

                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
            <div className="right-column pull-right clearfix">

                {/*<div className="btn-box"><a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/"*/}
                {/*        className="theme-btn style-six">Get in Touch</a></div>*/}

                <ul className="social-links clearfix"  id="HelA">
                    <li><a href="https://www.facebook.com/"
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.skype.com/"
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                className="fab fa-skype"></i></a></li>
                    <li><a href="https://www.twitter.com/"
                            style={{backgroundColor:'rgba(255, 255, 255, 0.3)',color:'rgb(255, 255, 255)'}}><i
                                className="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </div>

</header>
)
}

export default Header1
