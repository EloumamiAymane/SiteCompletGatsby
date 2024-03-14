import * as React from "react"
import {useContext} from "react";
import ClickContext from "../Context/Context";
import  logo1 from "../images/logo1.png"

const Mobile = () => {
    const {  closeMenu } = useContext(ClickContext);
    return (
        <div class="mobile-menu">

            <div class="menu-backdrop"></div>
            <div class="close-btn" onClick={closeMenu}><i class="fas fa-times"></i></div>

            <nav class="menu-box mCustomScrollbar _mCS_1">
                <div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{ maxHeight: '44px' }}
                     tabindex="0">
                    <div id="mCSB_1_container" class="mCSB_container"
                         style={{ position: 'relative', top: '-732px', left: '0px' }} dir="ltr">
                        <div class="nav-logo"><a href="https://naxly.wpcomstaging.com/" title="Titre du site"><img
                            src={logo1}
                            height={100}
                            width={100}
                            alt="logo" class="mCS_img_loaded" /></a></div>
                        <div class="menu-outer">
                            {/*
                    <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li id="menu-item-15"
                                        class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                                        <a title="Home" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                           aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Home</a>

                                    </li>
                                    <li id="menu-item-353"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
                                        <a title="Company" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                           aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Company</a>

                                    </li>
                                    <li id="menu-item-354"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
                                        <a title="Services" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                           aria-expanded="false" data-scroll=""
                                           data-options="easing: easeOutQuart">Services</a>

                                    </li>
                                    <li id="menu-item-355"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
                                        <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                           aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Works</a>

                                    </li>
                                    <li id="menu-item-356"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
                                        <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                           aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Blog</a>

                                    </li>
                                    <li id="menu-item-357"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
                                        <a title="Elements" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                           aria-expanded="false" data-scroll=""
                                           data-options="easing: easeOutQuart">Elements</a>

                                    </li>
                                    <li id="menu-item-358"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
                                        <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                           aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Pages</a>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="contact-info">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>Chicago 12, Melborne City, USA</li>
                                <li><a href="tel:http://+88-01682648101">+88-01682648101</a></li>
                                <li><a href="mailto:http://info@example.com">info@example.com</a></li>
                            </ul>
                        </div>

                        <div class="social-links">
                            <ul class="clearfix">
                                <li><a href="https://www.facebook.com/"
                                       style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(255, 255, 255)' }}><span
                                    class="fab fa-linkedin"></span></a></li>
                                <li><a href="https://www.skype.com/"
                                       style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(255, 255, 255)' }}><span
                                    class="fab fa-skype"></span></a></li>
                                <li><a href="https://www.twitter.com/"
                                       style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(255, 255, 255)' }}><span
                                    class="fab fa-twitter"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="mCSB_1_scrollbar_vertical"
                         class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
                         style={{ display: 'block' }}>
                        <div class="mCSB_draggerContainer">
                            <div id="mCSB_1_dragger_vertical" class="mCSB_dragger"
                                 style={{ position: 'absolute', minHeight: '0px', display: 'block', height: '0px', top: '0px' }}
                                 oncontextmenu="return false;">
                                <div class="mCSB_dragger_bar" style={{ lineHeight: '0px' }}></div>
                                <div class="mCSB_draggerRail"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Mobile
