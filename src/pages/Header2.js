import React, { useEffect } from 'react'

const Header2 = () => {
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
<header class="main-header style-seven">

    <div class="header-upper">
        <div class="outer-box clearfix">

            <div class="right-column pull-right clearfix">
                <div class="btn-box"><a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/"
                        class="theme-btn style-twelve">Get in Touch</a></div>
                <ul class="social-links clearfix">
                    <li><a href="https://www.facebook.com/"
                      style={{backgroundColor:'rgba(0, 0, 0, 0)',color:'rgb(255, 255, 255)'}}
                          ><i
                                class="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/"
                          style={{backgroundColor:'rgba(0, 0, 0, 0)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.skype.com/"
                       style={{backgroundColor:'rgba(0, 0, 0, 0)',color:'rgb(255, +255, +255)'}}
                       ><i
                                class="fab fa-skype"></i></a></li>
                    <li><a href="https://www.twitter.com/"
                          style={{backgroundColor:'rgba(0, 0, 0, 0)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-twitter"></i></a></li>
                </ul>
            </div>

            <div class="left-column pull-left clearfix">
                <div class="logo-box pull-left">
                    <figure class="logo">
                        <a href="https://naxly.wpcomstaging.com/" title="Titre du site"><img
                                src="https://naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-7-logo-default-white.png"
                                alt="logo" /></a> </figure>
                </div>
                <div class="menu-area pull-right clearfix">
                   
                    <div class="mobile-nav-toggler">
                        <i class="icon-bar"></i>
                        <i class="icon-bar"></i>
                        <i class="icon-bar"></i>
                    </div>
                    <nav class="main-menu navbar-expand-md navbar-light">
                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix">
                                <li id="menu-item-15"
                                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                                    <a title="Home" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Home</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-14"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-14">
                                            <a title="Data Science" href="https://naxly.wpcomstaging.com/">Data
                                                Science</a></li>
                                        <li id="menu-item-117"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-117">
                                            <a title="Artificial intelligence"
                                                href="https://naxly.wpcomstaging.com/artificial-intelligence/">Artificial
                                                intelligence</a></li>
                                        <li id="menu-item-209"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-209">
                                            <a title="Machine Learning"
                                                href="https://naxly.wpcomstaging.com/machine-learning/">Machine
                                                Learning</a></li>
                                        <li id="menu-item-274"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-274">
                                            <a title="Business Intelligence"
                                                href="https://naxly.wpcomstaging.com/business-intelligence/">Business
                                                Intelligence</a></li>
                                        <li id="menu-item-273"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-273">
                                            <a title="User Analysis"
                                                href="https://naxly.wpcomstaging.com/user-analysis/">User Analysis</a>
                                        </li>
                                        <li id="menu-item-361"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-361">
                                            <a title="Home Boxed" href="https://naxly.wpcomstaging.com/home-boxed/">Home
                                                Boxed</a></li>
                                        <li id="menu-item-1242"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242">
                                            <a title="Chatbot"
                                                href="https://naxly.wpcomstaging.com/chatbot/">Chatbot</a></li>
                                        <li id="menu-item-1342"
                                            class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1331 current_page_item menu-item-1342 active">
                                            <a title="Mobile App"
                                                href="https://naxly.wpcomstaging.com/mobile-app/">Mobile App</a></li>
                                        <li id="menu-item-1388"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1388">
                                            <a title="Sentiment Analysis"
                                                href="https://naxly.wpcomstaging.com/sentiment-analysis/">Sentiment
                                                Analysis</a></li>
                                        <li id="menu-item-941"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-941">
                                            <a title="Home RTL" href="https://naxly.wpcomstaging.com/home-rtl/">Home
                                                RTL</a></li>
                                        <li id="menu-item-940"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-940">
                                            <a title="Home OnePage"
                                                href="https://naxly.wpcomstaging.com/home-onepage/">Home OnePage</a>
                                        </li>
                                        <li id="menu-item-467"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-467 dropdown">
                                            <a title="Header Styles" href="#">Header Styles</a>
                                            <ul role="menu" class="submenu">
                                                <li id="menu-item-473"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-473">
                                                    <a title="Header Style One"
                                                        href="https://naxly.wpcomstaging.com/">Header Style One</a></li>
                                                <li id="menu-item-472"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-472">
                                                    <a title="Header Style Two"
                                                        href="https://naxly.wpcomstaging.com/artificial-intelligence/">Header
                                                        Style Two</a></li>
                                                <li id="menu-item-471"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-471">
                                                    <a title="Header Style Three"
                                                        href="https://naxly.wpcomstaging.com/machine-learning/">Header
                                                        Style Three</a></li>
                                                <li id="menu-item-470"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-470">
                                                    <a title="Header Style Four"
                                                        href="https://naxly.wpcomstaging.com/business-intelligence/">Header
                                                        Style Four</a></li>
                                                <li id="menu-item-469"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-469">
                                                    <a title="Header Style Five"
                                                        href="https://naxly.wpcomstaging.com/user-analysis/">Header
                                                        Style Five</a></li>
                                            </ul>
                                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                        </li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-353"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
                                    <a title="Company" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Company</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-482"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-482">
                                            <a title="About Company"
                                                href="https://naxly.wpcomstaging.com/about-company/">About Company</a>
                                        </li>
                                        <li id="menu-item-500"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-500">
                                            <a title="Meet Our Team"
                                                href="https://naxly.wpcomstaging.com/meet-our-team/">Meet Our Team</a>
                                        </li>
                                        <li id="menu-item-511"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-511">
                                            <a title="Get In Touch"
                                                href="https://naxly.wpcomstaging.com/get-in-touch/">Get In Touch</a>
                                        </li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-354"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
                                    <a title="Services" href="#" data-toggle="dropdown1"
                                        class="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Services</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-525"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-525">
                                            <a title="Our Services"
                                                href="https://naxly.wpcomstaging.com/our-services/">Our Services</a>
                                        </li>
                                        <li id="menu-item-703"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-703">
                                            <a title="Service Details"
                                                href="https://naxly.wpcomstaging.com/service-details/">Service
                                                Details</a></li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-355"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
                                    <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Works</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-550"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-550">
                                            <a title="Project 2 Columns"
                                                href="https://naxly.wpcomstaging.com/project-2-columns/">Project 2
                                                Columns</a></li>
                                        <li id="menu-item-570"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570">
                                            <a title="Project 3 Columns"
                                                href="https://naxly.wpcomstaging.com/project-3-columns/">Project 3
                                                Columns</a></li>
                                        <li id="menu-item-588"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-588">
                                            <a title="Case Studies"
                                                href="https://naxly.wpcomstaging.com/case-studies/">Case Studies</a>
                                        </li>
                                        <li id="menu-item-1136"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1136">
                                            <a title="Case Details"
                                                href="http://el.commonsupport.com/newwp/naxly/naxly_project/baby-care-mobile-app/">Case
                                                Details</a></li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-356"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
                                    <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Blog</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-595"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-595">
                                            <a title="Classic Grid"
                                                href="https://naxly.wpcomstaging.com/classic-grid/">Classic Grid</a>
                                        </li>
                                        <li id="menu-item-623"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-623">
                                            <a title="Classic With S/B"
                                                href="https://naxly.wpcomstaging.com/classic-with-s-b/">Classic With
                                                S/B</a></li>
                                        <li id="menu-item-632"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-632">
                                            <a title="Modern With S/B"
                                                href="https://naxly.wpcomstaging.com/modern-with-s-b/">Modern With
                                                S/B</a></li>
                                        <li id="menu-item-933"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-933">
                                            <a title="Single Post"
                                                href="http://el.commonsupport.com/newwp/naxly/?p=667">Single Post</a>
                                        </li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-357"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
                                    <a title="Elements" href="#" data-toggle="dropdown1"
                                        class="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Elements</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-733"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-733 dropdown">
                                            <a title="Elements 1" href="#">Elements 1</a>
                                            <ul role="menu" class="submenu">
                                                <li id="menu-item-736"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-736">
                                                    <a title="Service 01"
                                                        href="https://naxly.wpcomstaging.com/service-01/">Service 01</a>
                                                </li>
                                                <li id="menu-item-742"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-742">
                                                    <a title="Service 02"
                                                        href="https://naxly.wpcomstaging.com/service-02/">Service 02</a>
                                                </li>
                                                <li id="menu-item-754"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-754">
                                                    <a title="About 01"
                                                        href="https://naxly.wpcomstaging.com/about-01/">About 01</a>
                                                </li>
                                                <li id="menu-item-753"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-753">
                                                    <a title="About 02"
                                                        href="https://naxly.wpcomstaging.com/about-02/">About 02</a>
                                                </li>
                                                <li id="menu-item-752"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-752">
                                                    <a title="About 03"
                                                        href="https://naxly.wpcomstaging.com/about-03/">About 03</a>
                                                </li>
                                                <li id="menu-item-774"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-774">
                                                    <a title="About 04"
                                                        href="https://naxly.wpcomstaging.com/about-04/">About 04</a>
                                                </li>
                                                <li id="menu-item-773"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-773">
                                                    <a title="About 05"
                                                        href="https://naxly.wpcomstaging.com/about-05/">About 05</a>
                                                </li>
                                                <li id="menu-item-783"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-783">
                                                    <a title="About 06"
                                                        href="https://naxly.wpcomstaging.com/about-06/">About 06</a>
                                                </li>
                                            </ul>
                                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                        </li>
                                        <li id="menu-item-784"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-784 dropdown">
                                            <a title="Elements 2" href="#">Elements 2</a>
                                            <ul role="menu" class="submenu">
                                                <li id="menu-item-787"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-787">
                                                    <a title="Work 01"
                                                        href="https://naxly.wpcomstaging.com/work-01/">Work 01</a></li>
                                                <li id="menu-item-796"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-796">
                                                    <a title="Work 02"
                                                        href="https://naxly.wpcomstaging.com/work-02/">Work 02</a></li>
                                                <li id="menu-item-803"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-803">
                                                    <a title="Skills 01"
                                                        href="https://naxly.wpcomstaging.com/skills-01/">Skills 01</a>
                                                </li>
                                                <li id="menu-item-807"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-807">
                                                    <a title="Skills 02"
                                                        href="https://naxly.wpcomstaging.com/skills-02/">Skills 02</a>
                                                </li>
                                                <li id="menu-item-810"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-810">
                                                    <a title="Case 01"
                                                        href="https://naxly.wpcomstaging.com/case-01/">Case 01</a></li>
                                                <li id="menu-item-819"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-819">
                                                    <a title="Case 02"
                                                        href="https://naxly.wpcomstaging.com/case-02/">Case 02</a></li>
                                                <li id="menu-item-818"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-818">
                                                    <a title="Case 03"
                                                        href="https://naxly.wpcomstaging.com/case-03/">Case 03</a></li>
                                                <li id="menu-item-827"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-827">
                                                    <a title="Case 04"
                                                        href="https://naxly.wpcomstaging.com/case-04/">Case 04</a></li>
                                            </ul>
                                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                        </li>
                                        <li id="menu-item-833"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-833 dropdown">
                                            <a title="Elements 3" href="#">Elements 3</a>
                                            <ul role="menu" class="submenu">
                                                <li id="menu-item-834"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-834">
                                                    <a title="Fun Fact 01"
                                                        href="https://naxly.wpcomstaging.com/fun-fact-01/">Fun Fact
                                                        01</a></li>
                                                <li id="menu-item-842"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-842">
                                                    <a title="Fun Fact 02"
                                                        href="https://naxly.wpcomstaging.com/fun-fact-02/">Fun Fact
                                                        02</a></li>
                                                <li id="menu-item-841"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-841">
                                                    <a title="Fun Fact 03"
                                                        href="https://naxly.wpcomstaging.com/fun-fact-03/">Fun Fact
                                                        03</a></li>
                                                <li id="menu-item-845"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-845">
                                                    <a title="Fun Fact 04"
                                                        href="https://naxly.wpcomstaging.com/fun-fact-04/">Fun Fact
                                                        04</a></li>
                                                <li id="menu-item-858"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-858">
                                                    <a title="News 01"
                                                        href="https://naxly.wpcomstaging.com/news-01/">News 01</a></li>
                                                <li id="menu-item-857"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-857">
                                                    <a title="News 02"
                                                        href="https://naxly.wpcomstaging.com/news-02/">News 02</a></li>
                                                <li id="menu-item-856"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-856">
                                                    <a title="News 03"
                                                        href="https://naxly.wpcomstaging.com/news-03/">News 03</a></li>
                                                <li id="menu-item-855"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-855">
                                                    <a title="News 04"
                                                        href="https://naxly.wpcomstaging.com/news-04/">News 04</a></li>
                                            </ul>
                                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                        </li>
                                        <li id="menu-item-885"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-885 dropdown">
                                            <a title="Elements 4" href="#">Elements 4</a>
                                            <ul role="menu" class="submenu">
                                                <li id="menu-item-886"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-886">
                                                    <a title="Choose Us 01"
                                                        href="https://naxly.wpcomstaging.com/choose-us-01/">Choose Us
                                                        01</a></li>
                                                <li id="menu-item-891"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-891">
                                                    <a title="Choose Us 02"
                                                        href="https://naxly.wpcomstaging.com/choose-us-02/">Choose Us
                                                        02</a></li>
                                                <li id="menu-item-896"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                                                    <a title="Choose Us 03"
                                                        href="https://naxly.wpcomstaging.com/choose-us-03/">Choose Us
                                                        03</a></li>
                                                <li id="menu-item-901"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-901">
                                                    <a title="Team 01"
                                                        href="https://naxly.wpcomstaging.com/team-01/">Team 01</a></li>
                                                <li id="menu-item-906"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-906">
                                                    <a title="Team 02"
                                                        href="https://naxly.wpcomstaging.com/team-02/">Team 02</a></li>
                                                <li id="menu-item-911"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-911">
                                                    <a title="Team 03"
                                                        href="https://naxly.wpcomstaging.com/team-03/">Team 03</a></li>
                                                <li id="menu-item-917"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-917">
                                                    <a title="Team 04"
                                                        href="https://naxly.wpcomstaging.com/team-04/">Team 04</a></li>
                                                <li id="menu-item-922"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-922">
                                                    <a title="Technology"
                                                        href="https://naxly.wpcomstaging.com/technology/">Technology</a>
                                                </li>
                                            </ul>
                                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                        </li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-358"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
                                    <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Pages</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-672"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-672">
                                            <a title="404"
                                                href="http://el.commonsupport.com/newwp/naxly/?p=123456abc">404</a></li>
                                        <li id="menu-item-675"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-675">
                                            <a title="Coming Soon"
                                                href="https://naxly.wpcomstaging.com/coming-soon/">Coming Soon</a></li>
                                        <li id="menu-item-676"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-676">
                                            <a title="Faq’s" href="https://naxly.wpcomstaging.com/faqs/">Faq’s</a></li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="search-box-outer">
                        <form action="https://naxly.wpcomstaging.com/" method="get" class="search-btn">
                            <button type="button" class="search-toggler"><i class="flaticon-search"></i>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="sticky-header" style={{position:'fixed',top:'0px'}}>
        <div class="outer-box clearfix">
            <div class="left-column pull-left">
                <figure class="logo-box">
                    <a href="https://naxly.wpcomstaging.com/" title="Titre du site"><img
                            src="https://naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-7-logo-default-white.png"
                            alt="logo" /></a> </figure>
                <div class="menu-area">
                    <nav class="main-menu clearfix">
                       

                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix">
                                <li id="menu-item-15"
                                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                                    <a title="Home" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Home</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-14"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-14">
                                            <a title="Data Science" href="https://naxly.wpcomstaging.com/">Data
                                                Science</a></li>
                                        <li id="menu-item-117"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-117">
                                            <a title="Artificial intelligence"
                                                href="https://naxly.wpcomstaging.com/artificial-intelligence/">Artificial
                                                intelligence</a></li>
                                        <li id="menu-item-209"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-209">
                                            <a title="Machine Learning"
                                                href="https://naxly.wpcomstaging.com/machine-learning/">Machine
                                                Learning</a></li>
                                        <li id="menu-item-274"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-274">
                                            <a title="Business Intelligence"
                                                href="https://naxly.wpcomstaging.com/business-intelligence/">Business
                                                Intelligence</a></li>
                                        <li id="menu-item-273"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-273">
                                            <a title="User Analysis"
                                                href="https://naxly.wpcomstaging.com/user-analysis/">User Analysis</a>
                                        </li>
                                        <li id="menu-item-361"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-361">
                                            <a title="Home Boxed" href="https://naxly.wpcomstaging.com/home-boxed/">Home
                                                Boxed</a></li>
                                        <li id="menu-item-1242"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242">
                                            <a title="Chatbot"
                                                href="https://naxly.wpcomstaging.com/chatbot/">Chatbot</a></li>
                                        <li id="menu-item-1342"
                                            class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1331 current_page_item menu-item-1342 active">
                                            <a title="Mobile App"
                                                href="https://naxly.wpcomstaging.com/mobile-app/">Mobile App</a></li>
                                        <li id="menu-item-1388"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1388">
                                            <a title="Sentiment Analysis"
                                                href="https://naxly.wpcomstaging.com/sentiment-analysis/">Sentiment
                                                Analysis</a></li>
                                        <li id="menu-item-941"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-941">
                                            <a title="Home RTL" href="https://naxly.wpcomstaging.com/home-rtl/">Home
                                                RTL</a></li>
                                        <li id="menu-item-940"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-940">
                                            <a title="Home OnePage"
                                                href="https://naxly.wpcomstaging.com/home-onepage/">Home OnePage</a>
                                        </li>
                                        <li id="menu-item-467"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-467 dropdown">
                                            <a title="Header Styles" href="#">Header Styles</a>
                                            <ul role="menu" class="submenu">
                                                <li id="menu-item-473"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-473">
                                                    <a title="Header Style One"
                                                        href="https://naxly.wpcomstaging.com/">Header Style One</a></li>
                                                <li id="menu-item-472"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-472">
                                                    <a title="Header Style Two"
                                                        href="https://naxly.wpcomstaging.com/artificial-intelligence/">Header
                                                        Style Two</a></li>
                                                <li id="menu-item-471"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-471">
                                                    <a title="Header Style Three"
                                                        href="https://naxly.wpcomstaging.com/machine-learning/">Header
                                                        Style Three</a></li>
                                                <li id="menu-item-470"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-470">
                                                    <a title="Header Style Four"
                                                        href="https://naxly.wpcomstaging.com/business-intelligence/">Header
                                                        Style Four</a></li>
                                                <li id="menu-item-469"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-469">
                                                    <a title="Header Style Five"
                                                        href="https://naxly.wpcomstaging.com/user-analysis/">Header
                                                        Style Five</a></li>
                                            </ul>
                                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                        </li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-353"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
                                    <a title="Company" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Company</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-482"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-482">
                                            <a title="About Company"
                                                href="https://naxly.wpcomstaging.com/about-company/">About Company</a>
                                        </li>
                                        <li id="menu-item-500"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-500">
                                            <a title="Meet Our Team"
                                                href="https://naxly.wpcomstaging.com/meet-our-team/">Meet Our Team</a>
                                        </li>
                                        <li id="menu-item-511"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-511">
                                            <a title="Get In Touch"
                                                href="https://naxly.wpcomstaging.com/get-in-touch/">Get In Touch</a>
                                        </li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-354"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
                                    <a title="Services" href="#" data-toggle="dropdown1"
                                        class="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Services</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-525"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-525">
                                            <a title="Our Services"
                                                href="https://naxly.wpcomstaging.com/our-services/">Our Services</a>
                                        </li>
                                        <li id="menu-item-703"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-703">
                                            <a title="Service Details"
                                                href="https://naxly.wpcomstaging.com/service-details/">Service
                                                Details</a></li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-355"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
                                    <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Works</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-550"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-550">
                                            <a title="Project 2 Columns"
                                                href="https://naxly.wpcomstaging.com/project-2-columns/">Project 2
                                                Columns</a></li>
                                        <li id="menu-item-570"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570">
                                            <a title="Project 3 Columns"
                                                href="https://naxly.wpcomstaging.com/project-3-columns/">Project 3
                                                Columns</a></li>
                                        <li id="menu-item-588"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-588">
                                            <a title="Case Studies"
                                                href="https://naxly.wpcomstaging.com/case-studies/">Case Studies</a>
                                        </li>
                                        <li id="menu-item-1136"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1136">
                                            <a title="Case Details"
                                                href="http://el.commonsupport.com/newwp/naxly/naxly_project/baby-care-mobile-app/">Case
                                                Details</a></li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-356"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
                                    <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Blog</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-595"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-595">
                                            <a title="Classic Grid"
                                                href="https://naxly.wpcomstaging.com/classic-grid/">Classic Grid</a>
                                        </li>
                                        <li id="menu-item-623"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-623">
                                            <a title="Classic With S/B"
                                                href="https://naxly.wpcomstaging.com/classic-with-s-b/">Classic With
                                                S/B</a></li>
                                        <li id="menu-item-632"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-632">
                                            <a title="Modern With S/B"
                                                href="https://naxly.wpcomstaging.com/modern-with-s-b/">Modern With
                                                S/B</a></li>
                                        <li id="menu-item-933"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-933">
                                            <a title="Single Post"
                                                href="http://el.commonsupport.com/newwp/naxly/?p=667">Single Post</a>
                                        </li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-357"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
                                    <a title="Elements" href="#" data-toggle="dropdown1"
                                        class="hvr-underline-from-left1" aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Elements</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-733"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-733 dropdown">
                                            <a title="Elements 1" href="#">Elements 1</a>
                                            <ul role="menu" class="submenu">
                                                <li id="menu-item-736"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-736">
                                                    <a title="Service 01"
                                                        href="https://naxly.wpcomstaging.com/service-01/">Service 01</a>
                                                </li>
                                                <li id="menu-item-742"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-742">
                                                    <a title="Service 02"
                                                        href="https://naxly.wpcomstaging.com/service-02/">Service 02</a>
                                                </li>
                                                <li id="menu-item-754"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-754">
                                                    <a title="About 01"
                                                        href="https://naxly.wpcomstaging.com/about-01/">About 01</a>
                                                </li>
                                                <li id="menu-item-753"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-753">
                                                    <a title="About 02"
                                                        href="https://naxly.wpcomstaging.com/about-02/">About 02</a>
                                                </li>
                                                <li id="menu-item-752"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-752">
                                                    <a title="About 03"
                                                        href="https://naxly.wpcomstaging.com/about-03/">About 03</a>
                                                </li>
                                                <li id="menu-item-774"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-774">
                                                    <a title="About 04"
                                                        href="https://naxly.wpcomstaging.com/about-04/">About 04</a>
                                                </li>
                                                <li id="menu-item-773"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-773">
                                                    <a title="About 05"
                                                        href="https://naxly.wpcomstaging.com/about-05/">About 05</a>
                                                </li>
                                                <li id="menu-item-783"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-783">
                                                    <a title="About 06"
                                                        href="https://naxly.wpcomstaging.com/about-06/">About 06</a>
                                                </li>
                                            </ul>
                                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                        </li>
                                        <li id="menu-item-784"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-784 dropdown">
                                            <a title="Elements 2" href="#">Elements 2</a>
                                            <ul role="menu" class="submenu">
                                                <li id="menu-item-787"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-787">
                                                    <a title="Work 01"
                                                        href="https://naxly.wpcomstaging.com/work-01/">Work 01</a></li>
                                                <li id="menu-item-796"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-796">
                                                    <a title="Work 02"
                                                        href="https://naxly.wpcomstaging.com/work-02/">Work 02</a></li>
                                                <li id="menu-item-803"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-803">
                                                    <a title="Skills 01"
                                                        href="https://naxly.wpcomstaging.com/skills-01/">Skills 01</a>
                                                </li>
                                                <li id="menu-item-807"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-807">
                                                    <a title="Skills 02"
                                                        href="https://naxly.wpcomstaging.com/skills-02/">Skills 02</a>
                                                </li>
                                                <li id="menu-item-810"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-810">
                                                    <a title="Case 01"
                                                        href="https://naxly.wpcomstaging.com/case-01/">Case 01</a></li>
                                                <li id="menu-item-819"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-819">
                                                    <a title="Case 02"
                                                        href="https://naxly.wpcomstaging.com/case-02/">Case 02</a></li>
                                                <li id="menu-item-818"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-818">
                                                    <a title="Case 03"
                                                        href="https://naxly.wpcomstaging.com/case-03/">Case 03</a></li>
                                                <li id="menu-item-827"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-827">
                                                    <a title="Case 04"
                                                        href="https://naxly.wpcomstaging.com/case-04/">Case 04</a></li>
                                            </ul>
                                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                        </li>
                                        <li id="menu-item-833"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-833 dropdown">
                                            <a title="Elements 3" href="#">Elements 3</a>
                                            <ul role="menu" class="submenu">
                                                <li id="menu-item-834"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-834">
                                                    <a title="Fun Fact 01"
                                                        href="https://naxly.wpcomstaging.com/fun-fact-01/">Fun Fact
                                                        01</a></li>
                                                <li id="menu-item-842"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-842">
                                                    <a title="Fun Fact 02"
                                                        href="https://naxly.wpcomstaging.com/fun-fact-02/">Fun Fact
                                                        02</a></li>
                                                <li id="menu-item-841"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-841">
                                                    <a title="Fun Fact 03"
                                                        href="https://naxly.wpcomstaging.com/fun-fact-03/">Fun Fact
                                                        03</a></li>
                                                <li id="menu-item-845"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-845">
                                                    <a title="Fun Fact 04"
                                                        href="https://naxly.wpcomstaging.com/fun-fact-04/">Fun Fact
                                                        04</a></li>
                                                <li id="menu-item-858"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-858">
                                                    <a title="News 01"
                                                        href="https://naxly.wpcomstaging.com/news-01/">News 01</a></li>
                                                <li id="menu-item-857"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-857">
                                                    <a title="News 02"
                                                        href="https://naxly.wpcomstaging.com/news-02/">News 02</a></li>
                                                <li id="menu-item-856"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-856">
                                                    <a title="News 03"
                                                        href="https://naxly.wpcomstaging.com/news-03/">News 03</a></li>
                                                <li id="menu-item-855"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-855">
                                                    <a title="News 04"
                                                        href="https://naxly.wpcomstaging.com/news-04/">News 04</a></li>
                                            </ul>
                                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                        </li>
                                        <li id="menu-item-885"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-885 dropdown">
                                            <a title="Elements 4" href="#">Elements 4</a>
                                            <ul role="menu" class="submenu">
                                                <li id="menu-item-886"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-886">
                                                    <a title="Choose Us 01"
                                                        href="https://naxly.wpcomstaging.com/choose-us-01/">Choose Us
                                                        01</a></li>
                                                <li id="menu-item-891"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-891">
                                                    <a title="Choose Us 02"
                                                        href="https://naxly.wpcomstaging.com/choose-us-02/">Choose Us
                                                        02</a></li>
                                                <li id="menu-item-896"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-896">
                                                    <a title="Choose Us 03"
                                                        href="https://naxly.wpcomstaging.com/choose-us-03/">Choose Us
                                                        03</a></li>
                                                <li id="menu-item-901"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-901">
                                                    <a title="Team 01"
                                                        href="https://naxly.wpcomstaging.com/team-01/">Team 01</a></li>
                                                <li id="menu-item-906"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-906">
                                                    <a title="Team 02"
                                                        href="https://naxly.wpcomstaging.com/team-02/">Team 02</a></li>
                                                <li id="menu-item-911"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-911">
                                                    <a title="Team 03"
                                                        href="https://naxly.wpcomstaging.com/team-03/">Team 03</a></li>
                                                <li id="menu-item-917"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-917">
                                                    <a title="Team 04"
                                                        href="https://naxly.wpcomstaging.com/team-04/">Team 04</a></li>
                                                <li id="menu-item-922"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-922">
                                                    <a title="Technology"
                                                        href="https://naxly.wpcomstaging.com/technology/">Technology</a>
                                                </li>
                                            </ul>
                                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                        </li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                                <li id="menu-item-358"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
                                    <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                        aria-expanded="false" data-scroll=""
                                        data-options="easing: easeOutQuart">Pages</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-672"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-672">
                                            <a title="404"
                                                href="http://el.commonsupport.com/newwp/naxly/?p=123456abc">404</a></li>
                                        <li id="menu-item-675"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-675">
                                            <a title="Coming Soon"
                                                href="https://naxly.wpcomstaging.com/coming-soon/">Coming Soon</a></li>
                                        <li id="menu-item-676"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-676">
                                            <a title="Faq’s" href="https://naxly.wpcomstaging.com/faqs/">Faq’s</a></li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="search-box-outer">
                        <form action="https://naxly.wpcomstaging.com/" method="post" class="search-btn">
                            <button type="button" class="search-toggler"><i class="flaticon-search"></i>Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="right-column pull-right clearfix">
                <div class="btn-box"><a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/"
                        class="theme-btn style-twelve">Get in Touch</a></div>
                <ul class="social-links clearfix">
                    <li><a href="https://www.facebook.com/"
                          style={{backgroundColor:'rgba(0, 0, 0, 0)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/"
                          style={{backgroundColor:'rgba(0, 0, 0, 0)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.skype.com/"
                       style={{backgroundColor:'rgba(0, 0, 0, 0)',color:'rgb(255, +255, +255)'}}
                           ><i
                                class="fab fa-skype"></i></a></li>
                    <li><a href="https://www.twitter.com/"
                          style={{backgroundColor:'rgba(0, 0, 0, 0)',color:'rgb(255, 255, 255)'}}><i
                                class="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </div>

</header>
)
}

export default Header2