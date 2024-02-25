// import * as React from "react"

// const IndexPage = () => {
// return (
// <main style={pageStyles}>

//   <div class="n-stan">
//     {/* <!-- preloader --> */}
//     <div class="preloader" style="display: none;">
//       <div id="handle-preloader" class="handle-preloader" style="display: none;">
//         <div class="animation-preloader">
//           <div class="spinner"></div>
//         </div>
//       </div>
//     </div>
//     {/* <!-- preloader end -->
//     <!--Scroll to top--> */}
//     <div class="scroll-top scroll-to-target" data-target="html">
//       <span class="fas fa-angle-up"></span>
//     </div>
//     <div class="pageloader" style="z-index: 999999;">
//       <div class="loader">
//         <div class="loader-inner semi-circle-spin">
//           <div></div>
//         </div>
//       </div>
//     </div>
//     {/* <!-- Pageloader --> */}

//     {/* <!-- search-popup --> */}
//     <div id="search-popup" class="search-popup">
//       <div class="close-search"><span>Close</span></div>
//       <div class="popup-inner">
//         <div class="overlay-layer"></div>
//         <div class="search-form">
//           <form action="https://naxly.wpcomstaging.com/" method="get">
//             <div class="form-group">
//               <fieldset>
//                 <input type="search" class="form-control" name="s" value="" placeholder="Search here" required="">
//                 <input type="submit" value="Search Now!" class="theme-btn style-four">
//               </fieldset>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     {/* <!-- search-popup end -->

//     <!-- main header --> */}
//     <header class="main-header style-two">
//       <div class="header-top">
//         <div class="large-container">
//           <div class="top-inner clearfix">
//             <div class="top-left pull-left clearfix">

//               <ul class="social-links clearfix">
//                 <li><a href="https://www.facebook.com/"
//                     style="background-color:rgba(0, 0, 0, 0); color: rgb(255, 255, 255)"><i
//                       class="fab fa-facebook"></i></a></li>
//                 <li><a href="https://www.skype.com/"
//                     style="background-color:rgba(0, 0, 0, 0); color: rgb(255, 255, 255)"><i
//                       class="fab fa-skype"></i></a></li>
//                 <li><a href="https://www.twitter.com/"
//                     style="background-color:rgba(0, 0, 0, 0); color: rgb(255, 255, 255)"><i
//                       class="fab fa-twitter"></i></a></li>
//               </ul>

//               <ul class="links clearfix">
//                 <li><a href="#">Faq’s</a></li>
//                 <li><a href="#">Career</a></li>
//                 <li><a href="#">News</a></li>
//               </ul>
//               <div class="request-btn"><i class="flaticon-next"></i><a href="#">Request for Demo</a></div>
//             </div>
//             <div class="top-right pull-right clearfix">
//               <div class="support"><i class="flaticon-music"></i><span>Start your project today</span><a
//                   href="tel:http://+00-555-67-890">+00-555-67-890</a></div>

//               <div class="search-box-outer">
//                 <form action="https://naxly.wpcomstaging.com/" method="post" class="search-btn">
//                   <button type="button" class="search-toggler"><i class="flaticon-search"></i>Search</button>
//                 </form>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="header-upper">
//         <div class="large-container">
//           <div class="outer-box clearfix">
//             <div class="logo-box pull-left">
//               <figure class="logo"><a href="https://naxly.wpcomstaging.com/" title="Titre du site"><img
//                     src="https://naxly.wpcomstaging.com/wp-content/uploads/2020/04/logo_AI.png" alt="logo"
//                     style=" width:160px; height:45px;"></a></figure>
//             </div>
//             <div class="menu-area pull-right clearfix">
//               {/* <!--Mobile Navigation Toggler--> */}
//               <div class="mobile-nav-toggler">
//                 <i class="icon-bar"></i>
//                 <i class="icon-bar"></i>
//                 <i class="icon-bar"></i>
//               </div>
//               <nav class="main-menu navbar-expand-md navbar-light">
//                 <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
//                   <ul class="navigation clearfix">
//                     <li id="menu-item-15"
//                       class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
//                       <a title="Home" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                         aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Home</a>
//                       <ul role="menu" class="submenu">
//                         <li id="menu-item-14"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-14">
//                           <a title="Data Science" href="https://naxly.wpcomstaging.com/">Data Science</a></li>
//                         <li id="menu-item-117"
//                           class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-115 current_page_item menu-item-117 active">
//                           <a title="Artificial intelligence"
//                             href="https://naxly.wpcomstaging.com/artificial-intelligence/">Artificial intelligence</a>
//                         </li>
//                         <li id="menu-item-209"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-209"><a
//                             title="Machine Learning" href="https://naxly.wpcomstaging.com/machine-learning/">Machine
//                             Learning</a></li>
//                         <li id="menu-item-274"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-274"><a
//                             title="Business Intelligence"
//                             href="https://naxly.wpcomstaging.com/business-intelligence/">Business Intelligence</a></li>
//                         <li id="menu-item-273"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-273"><a
//                             title="User Analysis" href="https://naxly.wpcomstaging.com/user-analysis/">User Analysis</a>
//                         </li>
//                         <li id="menu-item-361"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-361"><a
//                             title="Home Boxed" href="https://naxly.wpcomstaging.com/home-boxed/">Home Boxed</a></li>
//                         <li id="menu-item-1242"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242"><a
//                             title="Chatbot" href="https://naxly.wpcomstaging.com/chatbot/">Chatbot</a></li>
//                         <li id="menu-item-1342"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1342"><a
//                             title="Mobile App" href="https://naxly.wpcomstaging.com/mobile-app/">Mobile App</a></li>
//                         <li id="menu-item-1388"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1388"><a
//                             title="Sentiment Analysis"
//                             href="https://naxly.wpcomstaging.com/sentiment-analysis/">Sentiment Analysis</a></li>
//                         <li id="menu-item-941"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-941"><a
//                             title="Home RTL" href="https://naxly.wpcomstaging.com/home-rtl/">Home RTL</a></li>
//                         <li id="menu-item-940"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-940"><a
//                             title="Home OnePage" href="https://naxly.wpcomstaging.com/home-onepage/">Home OnePage</a>
//                         </li>
//                         <li id="menu-item-467"
//                           class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-467 dropdown current">
//                           <a title="Header Styles" href="#">Header Styles</a>
//                           <ul role="menu" class="submenu">
//                             <li id="menu-item-473"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-473">
//                               <a title="Header Style One" href="https://naxly.wpcomstaging.com/">Header Style One</a>
//                             </li>
//                             <li id="menu-item-472"
//                               class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-115 current_page_item menu-item-472 active">
//                               <a title="Header Style Two"
//                                 href="https://naxly.wpcomstaging.com/artificial-intelligence/">Header Style Two</a></li>
//                             <li id="menu-item-471"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-471"><a
//                                 title="Header Style Three"
//                                 href="https://naxly.wpcomstaging.com/machine-learning/">Header Style Three</a></li>
//                             <li id="menu-item-470"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-470"><a
//                                 title="Header Style Four"
//                                 href="https://naxly.wpcomstaging.com/business-intelligence/">Header Style Four</a></li>
//                             <li id="menu-item-469"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-469"><a
//                                 title="Header Style Five" href="https://naxly.wpcomstaging.com/user-analysis/">Header
//                                 Style Five</a></li>
//                           </ul>
//                           <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                         </li>
//                       </ul>
//                       <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                     </li>
//                     <li id="menu-item-353"
//                       class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
//                       <a title="Company" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                         aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Company</a>
//                       <ul role="menu" class="submenu">
//                         <li id="menu-item-482"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-482"><a
//                             title="About Company" href="https://naxly.wpcomstaging.com/about-company/">About Company</a>
//                         </li>
//                         <li id="menu-item-500"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"><a
//                             title="Meet Our Team" href="https://naxly.wpcomstaging.com/meet-our-team/">Meet Our Team</a>
//                         </li>
//                         <li id="menu-item-511"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-511"><a
//                             title="Get In Touch" href="https://naxly.wpcomstaging.com/get-in-touch/">Get In Touch</a>
//                         </li>
//                       </ul>
//                       <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                     </li>
//                     <li id="menu-item-354"
//                       class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
//                       <a title="Services" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                         aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Services</a>
//                       <ul role="menu" class="submenu">
//                         <li id="menu-item-525"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-525"><a
//                             title="Our Services" href="https://naxly.wpcomstaging.com/our-services/">Our Services</a>
//                         </li>
//                         <li id="menu-item-703"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-703"><a
//                             title="Service Details" href="https://naxly.wpcomstaging.com/service-details/">Service
//                             Details</a></li>
//                       </ul>
//                       <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                     </li>
//                     <li id="menu-item-355"
//                       class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
//                       <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                         aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Works</a>
//                       <ul role="menu" class="submenu">
//                         <li id="menu-item-550"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-550"><a
//                             title="Project 2 Columns" href="https://naxly.wpcomstaging.com/project-2-columns/">Project 2
//                             Columns</a></li>
//                         <li id="menu-item-570"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570"><a
//                             title="Project 3 Columns" href="https://naxly.wpcomstaging.com/project-3-columns/">Project 3
//                             Columns</a></li>
//                         <li id="menu-item-588"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-588"><a
//                             title="Case Studies" href="https://naxly.wpcomstaging.com/case-studies/">Case Studies</a>
//                         </li>
//                         <li id="menu-item-1136"
//                           class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1136"><a
//                             title="Case Details"
//                             href="http://el.commonsupport.com/newwp/naxly/naxly_project/baby-care-mobile-app/">Case
//                             Details</a></li>
//                       </ul>
//                       <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                     </li>
//                     <li id="menu-item-356"
//                       class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
//                       <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                         aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Blog</a>
//                       <ul role="menu" class="submenu">
//                         <li id="menu-item-595"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-595"><a
//                             title="Classic Grid" href="https://naxly.wpcomstaging.com/classic-grid/">Classic Grid</a>
//                         </li>
//                         <li id="menu-item-623"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-623"><a
//                             title="Classic With S/B" href="https://naxly.wpcomstaging.com/classic-with-s-b/">Classic
//                             With S/B</a></li>
//                         <li id="menu-item-632"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-632"><a
//                             title="Modern With S/B" href="https://naxly.wpcomstaging.com/modern-with-s-b/">Modern With
//                             S/B</a></li>
//                         <li id="menu-item-933"
//                           class="menu-item menu-item-type-custom menu-item-object-custom menu-item-933"><a
//                             title="Single Post" href="http://el.commonsupport.com/newwp/naxly/?p=667">Single Post</a>
//                         </li>
//                       </ul>
//                       <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                     </li>
//                     <li id="menu-item-357"
//                       class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
//                       <a title="Elements" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                         aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Elements</a>
//                       <ul role="menu" class="submenu">
//                         <li id="menu-item-733"
//                           class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-733 dropdown">
//                           <a title="Elements 1" href="#">Elements 1</a>
//                           <ul role="menu" class="submenu">
//                             <li id="menu-item-736"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-736"><a
//                                 title="Service 01" href="https://naxly.wpcomstaging.com/service-01/">Service 01</a></li>
//                             <li id="menu-item-742"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-742"><a
//                                 title="Service 02" href="https://naxly.wpcomstaging.com/service-02/">Service 02</a></li>
//                             <li id="menu-item-754"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-754"><a
//                                 title="About 01" href="https://naxly.wpcomstaging.com/about-01/">About 01</a></li>
//                             <li id="menu-item-753"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-753"><a
//                                 title="About 02" href="https://naxly.wpcomstaging.com/about-02/">About 02</a></li>
//                             <li id="menu-item-752"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-752"><a
//                                 title="About 03" href="https://naxly.wpcomstaging.com/about-03/">About 03</a></li>
//                             <li id="menu-item-774"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-774"><a
//                                 title="About 04" href="https://naxly.wpcomstaging.com/about-04/">About 04</a></li>
//                             <li id="menu-item-773"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-773"><a
//                                 title="About 05" href="https://naxly.wpcomstaging.com/about-05/">About 05</a></li>
//                             <li id="menu-item-783"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-783"><a
//                                 title="About 06" href="https://naxly.wpcomstaging.com/about-06/">About 06</a></li>
//                           </ul>
//                           <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                         </li>
//                         <li id="menu-item-784"
//                           class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-784 dropdown">
//                           <a title="Elements 2" href="#">Elements 2</a>
//                           <ul role="menu" class="submenu">
//                             <li id="menu-item-787"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-787"><a
//                                 title="Work 01" href="https://naxly.wpcomstaging.com/work-01/">Work 01</a></li>
//                             <li id="menu-item-796"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-796"><a
//                                 title="Work 02" href="https://naxly.wpcomstaging.com/work-02/">Work 02</a></li>
//                             <li id="menu-item-803"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-803"><a
//                                 title="Skills 01" href="https://naxly.wpcomstaging.com/skills-01/">Skills 01</a></li>
//                             <li id="menu-item-807"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"><a
//                                 title="Skills 02" href="https://naxly.wpcomstaging.com/skills-02/">Skills 02</a></li>
//                             <li id="menu-item-810"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-810"><a
//                                 title="Case 01" href="https://naxly.wpcomstaging.com/case-01/">Case 01</a></li>
//                             <li id="menu-item-819"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-819"><a
//                                 title="Case 02" href="https://naxly.wpcomstaging.com/case-02/">Case 02</a></li>
//                             <li id="menu-item-818"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-818"><a
//                                 title="Case 03" href="https://naxly.wpcomstaging.com/case-03/">Case 03</a></li>
//                             <li id="menu-item-827"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-827"><a
//                                 title="Case 04" href="https://naxly.wpcomstaging.com/case-04/">Case 04</a></li>
//                           </ul>
//                           <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                         </li>
//                         <li id="menu-item-833"
//                           class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-833 dropdown">
//                           <a title="Elements 3" href="#">Elements 3</a>
//                           <ul role="menu" class="submenu">
//                             <li id="menu-item-834"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-834"><a
//                                 title="Fun Fact 01" href="https://naxly.wpcomstaging.com/fun-fact-01/">Fun Fact 01</a>
//                             </li>
//                             <li id="menu-item-842"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-842"><a
//                                 title="Fun Fact 02" href="https://naxly.wpcomstaging.com/fun-fact-02/">Fun Fact 02</a>
//                             </li>
//                             <li id="menu-item-841"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-841"><a
//                                 title="Fun Fact 03" href="https://naxly.wpcomstaging.com/fun-fact-03/">Fun Fact 03</a>
//                             </li>
//                             <li id="menu-item-845"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-845"><a
//                                 title="Fun Fact 04" href="https://naxly.wpcomstaging.com/fun-fact-04/">Fun Fact 04</a>
//                             </li>
//                             <li id="menu-item-858"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-858"><a
//                                 title="News 01" href="https://naxly.wpcomstaging.com/news-01/">News 01</a></li>
//                             <li id="menu-item-857"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-857"><a
//                                 title="News 02" href="https://naxly.wpcomstaging.com/news-02/">News 02</a></li>
//                             <li id="menu-item-856"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-856"><a
//                                 title="News 03" href="https://naxly.wpcomstaging.com/news-03/">News 03</a></li>
//                             <li id="menu-item-855"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-855"><a
//                                 title="News 04" href="https://naxly.wpcomstaging.com/news-04/">News 04</a></li>
//                           </ul>
//                           <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                         </li>
//                         <li id="menu-item-885"
//                           class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-885 dropdown">
//                           <a title="Elements 4" href="#">Elements 4</a>
//                           <ul role="menu" class="submenu">
//                             <li id="menu-item-886"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-886"><a
//                                 title="Choose Us 01" href="https://naxly.wpcomstaging.com/choose-us-01/">Choose Us
//                                 01</a></li>
//                             <li id="menu-item-891"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-891"><a
//                                 title="Choose Us 02" href="https://naxly.wpcomstaging.com/choose-us-02/">Choose Us
//                                 02</a></li>
//                             <li id="menu-item-896"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"><a
//                                 title="Choose Us 03" href="https://naxly.wpcomstaging.com/choose-us-03/">Choose Us
//                                 03</a></li>
//                             <li id="menu-item-901"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-901"><a
//                                 title="Team 01" href="https://naxly.wpcomstaging.com/team-01/">Team 01</a></li>
//                             <li id="menu-item-906"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-906"><a
//                                 title="Team 02" href="https://naxly.wpcomstaging.com/team-02/">Team 02</a></li>
//                             <li id="menu-item-911"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-911"><a
//                                 title="Team 03" href="https://naxly.wpcomstaging.com/team-03/">Team 03</a></li>
//                             <li id="menu-item-917"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-917"><a
//                                 title="Team 04" href="https://naxly.wpcomstaging.com/team-04/">Team 04</a></li>
//                             <li id="menu-item-922"
//                               class="menu-item menu-item-type-post_type menu-item-object-page menu-item-922"><a
//                                 title="Technology" href="https://naxly.wpcomstaging.com/technology/">Technology</a></li>
//                           </ul>
//                           <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                         </li>
//                       </ul>
//                       <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                     </li>
//                     <li id="menu-item-358"
//                       class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
//                       <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                         aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Pages</a>
//                       <ul role="menu" class="submenu">
//                         <li id="menu-item-672"
//                           class="menu-item menu-item-type-custom menu-item-object-custom menu-item-672"><a title="404"
//                             href="http://el.commonsupport.com/newwp/naxly/?p=123456abc">404</a></li>
//                         <li id="menu-item-675"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-675"><a
//                             title="Coming Soon" href="https://naxly.wpcomstaging.com/coming-soon/">Coming Soon</a></li>
//                         <li id="menu-item-676"
//                           class="menu-item menu-item-type-post_type menu-item-object-page menu-item-676"><a
//                             title="Faq’s" href="https://naxly.wpcomstaging.com/faqs/">Faq’s</a></li>
//                       </ul>
//                       <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                     </li>
//                   </ul>
//                 </div>
//               </nav>

//               <div class="btn-box">
//                 <a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/" class="theme-btn style-five">Get in
//                   Touch</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!--sticky Header--> */}
//       <div class="sticky-header">
//         <div class="large-container clearfix">
//           <figure class="logo-box"><a href="https://naxly.wpcomstaging.com/" title="Titre du site"><img
//                 src="https://naxly.wpcomstaging.com/wp-content/uploads/2020/04/logo_AI.png" alt="logo"
//                 style=" width:100px; height:30px;"></a></figure>
//           <div class="menu-area">
//             <nav class="main-menu clearfix">
//               {/* <!--Keep This Empty / Menu will come through Javascript--> */}

//               <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
//                 <ul class="navigation clearfix">
//                   <li id="menu-item-15"
//                     class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
//                     <a title="Home" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Home</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-14"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-14"><a
//                           title="Data Science" href="https://naxly.wpcomstaging.com/">Data Science</a></li>
//                       <li id="menu-item-117"
//                         class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-115 current_page_item menu-item-117 active">
//                         <a title="Artificial intelligence"
//                           href="https://naxly.wpcomstaging.com/artificial-intelligence/">Artificial intelligence</a>
//                       </li>
//                       <li id="menu-item-209"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-209"><a
//                           title="Machine Learning" href="https://naxly.wpcomstaging.com/machine-learning/">Machine
//                           Learning</a></li>
//                       <li id="menu-item-274"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-274"><a
//                           title="Business Intelligence"
//                           href="https://naxly.wpcomstaging.com/business-intelligence/">Business Intelligence</a></li>
//                       <li id="menu-item-273"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-273"><a
//                           title="User Analysis" href="https://naxly.wpcomstaging.com/user-analysis/">User Analysis</a>
//                       </li>
//                       <li id="menu-item-361"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-361"><a
//                           title="Home Boxed" href="https://naxly.wpcomstaging.com/home-boxed/">Home Boxed</a></li>
//                       <li id="menu-item-1242"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242"><a
//                           title="Chatbot" href="https://naxly.wpcomstaging.com/chatbot/">Chatbot</a></li>
//                       <li id="menu-item-1342"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1342"><a
//                           title="Mobile App" href="https://naxly.wpcomstaging.com/mobile-app/">Mobile App</a></li>
//                       <li id="menu-item-1388"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1388"><a
//                           title="Sentiment Analysis" href="https://naxly.wpcomstaging.com/sentiment-analysis/">Sentiment
//                           Analysis</a></li>
//                       <li id="menu-item-941"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-941"><a
//                           title="Home RTL" href="https://naxly.wpcomstaging.com/home-rtl/">Home RTL</a></li>
//                       <li id="menu-item-940"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-940"><a
//                           title="Home OnePage" href="https://naxly.wpcomstaging.com/home-onepage/">Home OnePage</a></li>
//                       <li id="menu-item-467"
//                         class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-467 dropdown current">
//                         <a title="Header Styles" href="#">Header Styles</a>
//                         <ul role="menu" class="submenu">
//                           <li id="menu-item-473"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-473">
//                             <a title="Header Style One" href="https://naxly.wpcomstaging.com/">Header Style One</a></li>
//                           <li id="menu-item-472"
//                             class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-115 current_page_item menu-item-472 active">
//                             <a title="Header Style Two"
//                               href="https://naxly.wpcomstaging.com/artificial-intelligence/">Header Style Two</a></li>
//                           <li id="menu-item-471"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-471"><a
//                               title="Header Style Three" href="https://naxly.wpcomstaging.com/machine-learning/">Header
//                               Style Three</a></li>
//                           <li id="menu-item-470"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-470"><a
//                               title="Header Style Four"
//                               href="https://naxly.wpcomstaging.com/business-intelligence/">Header Style Four</a></li>
//                           <li id="menu-item-469"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-469"><a
//                               title="Header Style Five" href="https://naxly.wpcomstaging.com/user-analysis/">Header
//                               Style Five</a></li>
//                         </ul>
//                         <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                       </li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-353"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
//                     <a title="Company" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Company</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-482"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-482"><a
//                           title="About Company" href="https://naxly.wpcomstaging.com/about-company/">About Company</a>
//                       </li>
//                       <li id="menu-item-500"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"><a
//                           title="Meet Our Team" href="https://naxly.wpcomstaging.com/meet-our-team/">Meet Our Team</a>
//                       </li>
//                       <li id="menu-item-511"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-511"><a
//                           title="Get In Touch" href="https://naxly.wpcomstaging.com/get-in-touch/">Get In Touch</a></li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-354"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
//                     <a title="Services" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Services</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-525"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-525"><a
//                           title="Our Services" href="https://naxly.wpcomstaging.com/our-services/">Our Services</a></li>
//                       <li id="menu-item-703"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-703"><a
//                           title="Service Details" href="https://naxly.wpcomstaging.com/service-details/">Service
//                           Details</a></li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-355"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
//                     <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Works</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-550"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-550"><a
//                           title="Project 2 Columns" href="https://naxly.wpcomstaging.com/project-2-columns/">Project 2
//                           Columns</a></li>
//                       <li id="menu-item-570"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570"><a
//                           title="Project 3 Columns" href="https://naxly.wpcomstaging.com/project-3-columns/">Project 3
//                           Columns</a></li>
//                       <li id="menu-item-588"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-588"><a
//                           title="Case Studies" href="https://naxly.wpcomstaging.com/case-studies/">Case Studies</a></li>
//                       <li id="menu-item-1136"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1136"><a
//                           title="Case Details"
//                           href="http://el.commonsupport.com/newwp/naxly/naxly_project/baby-care-mobile-app/">Case
//                           Details</a></li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-356"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
//                     <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Blog</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-595"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-595"><a
//                           title="Classic Grid" href="https://naxly.wpcomstaging.com/classic-grid/">Classic Grid</a></li>
//                       <li id="menu-item-623"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-623"><a
//                           title="Classic With S/B" href="https://naxly.wpcomstaging.com/classic-with-s-b/">Classic With
//                           S/B</a></li>
//                       <li id="menu-item-632"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-632"><a
//                           title="Modern With S/B" href="https://naxly.wpcomstaging.com/modern-with-s-b/">Modern With
//                           S/B</a></li>
//                       <li id="menu-item-933"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-933"><a
//                           title="Single Post" href="http://el.commonsupport.com/newwp/naxly/?p=667">Single Post</a></li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-357"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
//                     <a title="Elements" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Elements</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-733"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-733 dropdown">
//                         <a title="Elements 1" href="#">Elements 1</a>
//                         <ul role="menu" class="submenu">
//                           <li id="menu-item-736"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-736"><a
//                               title="Service 01" href="https://naxly.wpcomstaging.com/service-01/">Service 01</a></li>
//                           <li id="menu-item-742"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-742"><a
//                               title="Service 02" href="https://naxly.wpcomstaging.com/service-02/">Service 02</a></li>
//                           <li id="menu-item-754"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-754"><a
//                               title="About 01" href="https://naxly.wpcomstaging.com/about-01/">About 01</a></li>
//                           <li id="menu-item-753"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-753"><a
//                               title="About 02" href="https://naxly.wpcomstaging.com/about-02/">About 02</a></li>
//                           <li id="menu-item-752"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-752"><a
//                               title="About 03" href="https://naxly.wpcomstaging.com/about-03/">About 03</a></li>
//                           <li id="menu-item-774"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-774"><a
//                               title="About 04" href="https://naxly.wpcomstaging.com/about-04/">About 04</a></li>
//                           <li id="menu-item-773"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-773"><a
//                               title="About 05" href="https://naxly.wpcomstaging.com/about-05/">About 05</a></li>
//                           <li id="menu-item-783"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-783"><a
//                               title="About 06" href="https://naxly.wpcomstaging.com/about-06/">About 06</a></li>
//                         </ul>
//                         <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                       </li>
//                       <li id="menu-item-784"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-784 dropdown">
//                         <a title="Elements 2" href="#">Elements 2</a>
//                         <ul role="menu" class="submenu">
//                           <li id="menu-item-787"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-787"><a
//                               title="Work 01" href="https://naxly.wpcomstaging.com/work-01/">Work 01</a></li>
//                           <li id="menu-item-796"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-796"><a
//                               title="Work 02" href="https://naxly.wpcomstaging.com/work-02/">Work 02</a></li>
//                           <li id="menu-item-803"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-803"><a
//                               title="Skills 01" href="https://naxly.wpcomstaging.com/skills-01/">Skills 01</a></li>
//                           <li id="menu-item-807"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"><a
//                               title="Skills 02" href="https://naxly.wpcomstaging.com/skills-02/">Skills 02</a></li>
//                           <li id="menu-item-810"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-810"><a
//                               title="Case 01" href="https://naxly.wpcomstaging.com/case-01/">Case 01</a></li>
//                           <li id="menu-item-819"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-819"><a
//                               title="Case 02" href="https://naxly.wpcomstaging.com/case-02/">Case 02</a></li>
//                           <li id="menu-item-818"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-818"><a
//                               title="Case 03" href="https://naxly.wpcomstaging.com/case-03/">Case 03</a></li>
//                           <li id="menu-item-827"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-827"><a
//                               title="Case 04" href="https://naxly.wpcomstaging.com/case-04/">Case 04</a></li>
//                         </ul>
//                         <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                       </li>
//                       <li id="menu-item-833"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-833 dropdown">
//                         <a title="Elements 3" href="#">Elements 3</a>
//                         <ul role="menu" class="submenu">
//                           <li id="menu-item-834"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-834"><a
//                               title="Fun Fact 01" href="https://naxly.wpcomstaging.com/fun-fact-01/">Fun Fact 01</a>
//                           </li>
//                           <li id="menu-item-842"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-842"><a
//                               title="Fun Fact 02" href="https://naxly.wpcomstaging.com/fun-fact-02/">Fun Fact 02</a>
//                           </li>
//                           <li id="menu-item-841"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-841"><a
//                               title="Fun Fact 03" href="https://naxly.wpcomstaging.com/fun-fact-03/">Fun Fact 03</a>
//                           </li>
//                           <li id="menu-item-845"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-845"><a
//                               title="Fun Fact 04" href="https://naxly.wpcomstaging.com/fun-fact-04/">Fun Fact 04</a>
//                           </li>
//                           <li id="menu-item-858"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-858"><a
//                               title="News 01" href="https://naxly.wpcomstaging.com/news-01/">News 01</a></li>
//                           <li id="menu-item-857"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-857"><a
//                               title="News 02" href="https://naxly.wpcomstaging.com/news-02/">News 02</a></li>
//                           <li id="menu-item-856"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-856"><a
//                               title="News 03" href="https://naxly.wpcomstaging.com/news-03/">News 03</a></li>
//                           <li id="menu-item-855"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-855"><a
//                               title="News 04" href="https://naxly.wpcomstaging.com/news-04/">News 04</a></li>
//                         </ul>
//                         <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                       </li>
//                       <li id="menu-item-885"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-885 dropdown">
//                         <a title="Elements 4" href="#">Elements 4</a>
//                         <ul role="menu" class="submenu">
//                           <li id="menu-item-886"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-886"><a
//                               title="Choose Us 01" href="https://naxly.wpcomstaging.com/choose-us-01/">Choose Us 01</a>
//                           </li>
//                           <li id="menu-item-891"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-891"><a
//                               title="Choose Us 02" href="https://naxly.wpcomstaging.com/choose-us-02/">Choose Us 02</a>
//                           </li>
//                           <li id="menu-item-896"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"><a
//                               title="Choose Us 03" href="https://naxly.wpcomstaging.com/choose-us-03/">Choose Us 03</a>
//                           </li>
//                           <li id="menu-item-901"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-901"><a
//                               title="Team 01" href="https://naxly.wpcomstaging.com/team-01/">Team 01</a></li>
//                           <li id="menu-item-906"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-906"><a
//                               title="Team 02" href="https://naxly.wpcomstaging.com/team-02/">Team 02</a></li>
//                           <li id="menu-item-911"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-911"><a
//                               title="Team 03" href="https://naxly.wpcomstaging.com/team-03/">Team 03</a></li>
//                           <li id="menu-item-917"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-917"><a
//                               title="Team 04" href="https://naxly.wpcomstaging.com/team-04/">Team 04</a></li>
//                           <li id="menu-item-922"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-922"><a
//                               title="Technology" href="https://naxly.wpcomstaging.com/technology/">Technology</a></li>
//                         </ul>
//                         <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                       </li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-358"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
//                     <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Pages</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-672"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-672"><a title="404"
//                           href="http://el.commonsupport.com/newwp/naxly/?p=123456abc">404</a></li>
//                       <li id="menu-item-675"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-675"><a
//                           title="Coming Soon" href="https://naxly.wpcomstaging.com/coming-soon/">Coming Soon</a></li>
//                       <li id="menu-item-676"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-676"><a title="Faq’s"
//                           href="https://naxly.wpcomstaging.com/faqs/">Faq’s</a></li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                 </ul>
//               </div>
//             </nav>

//             <div class="btn-box">
//               <a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/" class="theme-btn style-five">Get in
//                 Touch</a>
//             </div>

//           </div>
//         </div>
//       </div>
//     </header>
//     {/* <!-- main-header end --> */}

//     {/* <!-- Mobile Menu  --> */}
//     <div class="mobile-menu">
//       <div class="menu-backdrop"></div>
//       <div class="close-btn"><i class="fas fa-times"></i></div>

//       <nav class="menu-box mCustomScrollbar _mCS_1">
//         <div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style="max-height: 692px;"
//           tabindex="0">
//           <div id="mCSB_1_container" class="mCSB_container" style="position: relative; top: -84px; left: 0px;"
//             dir="ltr">
//             <div class="nav-logo"><a href="https://naxly.wpcomstaging.com/" title="Titre du site"><img
//                   src="http://el.commonsupport.com/newwp/naxly/wp-content/themes/naxly/assets/images/logo.png"
//                   alt="logo" style="" class="mCS_img_loaded"></a></div>
//             <div class="menu-outer">
//               {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
//               <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
//                 <ul class="navigation clearfix">
//                   <li id="menu-item-15"
//                     class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
//                     <a title="Home" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Home</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-14"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-14"><a
//                           title="Data Science" href="https://naxly.wpcomstaging.com/">Data Science</a></li>
//                       <li id="menu-item-117"
//                         class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-115 current_page_item menu-item-117 active">
//                         <a title="Artificial intelligence"
//                           href="https://naxly.wpcomstaging.com/artificial-intelligence/">Artificial intelligence</a>
//                       </li>
//                       <li id="menu-item-209"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-209"><a
//                           title="Machine Learning" href="https://naxly.wpcomstaging.com/machine-learning/">Machine
//                           Learning</a></li>
//                       <li id="menu-item-274"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-274"><a
//                           title="Business Intelligence"
//                           href="https://naxly.wpcomstaging.com/business-intelligence/">Business Intelligence</a></li>
//                       <li id="menu-item-273"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-273"><a
//                           title="User Analysis" href="https://naxly.wpcomstaging.com/user-analysis/">User Analysis</a>
//                       </li>
//                       <li id="menu-item-361"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-361"><a
//                           title="Home Boxed" href="https://naxly.wpcomstaging.com/home-boxed/">Home Boxed</a></li>
//                       <li id="menu-item-1242"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242"><a
//                           title="Chatbot" href="https://naxly.wpcomstaging.com/chatbot/">Chatbot</a></li>
//                       <li id="menu-item-1342"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1342"><a
//                           title="Mobile App" href="https://naxly.wpcomstaging.com/mobile-app/">Mobile App</a></li>
//                       <li id="menu-item-1388"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1388"><a
//                           title="Sentiment Analysis" href="https://naxly.wpcomstaging.com/sentiment-analysis/">Sentiment
//                           Analysis</a></li>
//                       <li id="menu-item-941"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-941"><a
//                           title="Home RTL" href="https://naxly.wpcomstaging.com/home-rtl/">Home RTL</a></li>
//                       <li id="menu-item-940"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-940"><a
//                           title="Home OnePage" href="https://naxly.wpcomstaging.com/home-onepage/">Home OnePage</a></li>
//                       <li id="menu-item-467"
//                         class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-467 dropdown current">
//                         <a title="Header Styles" href="#">Header Styles</a>
//                         <ul role="menu" class="submenu">
//                           <li id="menu-item-473"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-473">
//                             <a title="Header Style One" href="https://naxly.wpcomstaging.com/">Header Style One</a></li>
//                           <li id="menu-item-472"
//                             class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-115 current_page_item menu-item-472 active">
//                             <a title="Header Style Two"
//                               href="https://naxly.wpcomstaging.com/artificial-intelligence/">Header Style Two</a></li>
//                           <li id="menu-item-471"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-471"><a
//                               title="Header Style Three" href="https://naxly.wpcomstaging.com/machine-learning/">Header
//                               Style Three</a></li>
//                           <li id="menu-item-470"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-470"><a
//                               title="Header Style Four"
//                               href="https://naxly.wpcomstaging.com/business-intelligence/">Header Style Four</a></li>
//                           <li id="menu-item-469"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-469"><a
//                               title="Header Style Five" href="https://naxly.wpcomstaging.com/user-analysis/">Header
//                               Style Five</a></li>
//                         </ul>
//                         <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                       </li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-353"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
//                     <a title="Company" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Company</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-482"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-482"><a
//                           title="About Company" href="https://naxly.wpcomstaging.com/about-company/">About Company</a>
//                       </li>
//                       <li id="menu-item-500"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"><a
//                           title="Meet Our Team" href="https://naxly.wpcomstaging.com/meet-our-team/">Meet Our Team</a>
//                       </li>
//                       <li id="menu-item-511"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-511"><a
//                           title="Get In Touch" href="https://naxly.wpcomstaging.com/get-in-touch/">Get In Touch</a></li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-354"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
//                     <a title="Services" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Services</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-525"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-525"><a
//                           title="Our Services" href="https://naxly.wpcomstaging.com/our-services/">Our Services</a></li>
//                       <li id="menu-item-703"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-703"><a
//                           title="Service Details" href="https://naxly.wpcomstaging.com/service-details/">Service
//                           Details</a></li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-355"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
//                     <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Works</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-550"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-550"><a
//                           title="Project 2 Columns" href="https://naxly.wpcomstaging.com/project-2-columns/">Project 2
//                           Columns</a></li>
//                       <li id="menu-item-570"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570"><a
//                           title="Project 3 Columns" href="https://naxly.wpcomstaging.com/project-3-columns/">Project 3
//                           Columns</a></li>
//                       <li id="menu-item-588"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-588"><a
//                           title="Case Studies" href="https://naxly.wpcomstaging.com/case-studies/">Case Studies</a></li>
//                       <li id="menu-item-1136"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1136"><a
//                           title="Case Details"
//                           href="http://el.commonsupport.com/newwp/naxly/naxly_project/baby-care-mobile-app/">Case
//                           Details</a></li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-356"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
//                     <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Blog</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-595"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-595"><a
//                           title="Classic Grid" href="https://naxly.wpcomstaging.com/classic-grid/">Classic Grid</a></li>
//                       <li id="menu-item-623"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-623"><a
//                           title="Classic With S/B" href="https://naxly.wpcomstaging.com/classic-with-s-b/">Classic With
//                           S/B</a></li>
//                       <li id="menu-item-632"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-632"><a
//                           title="Modern With S/B" href="https://naxly.wpcomstaging.com/modern-with-s-b/">Modern With
//                           S/B</a></li>
//                       <li id="menu-item-933"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-933"><a
//                           title="Single Post" href="http://el.commonsupport.com/newwp/naxly/?p=667">Single Post</a></li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-357"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
//                     <a title="Elements" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Elements</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-733"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-733 dropdown">
//                         <a title="Elements 1" href="#">Elements 1</a>
//                         <ul role="menu" class="submenu">
//                           <li id="menu-item-736"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-736"><a
//                               title="Service 01" href="https://naxly.wpcomstaging.com/service-01/">Service 01</a></li>
//                           <li id="menu-item-742"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-742"><a
//                               title="Service 02" href="https://naxly.wpcomstaging.com/service-02/">Service 02</a></li>
//                           <li id="menu-item-754"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-754"><a
//                               title="About 01" href="https://naxly.wpcomstaging.com/about-01/">About 01</a></li>
//                           <li id="menu-item-753"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-753"><a
//                               title="About 02" href="https://naxly.wpcomstaging.com/about-02/">About 02</a></li>
//                           <li id="menu-item-752"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-752"><a
//                               title="About 03" href="https://naxly.wpcomstaging.com/about-03/">About 03</a></li>
//                           <li id="menu-item-774"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-774"><a
//                               title="About 04" href="https://naxly.wpcomstaging.com/about-04/">About 04</a></li>
//                           <li id="menu-item-773"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-773"><a
//                               title="About 05" href="https://naxly.wpcomstaging.com/about-05/">About 05</a></li>
//                           <li id="menu-item-783"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-783"><a
//                               title="About 06" href="https://naxly.wpcomstaging.com/about-06/">About 06</a></li>
//                         </ul>
//                         <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                       </li>
//                       <li id="menu-item-784"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-784 dropdown">
//                         <a title="Elements 2" href="#">Elements 2</a>
//                         <ul role="menu" class="submenu">
//                           <li id="menu-item-787"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-787"><a
//                               title="Work 01" href="https://naxly.wpcomstaging.com/work-01/">Work 01</a></li>
//                           <li id="menu-item-796"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-796"><a
//                               title="Work 02" href="https://naxly.wpcomstaging.com/work-02/">Work 02</a></li>
//                           <li id="menu-item-803"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-803"><a
//                               title="Skills 01" href="https://naxly.wpcomstaging.com/skills-01/">Skills 01</a></li>
//                           <li id="menu-item-807"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-807"><a
//                               title="Skills 02" href="https://naxly.wpcomstaging.com/skills-02/">Skills 02</a></li>
//                           <li id="menu-item-810"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-810"><a
//                               title="Case 01" href="https://naxly.wpcomstaging.com/case-01/">Case 01</a></li>
//                           <li id="menu-item-819"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-819"><a
//                               title="Case 02" href="https://naxly.wpcomstaging.com/case-02/">Case 02</a></li>
//                           <li id="menu-item-818"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-818"><a
//                               title="Case 03" href="https://naxly.wpcomstaging.com/case-03/">Case 03</a></li>
//                           <li id="menu-item-827"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-827"><a
//                               title="Case 04" href="https://naxly.wpcomstaging.com/case-04/">Case 04</a></li>
//                         </ul>
//                         <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                       </li>
//                       <li id="menu-item-833"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-833 dropdown">
//                         <a title="Elements 3" href="#">Elements 3</a>
//                         <ul role="menu" class="submenu">
//                           <li id="menu-item-834"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-834"><a
//                               title="Fun Fact 01" href="https://naxly.wpcomstaging.com/fun-fact-01/">Fun Fact 01</a>
//                           </li>
//                           <li id="menu-item-842"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-842"><a
//                               title="Fun Fact 02" href="https://naxly.wpcomstaging.com/fun-fact-02/">Fun Fact 02</a>
//                           </li>
//                           <li id="menu-item-841"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-841"><a
//                               title="Fun Fact 03" href="https://naxly.wpcomstaging.com/fun-fact-03/">Fun Fact 03</a>
//                           </li>
//                           <li id="menu-item-845"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-845"><a
//                               title="Fun Fact 04" href="https://naxly.wpcomstaging.com/fun-fact-04/">Fun Fact 04</a>
//                           </li>
//                           <li id="menu-item-858"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-858"><a
//                               title="News 01" href="https://naxly.wpcomstaging.com/news-01/">News 01</a></li>
//                           <li id="menu-item-857"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-857"><a
//                               title="News 02" href="https://naxly.wpcomstaging.com/news-02/">News 02</a></li>
//                           <li id="menu-item-856"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-856"><a
//                               title="News 03" href="https://naxly.wpcomstaging.com/news-03/">News 03</a></li>
//                           <li id="menu-item-855"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-855"><a
//                               title="News 04" href="https://naxly.wpcomstaging.com/news-04/">News 04</a></li>
//                         </ul>
//                         <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                       </li>
//                       <li id="menu-item-885"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-885 dropdown">
//                         <a title="Elements 4" href="#">Elements 4</a>
//                         <ul role="menu" class="submenu">
//                           <li id="menu-item-886"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-886"><a
//                               title="Choose Us 01" href="https://naxly.wpcomstaging.com/choose-us-01/">Choose Us 01</a>
//                           </li>
//                           <li id="menu-item-891"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-891"><a
//                               title="Choose Us 02" href="https://naxly.wpcomstaging.com/choose-us-02/">Choose Us 02</a>
//                           </li>
//                           <li id="menu-item-896"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-896"><a
//                               title="Choose Us 03" href="https://naxly.wpcomstaging.com/choose-us-03/">Choose Us 03</a>
//                           </li>
//                           <li id="menu-item-901"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-901"><a
//                               title="Team 01" href="https://naxly.wpcomstaging.com/team-01/">Team 01</a></li>
//                           <li id="menu-item-906"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-906"><a
//                               title="Team 02" href="https://naxly.wpcomstaging.com/team-02/">Team 02</a></li>
//                           <li id="menu-item-911"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-911"><a
//                               title="Team 03" href="https://naxly.wpcomstaging.com/team-03/">Team 03</a></li>
//                           <li id="menu-item-917"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-917"><a
//                               title="Team 04" href="https://naxly.wpcomstaging.com/team-04/">Team 04</a></li>
//                           <li id="menu-item-922"
//                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-922"><a
//                               title="Technology" href="https://naxly.wpcomstaging.com/technology/">Technology</a></li>
//                         </ul>
//                         <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                       </li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                   <li id="menu-item-358"
//                     class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
//                     <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
//                       aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Pages</a>
//                     <ul role="menu" class="submenu">
//                       <li id="menu-item-672"
//                         class="menu-item menu-item-type-custom menu-item-object-custom menu-item-672"><a title="404"
//                           href="http://el.commonsupport.com/newwp/naxly/?p=123456abc">404</a></li>
//                       <li id="menu-item-675"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-675"><a
//                           title="Coming Soon" href="https://naxly.wpcomstaging.com/coming-soon/">Coming Soon</a></li>
//                       <li id="menu-item-676"
//                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-676"><a title="Faq’s"
//                           href="https://naxly.wpcomstaging.com/faqs/">Faq’s</a></li>
//                     </ul>
//                     <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div class="contact-info">
//               <h4>Contact Info</h4>
//               <ul>
//                 <li>Chicago 12, Melborne City, USA</li>
//                 <li><a href="tel:http://+88-01682648101">+88-01682648101</a></li>
//                 <li><a href="mailto:http://info@example.com">info@example.com</a></li>
//               </ul>
//             </div>

//             <div class="social-links">
//               <ul class="clearfix">
//                 <li><a href="https://www.facebook.com/"
//                     style="background-color:rgba(0, 0, 0, 0); color: rgb(255, 255, 255)"><span
//                       class="fab fa-linkedin"></span></a></li>
//                 <li><a href="https://www.skype.com/"
//                     style="background-color:rgba(0, 0, 0, 0); color: rgb(255, 255, 255)"><span
//                       class="fab fa-skype"></span></a></li>
//                 <li><a href="https://www.twitter.com/"
//                     style="background-color:rgba(0, 0, 0, 0); color: rgb(255, 255, 255)"><span
//                       class="fab fa-twitter"></span></a></li>
//               </ul>
//             </div>
//           </div>
//           <div id="mCSB_1_scrollbar_vertical"
//             class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style="display: block;">
//             <div class="mCSB_draggerContainer">
//               <div id="mCSB_1_dragger_vertical" class="mCSB_dragger"
//                 style="position: absolute; min-height: 0px; height: 0px; top: 0px; display: block;"
//                 oncontextmenu="return false;">
//                 <div class="mCSB_dragger_bar" style="line-height: 0px;"></div>
//                 <div class="mCSB_draggerRail"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//     {/* <!-- End Mobile Menu --> */}
//     <div data-elementor-type="wp-page" data-elementor-id="115" class="elementor elementor-115">
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-39f9d56 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
//         data-id="39f9d56" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e787232"
//             data-id="e787232" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div class="elementor-element elementor-element-de35060 elementor-widget elementor-widget-naxly_banner_v2"
//                 data-id="de35060" data-element_type="widget" data-widget_type="naxly_banner_v2.default">
//                 <div class="elementor-widget-container">

//                   {/* <!-- banner-section --> */}
//                   <section class="banner-style-two">
//                     <div class="pattern-layer"
//                       style="background-image: url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-10.png);">
//                     </div>
//                     <div class="large-container">
//                       <div class="row clearfix">
//                         <div class="col-lg-5 col-md-12 col-sm-12 content-column">
//                           <div class="content-box">
//                             <h1>Best Artificial Intelligence Lab</h1>
//                             <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
//                             <a href="http://el.commonsupport.com/newwp/naxly/about-company/"
//                               class="theme-btn style-five"><i class="flaticon-next"></i>More Details</a>
//                           </div>
//                         </div>
//                         <div class="col-lg-7 col-md-12 col-sm-12 image-column">
//                           <div class="image-box">
//                             <figure class="image image-1"><img decoding="async"
//                                 src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/banner-2-1.png?w=525&amp;ssl=1"
//                                 alt="Awesome Image" width="945" height="771"></figure>
//                             <figure class="image image-2 rotate-me"><img decoding="async"
//                                 src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gear-4.png?w=525&amp;ssl=1"
//                                 alt="Awesome Image" width="245" height="244"></figure>
//                             <figure class="image image-3 rotate-me"><img decoding="async"
//                                 src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gear-5.png?w=525&amp;ssl=1"
//                                 alt="Awesome Image" width="156" height="156"></figure>
//                             <figure class="image image-4 rotate-me"><img decoding="async"
//                                 src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gear-5.png?w=525&amp;ssl=1"
//                                 alt="Awesome Image" width="156" height="156"></figure>
//                             <figure class="image image-5 rotate-me"><img decoding="async"
//                                 src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gear-6.png?w=525&amp;ssl=1"
//                                 alt="Awesome Image" width="253" height="253"></figure>
//                             <div class="anim-icon">
//                               <span class="icon icon-1"></span>
//                               <span class="icon icon-2"></span>
//                               <span class="icon icon-3"></span>
//                               <span class="icon icon-4"></span>
//                               <span class="icon icon-5"></span>
//                               <span class="icon icon-6"></span>
//                               <span class="icon icon-7"></span>
//                               <span class="icon icon-8"></span>
//                               <span class="icon icon-9"></span>
//                               <span class="icon icon-10"></span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                   {/* <!-- banner-section end --> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-7ba2a33 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
//         data-id="7ba2a33" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-125b76f"
//             data-id="125b76f" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div
//                 class="elementor-element elementor-element-20c43e9 elementor-widget elementor-widget-naxly_subscribe_form"
//                 data-id="20c43e9" data-element_type="widget" data-widget_type="naxly_subscribe_form.default">
//                 <div class="elementor-widget-container">

//                   <div class="subscribe-us">
//                     <div class="large-container">
//                       <div class="subscribe-inner">
//                         <form action="http://feedburner.google.com/fb/a/mailverify" accept-charset="utf-8"
//                           method="post">
//                           <div class="form-group">
//                             <input type="hidden" id="uri6" name="uri" value="">
//                             <input type="email" name="email" placeholder="Enter Email Address..." required="">
//                             <button type="submit"><i class="flaticon-next"></i>Subscribe Us</button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-1210dae elementor-section-full_width elementor-section-height-default elementor-section-height-default"
//         data-id="1210dae" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b295bf3"
//             data-id="b295bf3" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div
//                 class="elementor-element elementor-element-a005400 elementor-widget elementor-widget-naxly_about_company_v2"
//                 data-id="a005400" data-element_type="widget" data-widget_type="naxly_about_company_v2.default">
//                 <div class="elementor-widget-container">

//                   {/* <!-- about-style-two --> */}
//                   <section class="about-style-two">
//                     <div class="auto-container">
//                       <div class="row clearfix">
//                         <div class="col-lg-7 col-md-12 col-sm-12 image-column">
//                           <div id="image_block_01">
//                             <div class="image-box wow slideInLeft animated" data-wow-delay="00ms"
//                               data-wow-duration="1500ms"
//                               style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: slideInLeft;">
//                               <div class="pattern-layer"
//                                 style="background-image: url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-12.png);">
//                               </div>
//                               <figure class="image js-tilt"><img decoding="async"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/about-1.png?w=525&amp;ssl=1"
//                                   alt="Awesome Image" width="615" height="504">
//                                 <div class="js-tilt-glare"
//                                   style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden;">
//                                   <div class="js-tilt-glare-inner"
//                                     style="position: absolute; top: 50%; left: 50%; pointer-events: none; background-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%); width: 1738.4px; height: 1738.4px; transform: rotate(180deg) translate(-50%, -50%); transform-origin: 0% 0% 0px; opacity: 0;">
//                                   </div>
//                                 </div>
//                               </figure>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col-lg-5 col-md-12 col-sm-12 content-column">
//                           <div id="content_block_03">
//                             <div class="content-box">
//                               <div class="sec-title style-two text-left">
//                                 <p>About Company</p>
//                                 <h2>Mission is to bring the power of AI to every business</h2>
//                                 <div class="decor"
//                                   style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png);">
//                                 </div>
//                               </div>
//                               <div class="text">
//                                 <p>To take a trivial example, which of us ever undertakes laborious physical exercise,
//                                   except to obtain some advantage from it but right to find fault with a man who chooses
//                                   enjoy.</p>
//                               </div>
//                               <div class="lower-box">
//                                 <div class="icon-box">
//                                   <div class="bg-box"
//                                     style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-bg-3.png);">
//                                   </div>
//                                   <i class="icon flaticon-brain-2"></i>
//                                 </div>
//                                 <h5>Impressive Works Since 2010</h5>
//                                 <a href="http://el.commonsupport.com/newwp/naxly/about-company/"><i
//                                     class="flaticon-next"></i>More About Us</a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                   {/* <!-- about-style-two end --> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-3ac182f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
//         data-id="3ac182f" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b1d08b6"
//             data-id="b1d08b6" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div
//                 class="elementor-element elementor-element-1930b72 elementor-widget elementor-widget-naxly_our_services_v1"
//                 data-id="1930b72" data-element_type="widget" data-widget_type="naxly_our_services_v1.default">
//                 <div class="elementor-widget-container">

//                   {/* <!-- service-style-two --> */}
//                   <section class="service-style-two">
//                     <div class="pattern-layer"
//                       style="background-image: url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-13.png);">
//                     </div>
//                     <figure class="image-layer"><img decoding="async"
//                         src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/illastration-2.png?w=525&amp;ssl=1"
//                         alt="Awesome Image" width="525" height="823"></figure>
//                     <div class="auto-container">
//                       <div class="row clearfix">
//                         <div class="col-xl-9 col-lg-12 col-md-12 inner-column">
//                           <div class="inner-content">
//                             <div class="sec-title text-center light">
//                               <p>Our Services</p>
//                               <h2>Services we offer for you</h2>
//                               <div class="decor"
//                                 style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-4.png);">
//                               </div>
//                             </div>
//                             <div
//                               class="service-carousel owl-carousel owl-theme owl-dots-none nav-style-one owl-loaded owl-drag">

//                               <div class="owl-stage-outer">
//                                 <div class="owl-stage"
//                                   style="transform: translate3d(-1798px, 0px, 0px); transition: all 0s ease 0s; width: 3148px;">
//                                   <div class="owl-item cloned" style="width: 419.6px; margin-right: 30px;">
//                                     <div class="service-block-two">
//                                       <div class="inner-box">
//                                         <div class="text-layer">
//                                           <h2>Mac</h2>
//                                         </div>
//                                         <div class="icon-box"><i class="icon flaticon-brain"></i></div>
//                                         <h4><a href="http://el.commonsupport.com/newwp/naxly/service-details/">Machine
//                                             Learning</a></h4>
//                                         <p>Any right to find fault with ...</p>
//                                         <div class="link"><a
//                                             href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
//                                               class="flaticon-next"></i>Read More</a></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div class="owl-item cloned" style="width: 419.6px; margin-right: 30px;">
//                                     <div class="service-block-two">
//                                       <div class="inner-box">
//                                         <div class="text-layer">
//                                           <h2>Cus</h2>
//                                         </div>
//                                         <div class="icon-box"><i class="icon flaticon-vr"></i></div>
//                                         <h4><a href="http://el.commonsupport.com/newwp/naxly/service-details/">Customer
//                                             Support</a></h4>
//                                         <p>Beguiled &amp; demoralized by the charms ...</p>
//                                         <div class="link"><a
//                                             href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
//                                               class="flaticon-next"></i>Read More</a></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div class="owl-item" style="width: 419.6px; margin-right: 30px;">
//                                     <div class="service-block-two">
//                                       <div class="inner-box">
//                                         <div class="text-layer">
//                                           <h2>Dat</h2>
//                                         </div>
//                                         <div class="icon-box"><i class="icon flaticon-data"></i></div>
//                                         <h4><a href="http://el.commonsupport.com/newwp/naxly/service-details/">Data
//                                             Science</a></h4>
//                                         <p>Simple &amp; easy distinguish in a ...</p>
//                                         <div class="link"><a
//                                             href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
//                                               class="flaticon-next"></i>Read More</a></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div class="owl-item" style="width: 419.6px; margin-right: 30px;">
//                                     <div class="service-block-two">
//                                       <div class="inner-box">
//                                         <div class="text-layer">
//                                           <h2>Mac</h2>
//                                         </div>
//                                         <div class="icon-box"><i class="icon flaticon-brain"></i></div>
//                                         <h4><a href="http://el.commonsupport.com/newwp/naxly/service-details/">Machine
//                                             Learning</a></h4>
//                                         <p>Any right to find fault with ...</p>
//                                         <div class="link"><a
//                                             href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
//                                               class="flaticon-next"></i>Read More</a></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div class="owl-item active" style="width: 419.6px; margin-right: 30px;">
//                                     <div class="service-block-two">
//                                       <div class="inner-box">
//                                         <div class="text-layer">
//                                           <h2>Cus</h2>
//                                         </div>
//                                         <div class="icon-box"><i class="icon flaticon-vr"></i></div>
//                                         <h4><a href="http://el.commonsupport.com/newwp/naxly/service-details/">Customer
//                                             Support</a></h4>
//                                         <p>Beguiled &amp; demoralized by the charms ...</p>
//                                         <div class="link"><a
//                                             href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
//                                               class="flaticon-next"></i>Read More</a></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div class="owl-item cloned active" style="width: 419.6px; margin-right: 30px;">
//                                     <div class="service-block-two">
//                                       <div class="inner-box">
//                                         <div class="text-layer">
//                                           <h2>Dat</h2>
//                                         </div>
//                                         <div class="icon-box"><i class="icon flaticon-data"></i></div>
//                                         <h4><a href="http://el.commonsupport.com/newwp/naxly/service-details/">Data
//                                             Science</a></h4>
//                                         <p>Simple &amp; easy distinguish in a ...</p>
//                                         <div class="link"><a
//                                             href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
//                                               class="flaticon-next"></i>Read More</a></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div class="owl-item cloned" style="width: 419.6px; margin-right: 30px;">
//                                     <div class="service-block-two">
//                                       <div class="inner-box">
//                                         <div class="text-layer">
//                                           <h2>Mac</h2>
//                                         </div>
//                                         <div class="icon-box"><i class="icon flaticon-brain"></i></div>
//                                         <h4><a href="http://el.commonsupport.com/newwp/naxly/service-details/">Machine
//                                             Learning</a></h4>
//                                         <p>Any right to find fault with ...</p>
//                                         <div class="link"><a
//                                             href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
//                                               class="flaticon-next"></i>Read More</a></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div class="owl-nav">
//                                 <div class="owl-prev"><span class=""></span></div>
//                                 <div class="owl-next"><span class=""></span></div>
//                               </div>
//                               <div class="owl-dots">
//                                 <div class="owl-dot"><span></span></div>
//                                 <div class="owl-dot active"><span></span></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                   {/* <!-- service-style-two end --> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-a6f5114 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
//         data-id="a6f5114" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fb1c4ae"
//             data-id="fb1c4ae" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div
//                 class="elementor-element elementor-element-6d3dce6 elementor-widget elementor-widget-naxly_case_studies_v2"
//                 data-id="6d3dce6" data-element_type="widget" data-widget_type="naxly_case_studies_v2.default">
//                 <div class="elementor-widget-container">

//                   {/* <!-- case-style-two --> */}
//                   <section class="case-style-two">
//                     <div class="auto-container">
//                       <div class="top-inner clearfix">
//                         <div class="sec-title style-two text-left pull-left">
//                           <p>Case Studies</p>
//                           <h2>Latest from our projects</h2>
//                           <div class="decor"
//                             style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png);">
//                           </div>
//                         </div>
//                         <div class="btn-box pull-right">
//                           <a href="http://el.commonsupport.com/newwp/naxly/project-2-columns/"
//                             class="theme-btn style-five"><i class="flaticon-next"></i>All Projects</a>
//                         </div>
//                       </div>
//                       <div class="three-item-carousel owl-carousel owl-theme owl-nav-none owl-loaded owl-drag">

//                         <div class="owl-stage-outer">
//                           <div class="owl-stage"
//                             style="transform: translate3d(-1798px, 0px, 0px); transition: all 0s ease 0s; width: 4946px;">
//                             <div class="owl-item cloned" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="151"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-3/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-3" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-3.png?w=525"
//                                           alt="Awesome Image" width="42" height="38"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/big-data-processing/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/big-data-processing/">Big
//                                           data processing</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-item cloned" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img fetchpriority="high" decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="149"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-1/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-1" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-1.png?w=525"
//                                           alt="Awesome Image" width="39" height="42"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-2/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-2/">Invoice
//                                           data capture</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-item cloned" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="150"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-2/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-2" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-2.png?w=525"
//                                           alt="Awesome Image" width="38" height="42"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/automate-feedback-analysis-3/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/automate-feedback-analysis-3/">Automate
//                                           feedback analysis</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-item" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img fetchpriority="high" decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="149"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-1/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-1" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-1.png?w=525"
//                                           alt="Awesome Image" width="39" height="42"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/">Invoice
//                                           data capture</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-item active" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="150"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-2/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-2" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-2.png?w=525"
//                                           alt="Awesome Image" width="38" height="42"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/automate-feedback-analysis-2/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/automate-feedback-analysis-2/">Network
//                                           implementation</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-item active" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="151"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-3/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-3" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-3.png?w=525"
//                                           alt="Awesome Image" width="42" height="38"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/big-data-processing/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/big-data-processing/">Big
//                                           data processing</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-item" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img fetchpriority="high" decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="149"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-1/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-1" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-1.png?w=525"
//                                           alt="Awesome Image" width="39" height="42"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-2/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-2/">Invoice
//                                           data capture</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-item" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="150"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-2/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-2" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-2.png?w=525"
//                                           alt="Awesome Image" width="38" height="42"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/automate-feedback-analysis-3/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/automate-feedback-analysis-3/">Automate
//                                           feedback analysis</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-item cloned" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img fetchpriority="high" decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="149"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-1/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-1" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-1.png?w=525"
//                                           alt="Awesome Image" width="39" height="42"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/">Invoice
//                                           data capture</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-item cloned" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="150"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-2/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-2" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-2.png?w=525"
//                                           alt="Awesome Image" width="38" height="42"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/automate-feedback-analysis-2/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/automate-feedback-analysis-2/">Network
//                                           implementation</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-item cloned" style="width: 419.6px; margin-right: 30px;">
//                               <div class="case-block-two">
//                                 <div class="inner-box">
//                                   <figure class="image-box">
//                                     <img decoding="async" width="370" height="340"
//                                       src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?resize=370%2C340&amp;ssl=1"
//                                       class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image" alt=""
//                                       srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?resize=300%2C276&amp;ssl=1 300w"
//                                       sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="151"
//                                       data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-3/"
//                                       data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?fit=370%2C340&amp;ssl=1"
//                                       data-orig-size="370,340" data-comments-opened="1"
//                                       data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                       data-image-title="gallery-3" data-image-description="" data-image-caption=""
//                                       data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?fit=300%2C276&amp;ssl=1"
//                                       data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?fit=370%2C340&amp;ssl=1">
//                                     <div class="client-box">
//                                       <span>Neuro Jump</span>
//                                       <div class="client-logo"><img decoding="async"
//                                           src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-3.png?w=525"
//                                           alt="Awesome Image" width="42" height="38"></div>
//                                     </div>
//                                     <div class="link"><a
//                                         href="https://naxly.wpcomstaging.com/naxly_project/big-data-processing/"><i
//                                           class="flaticon-hyperlink"></i></a></div>
//                                     <div class="overlay-layer"></div>
//                                   </figure>
//                                   <div class="lower-content">
//                                     <div class="box">
//                                       <div class="icon-box"><i class="icon flaticon-vision"></i></div>
//                                       <p>Our Projects</p>
//                                       <h4><a
//                                           href="https://naxly.wpcomstaging.com/naxly_project/big-data-processing/">Big
//                                           data processing</a></h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="owl-nav">
//                           <div class="owl-prev"><span class="flaticon-left"></span></div>
//                           <div class="owl-next"><span class="flaticon-arrow"></span></div>
//                         </div>
//                         <div class="owl-dots">
//                           <div class="owl-dot active"><span></span></div>
//                           <div class="owl-dot"><span></span></div>
//                           <div class="owl-dot"><span></span></div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                   {/* <!-- case-style-two end --> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-a29d7e7 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
//         data-id="a29d7e7" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-94c2b99"
//             data-id="94c2b99" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div
//                 class="elementor-element elementor-element-5e6c44d elementor-widget elementor-widget-naxly_work_process_v2"
//                 data-id="5e6c44d" data-element_type="widget" data-widget_type="naxly_work_process_v2.default">
//                 <div class="elementor-widget-container">

//                   {/* <!-- process-style-two --> */}
//                   <section class="process-style-two "
//                     style="background-image: url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/process-bg-1.jpg);">
//                     <div class="auto-container">
//                       <div class="sec-title text-center style-two">
//                         <p>Our Work Process</p>
//                         <h2>Simple &amp; clean work process</h2>
//                         <div class="decor"
//                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png);">
//                         </div>
//                       </div>
//                       <div class="inner-content">
//                         <div class="line"
//                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/line-1.png);">
//                         </div>
//                         <div class="row clearfix">
//                           <div class="col-lg-4 col-md-6 col-sm-12 work-block">
//                             <div class="work-block-two">
//                               <div class="inner-box">
//                                 <div class="arrow-box"
//                                   style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/arrow-1.png);">
//                                 </div>
//                                 <div class="icon-box">
//                                   <div class="border-line"
//                                     style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/border-1.png);">
//                                   </div>
//                                   <i class="icon flaticon-big-data"></i>
//                                 </div>
//                                 <div class="count-box wow zoomIn animated animated counted" data-wow-delay="00ms"
//                                   data-wow-duration="1500ms"
//                                   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: zoomIn;">
//                                   <span>01</span></div>
//                                 <div class="content-box wow slideInUp animated" data-wow-delay="00ms"
//                                   data-wow-duration="1500ms"
//                                   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: slideInUp;">
//                                   <h4><a href="http://el.commonsupport.com/newwp/naxly/our-services/">Frame the
//                                       Problem</a></h4>
//                                   <p>To take a trivial example, which idea of ever undertakes.</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div class="col-lg-4 col-md-6 col-sm-12 work-block">
//                             <div class="work-block-two">
//                               <div class="inner-box">
//                                 <div class="arrow-box"
//                                   style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/arrow-1.png);">
//                                 </div>
//                                 <div class="icon-box">
//                                   <div class="border-line"
//                                     style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/border-1.png);">
//                                   </div>
//                                   <i class="icon flaticon-ui"></i>
//                                 </div>
//                                 <div class="count-box wow zoomIn animated animated counted" data-wow-delay="00ms"
//                                   data-wow-duration="1500ms"
//                                   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: zoomIn;">
//                                   <span>02</span></div>
//                                 <div class="content-box wow slideInUp animated" data-wow-delay="00ms"
//                                   data-wow-duration="1500ms"
//                                   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: slideInUp;">
//                                   <h4><a href="http://el.commonsupport.com/newwp/naxly/our-services/">Collect the
//                                       Data</a></h4>
//                                   <p>Best every pleasure is too welcomed every pain avoided.</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div class="col-lg-4 col-md-6 col-sm-12 work-block">
//                             <div class="work-block-two">
//                               <div class="inner-box">
//                                 <div class="arrow-box"
//                                   style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/arrow-1.png);">
//                                 </div>
//                                 <div class="icon-box">
//                                   <div class="border-line"
//                                     style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/border-1.png);">
//                                   </div>
//                                   <i class="icon flaticon-brain"></i>
//                                 </div>
//                                 <div class="count-box wow zoomIn animated animated counted" data-wow-delay="00ms"
//                                   data-wow-duration="1500ms"
//                                   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: zoomIn;">
//                                   <span>03</span></div>
//                                 <div class="content-box wow slideInUp animated" data-wow-delay="00ms"
//                                   data-wow-duration="1500ms"
//                                   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: slideInUp;">
//                                   <h4><a href="http://el.commonsupport.com/newwp/naxly/our-services/">Process the
//                                       Data</a></h4>
//                                   <p>Have to be repudiated annoyances accepted the wise.</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="more-btn wow slideInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms"
//                           style="visibility: visible; animation-duration: 1500ms; animation-delay: 400ms; animation-name: slideInUp;">
//                           <a href="http://el.commonsupport.com/newwp/naxly/our-services/"
//                             class="theme-btn style-five"><i class="flaticon-next"></i>Get Started</a></div>
//                       </div>
//                     </div>
//                   </section>
//                   {/* <!-- process-style-two end --> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-1da2f59 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
//         data-id="1da2f59" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6e152ed"
//             data-id="6e152ed" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div
//                 class="elementor-element elementor-element-627db42 elementor-widget elementor-widget-naxly_why_choose_us"
//                 data-id="627db42" data-element_type="widget" data-widget_type="naxly_why_choose_us.default">
//                 <div class="elementor-widget-container">

//                   {/* <!-- chooseus-section --> */}
//                   <section class="chooseus-section  ">
//                     <div class="auto-container">
//                       <div class="sec-title text-center style-two">
//                         <p>Why Choose Us</p>
//                         <h2>Reason for people choose us</h2>
//                         <div class="decor"
//                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png);">
//                         </div>
//                       </div>
//                       <div class="row clearfix">
//                         <div class="col-lg-6 col-md-12 col-sm-12 content-column">
//                           <div id="content_block_04">
//                             <div class="content-box">
//                               <div class="single-item ">
//                                 <div class="icon-box">
//                                   <div class="bg-layer"
//                                     style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-bg-4.png);">
//                                   </div>
//                                   <i class="icon flaticon-global"></i>
//                                 </div>
//                                 <div class="box">
//                                   <h4>Global Experience</h4>
//                                   <p>Nor again is there anyone who loves or pursues pain of itself, because
//                                     circumstances.</p>
//                                   <a href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
//                                       class="fas fa-arrow-right"></i> Read More</a>
//                                 </div>
//                               </div>
//                               <div class="single-item text-right">
//                                 <div class="icon-box">
//                                   <div class="bg-layer"
//                                     style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-bg-4.png);">
//                                   </div>
//                                   <i class="icon flaticon-analysis"></i>
//                                 </div>
//                                 <div class="box">
//                                   <h4>Value for Results</h4>
//                                   <p>Except obtain some advantages from ithas any to find fault with a consequences.</p>
//                                   <a href="http://el.commonsupport.com/newwp/naxly/service-details/">Read More <i
//                                       class="fas fa-arrow-left"></i></a>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col-lg-6 col-md-12 col-sm-12 video-column">
//                           <div id="video_block_01">
//                             <div class="video-inner wow slideInRight animated" data-wow-delay="00ms"
//                               data-wow-duration="1500ms"
//                               style="background-image: url(&quot;https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/video-2.jpg&quot;); visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: slideInRight;">
//                               <div class="pattern-layer"
//                                 style="background-image: url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-14.png);">
//                               </div>
//                               <div class="video-btn">
//                                 <div class="btn-bg rotate-me"
//                                   style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-bg-5.png);">
//                                 </div>
//                                 <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image"
//                                   data-caption=""><i class="fas fa-play"></i></a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                   {/* <!-- chooseus-section end --> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-cbae8fb elementor-section-full_width elementor-section-height-default elementor-section-height-default"
//         data-id="cbae8fb" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1d74fd9"
//             data-id="1d74fd9" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div
//                 class="elementor-element elementor-element-653e096 elementor-widget elementor-widget-naxly_testimonials_v2"
//                 data-id="653e096" data-element_type="widget" data-widget_type="naxly_testimonials_v2.default">
//                 <div class="elementor-widget-container">
// {/* 
//                   <!-- testimonial-style-two --> */}
//                   <section class="testimonial-style-two">
//                     <div class="title-inner bg-color-3">
//                       <div class="pattern-layer"
//                         style="background-image: url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-15.png);">
//                       </div>
//                       <div class="auto-container">
//                         <div class="sec-title text-left light">
//                           <p>Testimonials</p>
//                           <h2>Words from our clients</h2>
//                           <div class="decor"
//                             style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-4.png);">
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="lower-content">
//                       <div class="auto-container">
//                         <div class="inner-content">
//                           <div
//                             class="testimonial-carousel-2 owl-carousel owl-theme owl-dots-none nav-style-one owl-loaded owl-drag">

//                             <div class="owl-stage-outer">
//                               <div class="owl-stage"
//                                 style="transform: translate3d(-3476px, 0px, 0px); transition: all 0s ease 0s; width: 6085px;">
//                                 <div class="owl-item cloned" style="width: 869.2px;">
//                                   <div class="testimonial-content">
//                                     <div class="inner-box">
//                                       <figure class="image-box"><img loading="lazy" decoding="async" width="553"
//                                           height="432"
//                                           src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=553%2C432&amp;ssl=1"
//                                           class="attachment-naxly_553x432 size-naxly_553x432 wp-post-image" alt=""
//                                           srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=300%2C234&amp;ssl=1 300w"
//                                           sizes="(max-width: 525px) 100vw, 525px" data-attachment-id="171"
//                                           data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-2/"
//                                           data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=553%2C432&amp;ssl=1"
//                                           data-orig-size="553,432" data-comments-opened="1"
//                                           data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                           data-image-title="testimonial-2" data-image-description=""
//                                           data-image-caption=""
//                                           data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=300%2C234&amp;ssl=1"
//                                           data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=525%2C410&amp;ssl=1">
//                                       </figure>
//                                       <div class="content-box">
//                                         <div class="icon-box"
//                                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-4.png);">
//                                         </div>
//                                         <div class="text">
//                                           <p>As a growing company, we found in Naxly expertise in data science invaluble
//                                             In almost two years of cooperation, they’ve helped us.</p>
//                                         </div>
//                                         <div class="author-info">
//                                           <h4>Donal Archar</h4>
//                                           <span class="designation">CEO &amp; Founder - Soft Solution</span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="owl-item cloned" style="width: 869.2px;">
//                                   <div class="testimonial-content">
//                                     <div class="inner-box">
//                                       <figure class="image-box"><img loading="lazy" decoding="async" width="553"
//                                           height="432"
//                                           src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?resize=553%2C432&amp;ssl=1"
//                                           class="attachment-naxly_553x432 size-naxly_553x432 wp-post-image" alt=""
//                                           srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?resize=300%2C234&amp;ssl=1 300w"
//                                           sizes="(max-width: 525px) 100vw, 525px" data-attachment-id="172"
//                                           data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-3/"
//                                           data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=553%2C432&amp;ssl=1"
//                                           data-orig-size="553,432" data-comments-opened="1"
//                                           data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                           data-image-title="testimonial-3" data-image-description=""
//                                           data-image-caption=""
//                                           data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=300%2C234&amp;ssl=1"
//                                           data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=525%2C410&amp;ssl=1">
//                                       </figure>
//                                       <div class="content-box">
//                                         <div class="icon-box"
//                                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-4.png);">
//                                         </div>
//                                         <div class="text">
//                                           <p>As a growing company, we found in Naxly expertise in data science invaluble
//                                             In almost two years of cooperation, they’ve helped us.</p>
//                                         </div>
//                                         <div class="author-info">
//                                           <h4>Jams Shan</h4>
//                                           <span class="designation">CEO &amp; Founder - Soft Solution</span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="owl-item" style="width: 869.2px;">
//                                   <div class="testimonial-content">
//                                     <div class="inner-box">
//                                       <figure class="image-box"><img loading="lazy" decoding="async" width="553"
//                                           height="432"
//                                           src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?resize=553%2C432&amp;ssl=1"
//                                           class="attachment-naxly_553x432 size-naxly_553x432 wp-post-image" alt=""
//                                           srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?resize=300%2C234&amp;ssl=1 300w"
//                                           sizes="(max-width: 525px) 100vw, 525px" data-attachment-id="170"
//                                           data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-1/"
//                                           data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=553%2C432&amp;ssl=1"
//                                           data-orig-size="553,432" data-comments-opened="1"
//                                           data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                           data-image-title="testimonial-1" data-image-description=""
//                                           data-image-caption=""
//                                           data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=300%2C234&amp;ssl=1"
//                                           data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=525%2C410&amp;ssl=1">
//                                       </figure>
//                                       <div class="content-box">
//                                         <div class="icon-box"
//                                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-4.png);">
//                                         </div>
//                                         <div class="text">
//                                           <p>As a growing company, we found in Naxly expertise in data science invaluble
//                                             In almost two years of cooperation, they’ve helped us.</p>
//                                         </div>
//                                         <div class="author-info">
//                                           <h4>Dedrew Kowzel</h4>
//                                           <span class="designation">CEO &amp; Founder - Soft Solution</span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="owl-item" style="width: 869.2px;">
//                                   <div class="testimonial-content">
//                                     <div class="inner-box">
//                                       <figure class="image-box"><img loading="lazy" decoding="async" width="553"
//                                           height="432"
//                                           src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=553%2C432&amp;ssl=1"
//                                           class="attachment-naxly_553x432 size-naxly_553x432 wp-post-image" alt=""
//                                           srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=300%2C234&amp;ssl=1 300w"
//                                           sizes="(max-width: 525px) 100vw, 525px" data-attachment-id="171"
//                                           data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-2/"
//                                           data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=553%2C432&amp;ssl=1"
//                                           data-orig-size="553,432" data-comments-opened="1"
//                                           data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                           data-image-title="testimonial-2" data-image-description=""
//                                           data-image-caption=""
//                                           data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=300%2C234&amp;ssl=1"
//                                           data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=525%2C410&amp;ssl=1">
//                                       </figure>
//                                       <div class="content-box">
//                                         <div class="icon-box"
//                                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-4.png);">
//                                         </div>
//                                         <div class="text">
//                                           <p>As a growing company, we found in Naxly expertise in data science invaluble
//                                             In almost two years of cooperation, they’ve helped us.</p>
//                                         </div>
//                                         <div class="author-info">
//                                           <h4>Donal Archar</h4>
//                                           <span class="designation">CEO &amp; Founder - Soft Solution</span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="owl-item active" style="width: 869.2px;">
//                                   <div class="testimonial-content">
//                                     <div class="inner-box">
//                                       <figure class="image-box"><img loading="lazy" decoding="async" width="553"
//                                           height="432"
//                                           src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?resize=553%2C432&amp;ssl=1"
//                                           class="attachment-naxly_553x432 size-naxly_553x432 wp-post-image" alt=""
//                                           srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?resize=300%2C234&amp;ssl=1 300w"
//                                           sizes="(max-width: 525px) 100vw, 525px" data-attachment-id="172"
//                                           data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-3/"
//                                           data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=553%2C432&amp;ssl=1"
//                                           data-orig-size="553,432" data-comments-opened="1"
//                                           data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                           data-image-title="testimonial-3" data-image-description=""
//                                           data-image-caption=""
//                                           data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=300%2C234&amp;ssl=1"
//                                           data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=525%2C410&amp;ssl=1">
//                                       </figure>
//                                       <div class="content-box">
//                                         <div class="icon-box"
//                                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-4.png);">
//                                         </div>
//                                         <div class="text">
//                                           <p>As a growing company, we found in Naxly expertise in data science invaluble
//                                             In almost two years of cooperation, they’ve helped us.</p>
//                                         </div>
//                                         <div class="author-info">
//                                           <h4>Jams Shan</h4>
//                                           <span class="designation">CEO &amp; Founder - Soft Solution</span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="owl-item cloned" style="width: 869.2px;">
//                                   <div class="testimonial-content">
//                                     <div class="inner-box">
//                                       <figure class="image-box"><img loading="lazy" decoding="async" width="553"
//                                           height="432"
//                                           src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?resize=553%2C432&amp;ssl=1"
//                                           class="attachment-naxly_553x432 size-naxly_553x432 wp-post-image" alt=""
//                                           srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?resize=300%2C234&amp;ssl=1 300w"
//                                           sizes="(max-width: 525px) 100vw, 525px" data-attachment-id="170"
//                                           data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-1/"
//                                           data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=553%2C432&amp;ssl=1"
//                                           data-orig-size="553,432" data-comments-opened="1"
//                                           data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                           data-image-title="testimonial-1" data-image-description=""
//                                           data-image-caption=""
//                                           data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=300%2C234&amp;ssl=1"
//                                           data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=525%2C410&amp;ssl=1">
//                                       </figure>
//                                       <div class="content-box">
//                                         <div class="icon-box"
//                                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-4.png);">
//                                         </div>
//                                         <div class="text">
//                                           <p>As a growing company, we found in Naxly expertise in data science invaluble
//                                             In almost two years of cooperation, they’ve helped us.</p>
//                                         </div>
//                                         <div class="author-info">
//                                           <h4>Dedrew Kowzel</h4>
//                                           <span class="designation">CEO &amp; Founder - Soft Solution</span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="owl-item cloned" style="width: 869.2px;">
//                                   <div class="testimonial-content">
//                                     <div class="inner-box">
//                                       <figure class="image-box"><img loading="lazy" decoding="async" width="553"
//                                           height="432"
//                                           src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=553%2C432&amp;ssl=1"
//                                           class="attachment-naxly_553x432 size-naxly_553x432 wp-post-image" alt=""
//                                           srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=300%2C234&amp;ssl=1 300w"
//                                           sizes="(max-width: 525px) 100vw, 525px" data-attachment-id="171"
//                                           data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-2/"
//                                           data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=553%2C432&amp;ssl=1"
//                                           data-orig-size="553,432" data-comments-opened="1"
//                                           data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                           data-image-title="testimonial-2" data-image-description=""
//                                           data-image-caption=""
//                                           data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=300%2C234&amp;ssl=1"
//                                           data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=525%2C410&amp;ssl=1">
//                                       </figure>
//                                       <div class="content-box">
//                                         <div class="icon-box"
//                                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-4.png);">
//                                         </div>
//                                         <div class="text">
//                                           <p>As a growing company, we found in Naxly expertise in data science invaluble
//                                             In almost two years of cooperation, they’ve helped us.</p>
//                                         </div>
//                                         <div class="author-info">
//                                           <h4>Donal Archar</h4>
//                                           <span class="designation">CEO &amp; Founder - Soft Solution</span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="owl-nav">
//                               <div class="owl-prev"><span class=""></span></div>
//                               <div class="owl-next"><span class=""></span></div>
//                             </div>
//                             <div class="owl-dots">
//                               <div class="owl-dot"><span></span></div>
//                               <div class="owl-dot"><span></span></div>
//                               <div class="owl-dot active"><span></span></div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                   {/* <!-- testimonial-style-two end --> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-c12456c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
//         data-id="c12456c" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c1e841a"
//             data-id="c1e841a" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div
//                 class="elementor-element elementor-element-11a4fe2 elementor-widget elementor-widget-naxly_latest_news_v2"
//                 data-id="11a4fe2" data-element_type="widget" data-widget_type="naxly_latest_news_v2.default">
//                 <div class="elementor-widget-container">

//                   {/* <!-- news-section --> */}
//                   <section class="news-section style-two">
//                     <div class="auto-container">
//                       <div class="sec-title text-center style-two mb-60">
//                         <p>News &amp; Updates</p>
//                         <h2>Latest thinking in AI and our <br>
//                           company news</h2>
//                         <div class="decor"
//                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png);">
//                         </div>
//                       </div>
//                       <div class="row clearfix">
//                         <div class="col-lg-4 col-md-6 col-sm-12 news-block">
//                           <div class="news-block-one wow fadeInUp animated" data-wow-delay="00ms"
//                             data-wow-duration="1500ms"
//                             style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
//                             <div class="inner-box">
//                               <figure class="image-box">
//                                 <img loading="lazy" decoding="async" width="370" height="250"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg?resize=370%2C250&amp;ssl=1"
//                                   class="attachment-naxly_370x250 size-naxly_370x250 wp-post-image" alt=""
//                                   srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg?resize=300%2C203&amp;ssl=1 300w"
//                                   sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="91"
//                                   data-permalink="https://naxly.wpcomstaging.com/2020/08/13/naxly-named-as-a-global-leader-in-big-data/news-1/"
//                                   data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg?fit=370%2C250&amp;ssl=1"
//                                   data-orig-size="370,250" data-comments-opened="1"
//                                   data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                   data-image-title="news-1" data-image-description="" data-image-caption=""
//                                   data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg?fit=300%2C203&amp;ssl=1"
//                                   data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg?fit=370%2C250&amp;ssl=1">
//                                 <a href="https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg"
//                                   class="lightbox-image" data-fancybox="gallery"><i class="flaticon-zoom"></i></a>
//                               </figure>
//                               <div class="lower-content">
//                                 <div class="file-box"><i class="far fa-folder-open"></i>
//                                   <p><a href="https://naxly.wpcomstaging.com/category/latest-news/"
//                                       rel="category tag">Latest News</a></p>
//                                 </div>
//                                 <div class="title-box">
//                                   <div class="post-date">
//                                     <p>13</p><span>Août</span>
//                                   </div>
//                                   <h4><a
//                                       href="https://naxly.wpcomstaging.com/2020/08/13/naxly-named-as-a-global-leader-in-big-data/">Naxly
//                                       Named as a Global Leader in Big Data</a></h4>
//                                 </div>
//                                 <div class="link"><a
//                                     href="https://naxly.wpcomstaging.com/2020/08/13/naxly-named-as-a-global-leader-in-big-data/"><i
//                                       class="flaticon-next"></i>More Details</a></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col-lg-4 col-md-6 col-sm-12 news-block">
//                           <div class="news-block-one wow fadeInUp animated" data-wow-delay="00ms"
//                             data-wow-duration="1500ms"
//                             style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
//                             <div class="inner-box">
//                               <figure class="image-box">
//                                 <img loading="lazy" decoding="async" width="370" height="250"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-2.jpg?resize=370%2C250&amp;ssl=1"
//                                   class="attachment-naxly_370x250 size-naxly_370x250 wp-post-image" alt=""
//                                   srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-2.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-2.jpg?resize=300%2C203&amp;ssl=1 300w"
//                                   sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="92"
//                                   data-permalink="https://naxly.wpcomstaging.com/2020/08/13/naxly-named-as-a-global-leader-in-big-data/news-2/"
//                                   data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-2.jpg?fit=370%2C250&amp;ssl=1"
//                                   data-orig-size="370,250" data-comments-opened="1"
//                                   data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                   data-image-title="news-2" data-image-description="" data-image-caption=""
//                                   data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-2.jpg?fit=300%2C203&amp;ssl=1"
//                                   data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-2.jpg?fit=370%2C250&amp;ssl=1">
//                                 <a href="https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-2.jpg"
//                                   class="lightbox-image" data-fancybox="gallery"><i class="flaticon-zoom"></i></a>
//                               </figure>
//                               <div class="lower-content">
//                                 <div class="file-box"><i class="far fa-folder-open"></i>
//                                   <p><a href="https://naxly.wpcomstaging.com/category/latest-news/"
//                                       rel="category tag">Latest News</a></p>
//                                 </div>
//                                 <div class="title-box">
//                                   <div class="post-date">
//                                     <p>13</p><span>Août</span>
//                                   </div>
//                                   <h4><a
//                                       href="https://naxly.wpcomstaging.com/2020/08/13/the-current-state-of-artificial-intelligence-infographic/">The
//                                       Current State of Artificial Intelligence Infographic.</a></h4>
//                                 </div>
//                                 <div class="link"><a
//                                     href="https://naxly.wpcomstaging.com/2020/08/13/the-current-state-of-artificial-intelligence-infographic/"><i
//                                       class="flaticon-next"></i>More Details</a></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col-lg-4 col-md-6 col-sm-12 news-block">
//                           <div class="news-block-one wow fadeInUp animated" data-wow-delay="00ms"
//                             data-wow-duration="1500ms"
//                             style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
//                             <div class="inner-box">
//                               <figure class="image-box">
//                                 <img loading="lazy" decoding="async" width="370" height="250"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-3.jpg?resize=370%2C250&amp;ssl=1"
//                                   class="attachment-naxly_370x250 size-naxly_370x250 wp-post-image" alt=""
//                                   srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-3.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-3.jpg?resize=300%2C203&amp;ssl=1 300w"
//                                   sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="93"
//                                   data-permalink="https://naxly.wpcomstaging.com/2020/08/13/naxly-named-as-a-global-leader-in-big-data/news-3/"
//                                   data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-3.jpg?fit=370%2C250&amp;ssl=1"
//                                   data-orig-size="370,250" data-comments-opened="1"
//                                   data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                                   data-image-title="news-3" data-image-description="" data-image-caption=""
//                                   data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-3.jpg?fit=300%2C203&amp;ssl=1"
//                                   data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-3.jpg?fit=370%2C250&amp;ssl=1">
//                                 <a href="https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-3.jpg"
//                                   class="lightbox-image" data-fancybox="gallery"><i class="flaticon-zoom"></i></a>
//                               </figure>
//                               <div class="lower-content">
//                                 <div class="file-box"><i class="far fa-folder-open"></i>
//                                   <p><a href="https://naxly.wpcomstaging.com/category/latest-news/"
//                                       rel="category tag">Latest News</a></p>
//                                 </div>
//                                 <div class="title-box">
//                                   <div class="post-date">
//                                     <p>13</p><span>Août</span>
//                                   </div>
//                                   <h4><a
//                                       href="https://naxly.wpcomstaging.com/2020/08/13/naxly-as-the-winners-in-global-agency-awards/">Naxly
//                                       as the Winners in Global Agency Awards</a></h4>
//                                 </div>
//                                 <div class="link"><a
//                                     href="https://naxly.wpcomstaging.com/2020/08/13/naxly-as-the-winners-in-global-agency-awards/"><i
//                                       class="flaticon-next"></i>More Details</a></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                   {/* <!-- news-section end --> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-1752d98 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
//         data-id="1752d98" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ab12c0f"
//             data-id="ab12c0f" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div
//                 class="elementor-element elementor-element-a1dc603 elementor-widget elementor-widget-naxly_our_clients_v2"
//                 data-id="a1dc603" data-element_type="widget" data-widget_type="naxly_our_clients_v2.default">
//                 <div class="elementor-widget-container">

//                   {/* <!-- clients-style-two --> */}
//                   <section class="clients-style-two bg-color-1">
//                     <div class="pattern-layer">
//                       <div class="pattern-1"
//                         style="background-image: url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-16.png);">
//                       </div>
//                       <div class="pattern-2 wow slideInRight animated" data-wow-delay="00ms" data-wow-duration="1500ms"
//                         style="background-image: url(&quot;https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-17.png&quot;); visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: slideInRight;">
//                       </div>
//                     </div>
//                     <div class="auto-container">
//                       <div class="sec-title text-center style-two mb-70">
//                         <p>Clients</p>
//                         <h2>Latest thinking in AI and our</h2>
//                         <div class="decor"
//                           style="background-image: url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png);">
//                         </div>
//                       </div>
//                       <div class="logo-inner">
//                         <ul class="logo-box logo-box-one clearfix">
//                           <li>
//                             <figure class="image-box"><a href="#"><img decoding="async"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-6.png?w=525&amp;ssl=1"
//                                   alt="Awesome Image" width="170" height="45"></a></figure>
//                           </li>
//                           <li>
//                             <figure class="image-box"><a href="#"><img decoding="async"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-7.png?w=525&amp;ssl=1"
//                                   alt="Awesome Image" width="170" height="45"></a></figure>
//                           </li>
//                           <li>
//                             <figure class="image-box"><a href="#"><img decoding="async"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-8.png?w=525&amp;ssl=1"
//                                   alt="Awesome Image" width="170" height="45"></a></figure>
//                           </li>
//                           <li>
//                             <figure class="image-box"><a href="#"><img decoding="async"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-9.png?w=525&amp;ssl=1"
//                                   alt="Awesome Image" width="170" height="45"></a></figure>
//                           </li>
//                         </ul>
//                         <ul class="logo-box logo-box-two clearfix">
//                           <li>
//                             <figure class="image-box"><a href="#"><img decoding="async"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-10.png?w=525&amp;ssl=1"
//                                   alt="Awesome Image" width="170" height="45"></a></figure>
//                           </li>
//                           <li>
//                             <figure class="image-box"><a href="#"><img decoding="async"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-11.png?w=525&amp;ssl=1"
//                                   alt="Awesome Image" width="170" height="45"></a></figure>
//                           </li>
//                           <li>
//                             <figure class="image-box"><a href="#"><img decoding="async"
//                                   src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-12.png?w=525&amp;ssl=1"
//                                   alt="Awesome Image" width="170" height="45"></a></figure>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </section>
//                   {/* <!-- clients-style-two end --> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         class="elementor-section elementor-top-section elementor-element elementor-element-e9f71d9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
//         data-id="e9f71d9" data-element_type="section">
//         <div class="elementor-container elementor-column-gap-default">
//           <div
//             class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4e4e03c"
//             data-id="4e4e03c" data-element_type="column">
//             <div class="elementor-widget-wrap elementor-element-populated">
//               <div
//                 class="elementor-element elementor-element-f2fbb2a elementor-widget elementor-widget-naxly_contact_info"
//                 data-id="f2fbb2a" data-element_type="widget" data-widget_type="naxly_contact_info.default">
//                 <div class="elementor-widget-container">

//                   {/* <!-- info-section --> */}
//                   <section class="info-section">
//                     <div class="auto-container">
//                       <div class="inner-container">
//                         <div class="info-inner">
//                           <div class="row clearfix">
//                             <div class="col-lg-4 col-md-6 col-sm-12 info-column">
//                               <div class="info-box">
//                                 <div class="hidden-icon"><i class="icon flaticon-pin"></i></div>
//                                 <div class="box">
//                                   <div class="icon-box"><i class="icon flaticon-pin"></i></div>
//                                   <h4>Location</h4>
//                                   <span>Visit to explore the world</span>
//                                 </div>
//                                 <div class="text">
//                                   <p>124, Queens walk 2nd cross<br>newyork 5241.</p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 col-sm-12 info-column">
//                               <div class="info-box">
//                                 <div class="hidden-icon"><i class="icon flaticon-music"></i></div>
//                                 <div class="box">
//                                   <div class="icon-box"><i class="icon flaticon-music"></i></div>
//                                   <h4>Make a Call</h4>
//                                   <span>Let’s talk with our experts</span>
//                                 </div>
//                                 <div class="text">
//                                   <p><a href="tel:4455567890">+44 555 67 890</a></p>
//                                   <p>Mon - Fri: 09.00 to 18.00</p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="col-lg-4 col-md-6 col-sm-12 info-column">
//                               <div class="info-box">
//                                 <div class="hidden-icon"><i class="icon flaticon-gmail"></i></div>
//                                 <div class="box">
//                                   <div class="icon-box"><i class="icon flaticon-gmail"></i></div>
//                                   <h4>Send a Mail</h4>
//                                   <span>Dont’s hesitate to mail</span>
//                                 </div>
//                                 <div class="text">
//                                   <p><a href="mailto:career@example.com">career@example.com</a></p>
//                                   <p><a href="mailto:info@example.com">info@example.com</a></p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                   {/* <!-- info-section end --> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>

//     <div class="clearfix"></div>

//     <div class="pageloader" style="z-index: 999999;">
//       <div class="loader">
//         <div class="loader-inner semi-circle-spin">
//           <div></div>
//         </div>
//       </div>
//     </div>
//     {/* <!-- Pageloader --> */}

//     {/* <!-- footer-style-two --> */}
//     <footer class="footer-style-two bg-color-3">
//       <div class="auto-container">
//         <div class="footer-top">
//           <div class="widget-section">
//             <div class="row clearfix">
//               <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
//                 <div id="pages-2" class="footer-widget widget_pages">
//                   <div class="widget-title">
//                     <h3>Company</h3>
//                   </div>
//                   <ul>
//                     <li class="page_item page-item-474"><a href="https://naxly.wpcomstaging.com/about-company/">About
//                         Company</a></li>
//                     <li class="page_item page-item-1"><a href="https://naxly.wpcomstaging.com/a-propos/">À propos</a>
//                     </li>
//                     <li class="page_item page-item-586"><a href="https://naxly.wpcomstaging.com/case-studies/">Case
//                         Studies</a></li>
//                     <li class="page_item page-item-593"><a href="https://naxly.wpcomstaging.com/classic-grid/">Classic
//                         Grid</a></li>
//                     <li class="page_item page-item-619"><a
//                         href="https://naxly.wpcomstaging.com/classic-with-s-b/">Classic With S/B</a></li>
//                     <li class="page_item page-item-673"><a href="https://naxly.wpcomstaging.com/coming-soon/">Coming
//                         Soon</a></li>
//                     <li class="page_item page-item-1469"><a href="https://naxly.wpcomstaging.com/">Data Science</a></li>
//                     <li class="page_item page-item-670"><a href="https://naxly.wpcomstaging.com/faqs/">Faq’s</a></li>
//                     <li class="page_item page-item-508"><a href="https://naxly.wpcomstaging.com/get-in-touch/">Get In
//                         Touch</a></li>
//                     <li class="page_item page-item-498"><a href="https://naxly.wpcomstaging.com/meet-our-team/">Meet Our
//                         Team</a></li>
//                     <li class="page_item page-item-523"><a href="https://naxly.wpcomstaging.com/our-services/">Our
//                         Services</a></li>
//                   </ul>

//                 </div>
//               </div>
//               <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
//                 <div id="naxly_trending_post-1" class="footer-widget widget_naxly_trending_post">

//                   {/* <!-- Trending Posts --> */}
//                   <div class="post-widget">
//                     <div class="widget-title">
//                       <h3>Trending Post</h3>
//                     </div>
//                     <div class="widget-content">

//                       {/* <!-- Title --> */}
//                       <div class="post">
//                         <div class="post-date">
//                           <p>18</p><span>Fév</span>
//                         </div>
//                         <div class="file-box"><i class="far fa-folder-open"></i>
//                           <p><a href="https://naxly.wpcomstaging.com/category/non-classe/" rel="category tag">Non
//                               classé</a></p>
//                         </div>
//                         <h5><a href="https://naxly.wpcomstaging.com/2024/02/18/hello-world/">Bonjour tout le monde !</a>
//                         </h5>
//                       </div>
//                       <div class="post">
//                         <div class="post-date">
//                           <p>28</p><span>Août</span>
//                         </div>
//                         <div class="file-box"><i class="far fa-folder-open"></i>
//                           <p><a href="https://naxly.wpcomstaging.com/category/blog-masonry/" rel="category tag">Blog
//                               Masonry</a></p>
//                         </div>
//                         <h5><a
//                             href="https://naxly.wpcomstaging.com/2020/08/28/the-current-state-of-artificial-intelligence-infographic-4/">The
//                             Current State of Artificial Intelligence Infographic.</a></h5>
//                       </div>

//                     </div>
//                   </div>

//                 </div>
//               </div>
//               <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
//                 <div id="naxly_latest_works-1" class="footer-widget widget_naxly_latest_works">
               
//                   <div class="gallery-widget">
//                     <div class="widget-title">
//                       <h3>Latest Work</h3>
//                     </div>
//                     <div class="widget-content">
//                       <ul class="list clearfix">

//                         <li>
//                           <figure class="image-box">
//                             <img loading="lazy" width="85" height="85"
//                               src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?resize=85%2C85&amp;ssl=1"
//                               class="attachment-naxly_85x85 size-naxly_85x85 wp-post-image" alt="" decoding="async"
//                               srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?resize=178%2C180&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?resize=70%2C70&amp;ssl=1 70w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?zoom=3&amp;resize=85%2C85&amp;ssl=1 255w"
//                               sizes="(max-width: 85px) 100vw, 85px" data-attachment-id="80"
//                               data-permalink="https://naxly.wpcomstaging.com/naxly_project/consulting-on-invoice-data-capture/case-4/"
//                               data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?fit=270%2C220&amp;ssl=1"
//                               data-orig-size="270,220" data-comments-opened="1"
//                               data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                               data-image-title="case-4" data-image-description="" data-image-caption=""
//                               data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?fit=270%2C220&amp;ssl=1"
//                               data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-4.png?fit=270%2C220&amp;ssl=1">
//                             <a href="#"><i class="flaticon-hyperlink"></i></a>
//                           </figure>
//                         </li>
//                         <li>
//                           <figure class="image-box">
//                             <img loading="lazy" width="85" height="85"
//                               src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?resize=85%2C85&amp;ssl=1"
//                               class="attachment-naxly_85x85 size-naxly_85x85 wp-post-image" alt="" decoding="async"
//                               srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?resize=178%2C180&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?resize=70%2C70&amp;ssl=1 70w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?zoom=3&amp;resize=85%2C85&amp;ssl=1 255w"
//                               sizes="(max-width: 85px) 100vw, 85px" data-attachment-id="78"
//                               data-permalink="https://naxly.wpcomstaging.com/naxly_project/consulting-on-invoice-data-capture/case-2/"
//                               data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?fit=270%2C220&amp;ssl=1"
//                               data-orig-size="270,220" data-comments-opened="1"
//                               data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                               data-image-title="case-2" data-image-description="" data-image-caption=""
//                               data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?fit=270%2C220&amp;ssl=1"
//                               data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-2.png?fit=270%2C220&amp;ssl=1">
//                             <a href="#"><i class="flaticon-hyperlink"></i></a>
//                           </figure>
//                         </li>
//                         <li>
//                           <figure class="image-box">
//                             <img loading="lazy" width="85" height="85"
//                               src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?resize=85%2C85&amp;ssl=1"
//                               class="attachment-naxly_85x85 size-naxly_85x85 wp-post-image" alt="" decoding="async"
//                               srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?resize=178%2C180&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?resize=70%2C70&amp;ssl=1 70w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?zoom=3&amp;resize=85%2C85&amp;ssl=1 255w"
//                               sizes="(max-width: 85px) 100vw, 85px" data-attachment-id="79"
//                               data-permalink="https://naxly.wpcomstaging.com/naxly_project/consulting-on-invoice-data-capture/case-3/"
//                               data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?fit=270%2C220&amp;ssl=1"
//                               data-orig-size="270,220" data-comments-opened="1"
//                               data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                               data-image-title="case-3" data-image-description="" data-image-caption=""
//                               data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?fit=270%2C220&amp;ssl=1"
//                               data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-3.png?fit=270%2C220&amp;ssl=1">
//                             <a href=""><i class="flaticon-hyperlink"></i></a>
//                           </figure>
//                         </li>
//                         <li>
//                           <figure class="image-box">
//                             <img loading="lazy" width="85" height="85"
//                               src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?resize=85%2C85&amp;ssl=1"
//                               class="attachment-naxly_85x85 size-naxly_85x85 wp-post-image" alt="" decoding="async"
//                               srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?resize=178%2C180&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?resize=70%2C70&amp;ssl=1 70w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?zoom=3&amp;resize=85%2C85&amp;ssl=1 255w"
//                               sizes="(max-width: 85px) 100vw, 85px" data-attachment-id="77"
//                               data-permalink="https://naxly.wpcomstaging.com/naxly_project/consulting-on-invoice-data-capture/case-1/"
//                               data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?fit=270%2C220&amp;ssl=1"
//                               data-orig-size="270,220" data-comments-opened="1"
//                               data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                               data-image-title="case-1" data-image-description="" data-image-caption=""
//                               data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?fit=270%2C220&amp;ssl=1"
//                               data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/case-1.png?fit=270%2C220&amp;ssl=1">
//                             <a href="#"><i class="flaticon-hyperlink"></i></a>
//                           </figure>
//                         </li>
//                         <li>
//                           <figure class="image-box">
//                             <img loading="lazy" width="85" height="85"
//                               src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?resize=85%2C85&amp;ssl=1"
//                               class="attachment-naxly_85x85 size-naxly_85x85 wp-post-image" alt="" decoding="async"
//                               srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?resize=178%2C180&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?resize=70%2C70&amp;ssl=1 70w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?zoom=3&amp;resize=85%2C85&amp;ssl=1 255w"
//                               sizes="(max-width: 85px) 100vw, 85px" data-attachment-id="571"
//                               data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-3/gallery-17/"
//                               data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?fit=370%2C340&amp;ssl=1"
//                               data-orig-size="370,340" data-comments-opened="1"
//                               data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                               data-image-title="gallery-17" data-image-description="" data-image-caption=""
//                               data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?fit=300%2C276&amp;ssl=1"
//                               data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-17.jpg?fit=370%2C340&amp;ssl=1">
//                             <a href="#"><i class="flaticon-hyperlink"></i></a>
//                           </figure>
//                         </li>
//                         <li>
//                           <figure class="image-box">
//                             <img loading="lazy" width="85" height="85"
//                               src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?resize=85%2C85&amp;ssl=1"
//                               class="attachment-naxly_85x85 size-naxly_85x85 wp-post-image" alt="" decoding="async"
//                               srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?resize=178%2C180&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?resize=70%2C70&amp;ssl=1 70w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?zoom=3&amp;resize=85%2C85&amp;ssl=1 255w"
//                               sizes="(max-width: 85px) 100vw, 85px" data-attachment-id="576"
//                               data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-3/gallery-22/"
//                               data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?fit=370%2C340&amp;ssl=1"
//                               data-orig-size="370,340" data-comments-opened="1"
//                               data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                               data-image-title="gallery-22" data-image-description="" data-image-caption=""
//                               data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?fit=300%2C276&amp;ssl=1"
//                               data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-22.jpg?fit=370%2C340&amp;ssl=1">
//                             <a href="#"><i class="flaticon-hyperlink"></i></a>
//                           </figure>
//                         </li>
//                         <li>
//                           <figure class="image-box">
//                             <img loading="lazy" width="85" height="85"
//                               src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?resize=85%2C85&amp;ssl=1"
//                               class="attachment-naxly_85x85 size-naxly_85x85 wp-post-image" alt="" decoding="async"
//                               srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?resize=178%2C180&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?resize=70%2C70&amp;ssl=1 70w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?zoom=3&amp;resize=85%2C85&amp;ssl=1 255w"
//                               sizes="(max-width: 85px) 100vw, 85px" data-attachment-id="575"
//                               data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-3/gallery-21/"
//                               data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?fit=370%2C340&amp;ssl=1"
//                               data-orig-size="370,340" data-comments-opened="1"
//                               data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                               data-image-title="gallery-21" data-image-description="" data-image-caption=""
//                               data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?fit=300%2C276&amp;ssl=1"
//                               data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-21.jpg?fit=370%2C340&amp;ssl=1">
//                             <a href="#"><i class="flaticon-hyperlink"></i></a>
//                           </figure>
//                         </li>
//                         <li>
//                           <figure class="image-box">
//                             <img loading="lazy" width="85" height="85"
//                               src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?resize=85%2C85&amp;ssl=1"
//                               class="attachment-naxly_85x85 size-naxly_85x85 wp-post-image" alt="" decoding="async"
//                               srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?resize=178%2C180&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?resize=70%2C70&amp;ssl=1 70w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?zoom=3&amp;resize=85%2C85&amp;ssl=1 255w"
//                               sizes="(max-width: 85px) 100vw, 85px" data-attachment-id="573"
//                               data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-3/gallery-19/"
//                               data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?fit=370%2C340&amp;ssl=1"
//                               data-orig-size="370,340" data-comments-opened="1"
//                               data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
//                               data-image-title="gallery-19" data-image-description="" data-image-caption=""
//                               data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?fit=300%2C276&amp;ssl=1"
//                               data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-19.jpg?fit=370%2C340&amp;ssl=1">
//                             <a href="#"><i class="flaticon-hyperlink"></i></a>
//                           </figure>
//                         </li>

//                       </ul>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="footer-bottom clearfix">
//           <div class="left-column pull-left">
//             <div class="copyright">
//               <p>Copyright © <a href="#">Naxly</a>, All Rights Reserved.</p>
//             </div>
//             <figure class="footer-logo"><a href="https://naxly.wpcomstaging.com/"><img
//                   src="https://naxly.wpcomstaging.com/wp-content/uploads/2020/04/Logo_AI-1.png" alt="Awesome Image"></a>
//             </figure>
//           </div>
//           <div class="right-column pull-right">
//             <ul class="footer-nav">
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Terms &amp; Conditions</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
  
//   </div>
  
 
//     href="https://s0.wp.com/wp-content/mu-plugins/notes/admin-bar-v2.css?ver=13.2-a.7-202408-lite" media="all">
//   <script type="text/javascript" id="contact-form-7-js-extra">
//     /* <![CDATA[ */
//     var wpcf7 = {
//       "api": {
//         "root": "https:\/\/naxly.wpcomstaging.com\/wp-json\/",
//         "namespace": "contact-form-7\/v1"
//       },
//       "cached": "1"
//     };
//     /* ]]> */
//   </script>
//   <script type="text/javascript" id="jetpack-scan-show-notice-js-extra">
//     /* <![CDATA[ */
//     var Jetpack_Scan = {
//       "nonce": "828c0631f3",
//       "scan_endpoint": "https:\/\/naxly.wpcomstaging.com\/wp-json\/jetpack\/v4\/scan",
//       "scan_dashboard_url": "https:\/\/jetpack.com\/redirect\/?source=calypso-scanner&site=naxly.wpcomstaging.com",
//       "singular": "<svg width=\"18\" height=\"22\" viewBox=\"0 0 18 22\" fill=\"none\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"><path d=\"M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0Z\" fill=\"#D63638\"\/><path d=\"M7.99121 6.00894H10.0085V11.9968H7.99121V6.00894Z\" fill=\"#FFF\"\/><path d=\"M7.99121 14.014H10.0085V15.9911H7.99121V14.014Z\" fill=\"#FFF\"\/><\/svg> menace d\u00e9tect\u00e9e",
//       "multiple": "<svg width=\"18\" height=\"22\" viewBox=\"0 0 18 22\" fill=\"none\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"><path d=\"M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0Z\" fill=\"#D63638\"\/><path d=\"M7.99121 6.00894H10.0085V11.9968H7.99121V6.00894Z\" fill=\"#FFF\"\/><path d=\"M7.99121 14.014H10.0085V15.9911H7.99121V14.014Z\" fill=\"#FFF\"\/><\/svg> menaces d\u00e9tect\u00e9es"
//     };
//     /* ]]> */
//   </script>
//   <script type="text/javascript"
//     src="https://naxly.wpcomstaging.com/_static/??-eJyVU21PwyAQ/kNS1MTML8Y/4fflCreOSjnkjrb79+J0bpltZAkJOXhe4IGbojIUBIPo6HPnAuseJYJ5P83bEYOlpCELDSDizGlHuQE6VMYGbR2L/i2bnu+mv8JfNRhRO0qD2mgXjM8WWfM06p5LbXG+kXpFu1zf04jJHWVUz83gwgIIbFlXLaSL/bU8toWo2+y81WwgnLkqUEkFFyRkj0MxCjD7gwZmlKNrpBhxyXIF3xIJS4JYT6HJ1wEnmuqA/UfGdGh2EMyhpeuHWiFBuWgJ9xYDQznIG9Vx2CTyvq21EOel+fGpS35m7yxWyjsmoYh14OM9LU21f6b0VoDxlihVdvUfpiTpoiy0yLeWzq6cOOFKH51BA2X+H2UTdB20/oR8HV4eNvfPj09lbD4BQHi9CQ==">
//   </script>
//   <script type="text/javascript" src="https://naxly.wpcomstaging.com/wp-includes/js/underscore.min.js?ver=1.13.4"
//     id="underscore-js"></script>
//   <script type="text/javascript" src="https://naxly.wpcomstaging.com/wp-includes/js/backbone.min.js?ver=1.5.0"
//     id="backbone-js"></script>
//   <script type="text/javascript"
//     src="https://naxly.wpcomstaging.com/_static/??-eJydjEEOgzAMBD9UMEUq5YJ4SxIsZBrbKDbi+82h4l5OO3uYOfcmqTiKw56PlcQAM3L9WiCYoRtkihBD+kQVvKDlUKiue0WSdrPHebtVwkL6T2YzSMqs0rAuR0b7yTNPz3c39q+xH4YvmGZSow==">
//   </script>
//   <script type="text/javascript" id="elementor-web-cli-js-before">
//     /* <![CDATA[ */
//     var elementorWebCliConfig = {
//       "isDebug": false,
//       "urls": {
//         "rest": "https:\/\/naxly.wpcomstaging.com\/wp-json\/",
//         "assets": "https:\/\/naxly.wpcomstaging.com\/wp-content\/plugins\/elementor\/assets\/"
//       },
//       "nonce": "828c0631f3",
//       "version": "3.19.2"
//     };
//     var elementorWebCliConfig = {
//       "isDebug": false,
//       "urls": {
//         "rest": "https:\/\/naxly.wpcomstaging.com\/wp-json\/",
//         "assets": "https:\/\/naxly.wpcomstaging.com\/wp-content\/plugins\/elementor\/assets\/"
//       },
//       "nonce": "828c0631f3",
//       "version": "3.19.2"
//     };
//     /* ]]> */
//   </script>
//   <script type="text/javascript"
//     src="https://naxly.wpcomstaging.com/wp-content/plugins/elementor/assets/js/web-cli.min.js?ver=3.19.2"
//     id="elementor-web-cli-js"></script>
//   <script type="text/javascript" id="wp-api-request-js-extra">
//     /* <![CDATA[ */
//     var wpApiSettings = {
//       "root": "https:\/\/naxly.wpcomstaging.com\/wp-json\/",
//       "nonce": "828c0631f3",
//       "versionString": "wp\/v2\/"
//     };
//     /* ]]> */
//   </script>
//   <script type="text/javascript"
//     src="https://naxly.wpcomstaging.com/_static/??wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js,wp-includes/js/api-request.min.js?m=1708258266">
//   </script>
//   <script type="text/javascript" id="elementor-dev-tools-js-before">
//     /* <![CDATA[ */
//     var elementorDevToolsConfig = {
//       "isDebug": false,
//       "urls": {
//         "assets": "https:\/\/naxly.wpcomstaging.com\/wp-content\/plugins\/elementor\/assets\/"
//       },
//       "deprecation": {
//         "soft_notices": [],
//         "soft_version_count": 4,
//         "hard_version_count": 8,
//         "current_version": "3.19.2"
//       }
//     };
//     var elementorDevToolsConfig = {
//       "isDebug": false,
//       "urls": {
//         "assets": "https:\/\/naxly.wpcomstaging.com\/wp-content\/plugins\/elementor\/assets\/"
//       },
//       "deprecation": {
//         "soft_notices": [],
//         "soft_version_count": 4,
//         "hard_version_count": 8,
//         "current_version": "3.19.2"
//       }
//     };
//     var elementorDevToolsConfig = {
//       "isDebug": false,
//       "urls": {
//         "assets": "https:\/\/naxly.wpcomstaging.com\/wp-content\/plugins\/elementor\/assets\/"
//       },
//       "deprecation": {
//         "soft_notices": [],
//         "soft_version_count": 4,
//         "hard_version_count": 8,
//         "current_version": "3.19.2"
//       }
//     };
//     /* ]]> */
//   </script>
//   <script type="text/javascript"
//     src="https://naxly.wpcomstaging.com/wp-content/plugins/elementor/assets/js/dev-tools.min.js?ver=3.19.2"
//     id="elementor-dev-tools-js"></script>
//   <script type="text/javascript" id="elementor-common-js-translations">
//     /* <![CDATA[ */
//     (function(domain, translations) {
//       var localeData = translations.locale_data[domain] || translations.locale_data.messages;
//       localeData[""].domain = domain;
//       wp.i18n.setLocaleData(localeData, domain);
//     })("elementor", {
//       "translation-revision-date": "2023-12-21 11:33:23+0000",
//       "generator": "GlotPress\/4.0.0-beta.2",
//       "domain": "messages",
//       "locale_data": {
//         "messages": {
//           "": {
//             "domain": "messages",
//             "plural-forms": "nplurals=2; plural=n > 1;",
//             "lang": "fr"
//           },
//           "Import Without Enabling": ["Importer sans activer"],
//           "Enable and Import": ["Activer et importer"],
//           "If you do not enable uploading unfiltered files, any SVG or JSON (including lottie) files used in the uploaded template will not be imported.": [
//             "Si vous n\u2019activez pas le t\u00e9l\u00e9versement des fichiers non filtr\u00e9s, tout fichier SVG ou JSON (lottie inclus) utilis\u00e9s dans les mod\u00e8les t\u00e9l\u00e9vers\u00e9s ne seront pas import\u00e9s."
//           ],
//           "The file exceeds the maximum upload size for this site.": [
//             "La taille du fichier d\u00e9passe la limite de t\u00e9l\u00e9versement autoris\u00e9 pour ce site."
//           ],
//           "Uploading...": ["T\u00e9l\u00e9versement\u2026"],
//           "Got it": ["J\u2019ai compris"],
//           "Enable Unfiltered File Uploads": ["Permettre les t\u00e9l\u00e9versements de fichier non filtr\u00e9"],
//           "Unable to connect": ["Impossible de se connecter"],
//           "Before you enable unfiltered files upload, note that such files include a security risk. Elementor does run a process to remove possible malicious code, but there is still risk involved when using such files.": [
//             "Avant d\u2019activer le t\u00e9l\u00e9versement de fichiers non filtr\u00e9s, notez que ce type de fichier comporte un risque de s\u00e9curit\u00e9. Elementor ex\u00e9cute un processus pour supprimer les \u00e9ventuels codes malveillants, mais il y a toujours un risque \u00e0 utiliser ces fichiers."
//           ],
//           "Finder": ["Finder"],
//           "Enable": ["Activer"],
//           "Cancel": ["Annuler"]
//         }
//       },
//       "comment": {
//         "reference": "assets\/js\/common.js"
//       }
//     });
//     /* ]]> */
//   </script>
//   <script type="text/javascript" id="elementor-common-js-before">
//     /* <![CDATA[ */
//     var elementorCommonConfig = {
//       "version": "3.19.2",
//       "isRTL": false,
//       "isDebug": false,
//       "isElementorDebug": false,
//       "activeModules": ["ajax", "finder", "connect", "event-tracker"],
//       "experimentalFeatures": {
//         "e_optimized_assets_loading": true,
//         "e_optimized_css_loading": true,
//         "e_font_icon_svg": true,
//         "additional_custom_breakpoints": true,
//         "container": true,
//         "e_swiper_latest": true,
//         "block_editor_assets_optimize": true,
//         "ai-layout": true,
//         "landing-pages": true,
//         "e_image_loading_optimization": true,
//         "e_global_styleguide": true
//       },
//       "urls": {
//         "assets": "https:\/\/naxly.wpcomstaging.com\/wp-content\/plugins\/elementor\/assets\/",
//         "rest": "https:\/\/naxly.wpcomstaging.com\/wp-json\/"
//       },
//       "filesUpload": {
//         "unfilteredFiles": false
//       },
//       "library_connect": {
//         "is_connected": false,
//         "subscription_plans": {
//           "free": {
//             "label": null,
//             "promotion_url": null,
//             "color": null
//           },
//           "essential": {
//             "label": "Pro",
//             "promotion_url": "https:\/\/elementor.com\/pro\/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=gopro",
//             "color": "#92003B"
//           },
//           "essential-oct2023": {
//             "label": "Advanced",
//             "promotion_url": "https:\/\/elementor.com\/pro\/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=gopro",
//             "color": "#92003B"
//           },
//           "advanced": {
//             "label": "Advanced",
//             "promotion_url": "https:\/\/elementor.com\/pro\/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=gopro",
//             "color": "#92003B"
//           },
//           "expert": {
//             "label": "Expert",
//             "promotion_url": "https:\/\/elementor.com\/pro\/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=gopro",
//             "color": "#92003B"
//           },
//           "agency": {
//             "label": "Agency",
//             "promotion_url": "https:\/\/elementor.com\/pro\/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=gopro",
//             "color": "#92003B"
//           }
//         },
//         "base_access_level": 0,
//         "base_access_tier": "free",
//         "current_access_level": 0,
//         "current_access_tier": "free"
//       },
//       "ajax": {
//         "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin-ajax.php",
//         "nonce": "00cbec3e29"
//       },
//       "finder": {
//         "data": {
//           "edit": {
//             "title": "Modifier",
//             "dynamic": true,
//             "name": "edit"
//           },
//           "general": {
//             "title": "G\u00e9n\u00e9ral",
//             "dynamic": false,
//             "items": {
//               "saved-templates": {
//                 "title": "Mod\u00e8les enregistr\u00e9s",
//                 "icon": "library-save",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=library",
//                 "keywords": ["template", "section", "page", "library"]
//               },
//               "system-info": {
//                 "title": "Informations syst\u00e8me",
//                 "icon": "info-circle-o",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-system-info",
//                 "keywords": ["system", "info", "environment", "elementor"]
//               },
//               "role-manager": {
//                 "title": "Gestionnaire de r\u00f4le",
//                 "icon": "person",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-role-manager",
//                 "keywords": ["role", "manager", "user", "elementor"]
//               },
//               "knowledge-base": {
//                 "title": "Base de connaissances",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=go_knowledge_base_site",
//                 "keywords": ["help", "knowledge", "docs", "elementor"]
//               },
//               "theme-builder": {
//                 "title": "Constructeur de th\u00e8me",
//                 "icon": "library-save",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-app&ver=3.19.2#site-editor\/promotion",
//                 "keywords": ["template", "header", "footer", "single", "archive", "search", "404", "library"]
//               },
//               "kit-library": {
//                 "title": "Biblioth\u00e8que de kits",
//                 "icon": "kit-parts",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-app&ver=3.19.2#\/kit-library",
//                 "keywords": ["kit library", "kit", "library", "site parts", "parts", "assets", "templates"]
//               }
//             },
//             "name": "general"
//           },
//           "create": {
//             "title": "Cr\u00e9er",
//             "dynamic": false,
//             "items": {
//               "page": {
//                 "title": "Ajouter un nouveau mod\u00e8le de page",
//                 "icon": "plus-circle-o",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&template_type=page&_wpnonce=bfd1c4216d",
//                 "keywords": ["Ajouter un nouveau mod\u00e8le de page", "post", "page", "template", "new", "create"]
//               },
//               "section": {
//                 "title": "Ajouter un Section",
//                 "icon": "plus-circle-o",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&template_type=section&_wpnonce=bfd1c4216d",
//                 "keywords": ["Ajouter un Section", "post", "page", "template", "new", "create"]
//               },
//               "container": {
//                 "title": "Ajouter un Conteneur",
//                 "icon": "plus-circle-o",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&template_type=container&_wpnonce=bfd1c4216d",
//                 "keywords": ["Ajouter un Conteneur", "post", "page", "template", "new", "create"]
//               },
//               "wp-post": {
//                 "title": "Ajouter un Article",
//                 "icon": "plus-circle-o",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=post&template_type=wp-post&_wpnonce=bfd1c4216d",
//                 "keywords": ["Ajouter un Article", "post", "page", "template", "new", "create"]
//               },
//               "wp-page": {
//                 "title": "Ajouter un Page",
//                 "icon": "plus-circle-o",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=page&template_type=wp-page&_wpnonce=bfd1c4216d",
//                 "keywords": ["Ajouter un Page", "post", "page", "template", "new", "create"]
//               },
//               "landing-page": {
//                 "title": "Ajouter un Page d\u2019atterrissage",
//                 "icon": "plus-circle-o",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=e-landing-page&template_type=landing-page&_wpnonce=bfd1c4216d#library",
//                 "keywords": ["Ajouter un Page d\u2019atterrissage", "post", "page", "template", "new", "create"]
//               }
//             },
//             "name": "create"
//           },
//           "site": {
//             "title": "Site",
//             "dynamic": false,
//             "items": {
//               "homepage": {
//                 "title": "Page d\u2019accueil",
//                 "url": "https:\/\/naxly.wpcomstaging.com",
//                 "icon": "home-heart",
//                 "keywords": ["home", "page"]
//               },
//               "wordpress-dashboard": {
//                 "title": "Tableau de bord",
//                 "icon": "dashboard",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/",
//                 "keywords": ["dashboard", "wordpress"]
//               },
//               "wordpress-menus": {
//                 "title": "Menus",
//                 "icon": "wordpress",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/nav-menus.php",
//                 "keywords": ["menu", "wordpress"]
//               },
//               "wordpress-themes": {
//                 "title": "Th\u00e8mes",
//                 "icon": "wordpress",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/themes.php",
//                 "keywords": ["themes", "wordpress"]
//               },
//               "wordpress-customizer": {
//                 "title": "Outil de personnalisation",
//                 "icon": "wordpress",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/customize.php",
//                 "keywords": ["customizer", "wordpress"]
//               },
//               "wordpress-plugins": {
//                 "title": "Extensions",
//                 "icon": "wordpress",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/plugins.php",
//                 "keywords": ["plugins", "wordpress"]
//               },
//               "wordpress-users": {
//                 "title": "Utilisateurs\/utilisatrices",
//                 "icon": "wordpress",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/users.php",
//                 "keywords": ["users", "profile", "wordpress"]
//               },
//               "apps": {
//                 "title": "Apps",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-apps",
//                 "icon": "apps",
//                 "keywords": ["apps", "addon", "plugin", "extension", "integration"]
//               }
//             },
//             "name": "site"
//           },
//           "settings": {
//             "title": "R\u00e9glages",
//             "dynamic": false,
//             "items": {
//               "general-settings": {
//                 "title": "R\u00e9glages g\u00e9n\u00e9raux",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor",
//                 "keywords": ["general", "settings", "elementor"]
//               },
//               "advanced": {
//                 "title": "Avanc\u00e9",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor#tab-advanced",
//                 "keywords": ["advanced", "settings", "elementor"]
//               },
//               "experiments": {
//                 "title": "Exp\u00e9riences",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor#tab-experiments",
//                 "keywords": ["settings", "elementor", "experiments"]
//               },
//               "features": {
//                 "title": "Fonctionnalit\u00e9s",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor#tab-experiments",
//                 "keywords": ["settings", "elementor", "features"]
//               },
//               "element-manager": {
//                 "title": "Element Manager",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-element-manager",
//                 "keywords": ["settings", "elements", "widgets", "manager"]
//               }
//             },
//             "name": "settings"
//           },
//           "tools": {
//             "title": "Outils",
//             "dynamic": false,
//             "items": {
//               "tools": {
//                 "title": "Outils",
//                 "icon": "tools",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-tools",
//                 "keywords": ["tools", "regenerate css", "safe mode", "debug bar", "sync library", "elementor"]
//               },
//               "replace-url": {
//                 "title": "Remplacement d\u2019URL",
//                 "icon": "tools",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-tools#tab-replace_url",
//                 "keywords": ["tools", "replace url", "domain", "elementor"]
//               },
//               "maintenance-mode": {
//                 "title": "Mode maintenance",
//                 "icon": "tools",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-tools#tab-maintenance_mode",
//                 "keywords": ["tools", "maintenance", "coming soon", "elementor"]
//               },
//               "import-export": {
//                 "title": "Importer exporter",
//                 "icon": "import-export",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-tools#tab-import-export-kit",
//                 "keywords": ["tools", "import export", "import", "export", "kit"]
//               },
//               "version-control": {
//                 "title": "Contr\u00f4le de version",
//                 "icon": "time-line",
//                 "url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-tools#tab-versions",
//                 "keywords": ["tools", "version", "control", "rollback", "beta", "elementor"]
//               }
//             },
//             "name": "tools"
//           }
//         }
//       },
//       "connect": [],
//       "event-tracker": {
//         "isUserDataShared": false
//       }
//     };
//     /* ]]> */
//   </script>
//   <script type="text/javascript"
//     src="https://naxly.wpcomstaging.com/wp-content/plugins/elementor/assets/js/common.min.js?ver=3.19.2"
//     id="elementor-common-js"></script>
//   <script type="text/javascript" id="elementor-app-loader-js-before">
//     /* <![CDATA[ */
//     var elementorAppConfig = {
//       "menu_url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-app&ver=3.19.2#site-editor\/promotion",
//       "assets_url": "https:\/\/naxly.wpcomstaging.com\/wp-content\/plugins\/elementor\/assets\/",
//       "pages_url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/edit.php?post_type=page",
//       "return_url": "https:\/\/naxly.wpcomstaging.com\/home-onepage\/",
//       "hasPro": false,
//       "admin_url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/",
//       "login_url": "https:\/\/naxly.wpcomstaging.com\/wp-login.php",
//       "base_url": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-app&ver=3.19.2",
//       "site-editor": [],
//       "import-export": [],
//       "kit-library": [],
//       "onboarding": []
//     };
//     /* ]]> */
//   </script>
//   <script type="text/javascript"
//     src="https://naxly.wpcomstaging.com/wp-content/plugins/elementor/assets/js/app-loader.min.js?ver=3.19.2"
//     id="elementor-app-loader-js"></script>
//   <script type="text/javascript"
//     src="https://s0.wp.com/wp-content/mu-plugins/notes/notes-common-lite.min.js?ver=13.2-a.7-202408-lite"
//     id="wpcom-notes-common-js"></script>
//   <script type="text/javascript"
//     src="https://s0.wp.com/wp-content/mu-plugins/notes/admin-bar-v2.js?ver=13.2-a.7-202408-lite"
//     id="wpcom-notes-admin-bar-js"></script>
//   <script type="text/javascript"
//     src="https://naxly.wpcomstaging.com/_static/??-eJyVjEEKgzAQRS+kmSpU3ZSeJepUxmYmIZMQvH1FpGvd/Qf/vRLqyUtCSRBcXkgU0CHv7CNYVUwKq0LBMdjpa2KWRIyGScyqVblmf+Jxmmv2c3aod3RHIxS7BU+y03+diTe/mv4xtM+h7bofvV9NZQ==">
//   </script>
//   <script type="text/javascript" id="elementor-frontend-js-before">
//     /* <![CDATA[ */
//     var elementorFrontendConfig = {
//       "environmentMode": {
//         "edit": false,
//         "wpPreview": false,
//         "isScriptDebug": false
//       },
//       "i18n": {
//         "shareOnFacebook": "Partager sur Facebook",
//         "shareOnTwitter": "Partager sur Twitter",
//         "pinIt": "L\u2019\u00e9pingler",
//         "download": "T\u00e9l\u00e9charger",
//         "downloadImage": "T\u00e9l\u00e9charger une image",
//         "fullscreen": "Plein \u00e9cran",
//         "zoom": "Zoom",
//         "share": "Partager",
//         "playVideo": "Lire la vid\u00e9o",
//         "previous": "Pr\u00e9c\u00e9dent",
//         "next": "Suivant",
//         "close": "Fermer",
//         "a11yCarouselWrapperAriaLabel": "Carousel | Scroll horizontal: Fl\u00e8che gauche & droite",
//         "a11yCarouselPrevSlideMessage": "Diapositive pr\u00e9c\u00e9dente",
//         "a11yCarouselNextSlideMessage": "Diapositive suivante",
//         "a11yCarouselFirstSlideMessage": "Ceci est la premi\u00e8re diapositive",
//         "a11yCarouselLastSlideMessage": "Ceci est la derni\u00e8re diapositive",
//         "a11yCarouselPaginationBulletMessage": "Aller \u00e0 la diapositive"
//       },
//       "is_rtl": false,
//       "breakpoints": {
//         "xs": 0,
//         "sm": 480,
//         "md": 768,
//         "lg": 1025,
//         "xl": 1440,
//         "xxl": 1600
//       },
//       "responsive": {
//         "breakpoints": {
//           "mobile": {
//             "label": "Portrait mobile",
//             "value": 767,
//             "default_value": 767,
//             "direction": "max",
//             "is_enabled": true
//           },
//           "mobile_extra": {
//             "label": "Mobile Paysage",
//             "value": 880,
//             "default_value": 880,
//             "direction": "max",
//             "is_enabled": false
//           },
//           "tablet": {
//             "label": "Tablette en mode portrait",
//             "value": 1024,
//             "default_value": 1024,
//             "direction": "max",
//             "is_enabled": true
//           },
//           "tablet_extra": {
//             "label": "Tablette en mode paysage",
//             "value": 1200,
//             "default_value": 1200,
//             "direction": "max",
//             "is_enabled": false
//           },
//           "laptop": {
//             "label": "Portable",
//             "value": 1366,
//             "default_value": 1366,
//             "direction": "max",
//             "is_enabled": false
//           },
//           "widescreen": {
//             "label": "\u00c9cran large",
//             "value": 2400,
//             "default_value": 2400,
//             "direction": "min",
//             "is_enabled": false
//           }
//         }
//       },
//       "version": "3.19.2",
//       "is_static": false,
//       "experimentalFeatures": {
//         "e_optimized_assets_loading": true,
//         "e_optimized_css_loading": true,
//         "e_font_icon_svg": true,
//         "additional_custom_breakpoints": true,
//         "container": true,
//         "e_swiper_latest": true,
//         "block_editor_assets_optimize": true,
//         "ai-layout": true,
//         "landing-pages": true,
//         "e_image_loading_optimization": true,
//         "e_global_styleguide": true
//       },
//       "urls": {
//         "assets": "https:\/\/naxly.wpcomstaging.com\/wp-content\/plugins\/elementor\/assets\/"
//       },
//       "swiperClass": "swiper",
//       "settings": {
//         "page": [],
//         "editorPreferences": []
//       },
//       "kit": {
//         "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
//         "global_image_lightbox": "yes",
//         "lightbox_enable_counter": "yes",
//         "lightbox_enable_fullscreen": "yes",
//         "lightbox_enable_zoom": "yes",
//         "lightbox_enable_share": "yes",
//         "lightbox_title_src": "title",
//         "lightbox_description_src": "description"
//       },
//       "post": {
//         "id": 115,
//         "title": "Artificial%20intelligence%20%E2%80%93%20Titre%20du%20site",
//         "excerpt": "",
//         "featuredImage": false
//       },
//       "user": {
//         "roles": ["administrator"]
//       }
//     };
//     /* ]]> */
//   </script>
//   <script type="text/javascript"
//     src="https://naxly.wpcomstaging.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.19.2"
//     id="elementor-frontend-js"></script><span id="elementor-device-mode" class="elementor-screen-only"></span>
//   <script type="text/javascript" id="elementor-admin-bar-js-before">
//     /* <![CDATA[ */
//     var elementorAdminBarConfig = {
//       "elementor_edit_page": {
//         "id": "elementor_edit_page",
//         "title": "Modifier avec Elementor",
//         "href": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/post.php?post=115&action=elementor",
//         "children": {
//           "116": {
//             "id": "elementor_site_settings",
//             "title": "R\u00e9glages du site",
//             "sub_title": "Site",
//             "href": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/post.php?post=115&action=elementor&active-document=9",
//             "class": "elementor-site-settings",
//             "parent_class": "elementor-second-section"
//           },
//           "117": {
//             "id": "elementor_app_site_editor",
//             "title": "Constructeur de th\u00e8me",
//             "sub_title": "Site",
//             "href": "https:\/\/naxly.wpcomstaging.com\/wp-admin\/admin.php?page=elementor-app&ver=3.19.2#site-editor\/promotion",
//             "class": "elementor-app-link",
//             "parent_class": "elementor-second-section"
//           }
//         }
//       }
//     };
//     /* ]]> */
//   </script>
//   <script type="text/javascript"
//     src="https://naxly.wpcomstaging.com/wp-content/plugins/elementor/assets/js/elementor-admin-bar.min.js?ver=3.19.2"
//     id="elementor-admin-bar-js"></script>

//   <div id="wpadminbar" class="nojq">
//     <a class="screen-reader-shortcut" href="#wp-toolbar" tabindex="1">Aller à la barre d’outils</a>
//     <div class="quicklinks" id="wp-toolbar" role="navigation" aria-label="Barre d’outils">
//       <ul id="wp-admin-bar-root-default" class="ab-top-menu ab-top-menu">
//         <li id="wp-admin-bar-blog" class="menupop my-sites mb-trackable"><a class="ab-item" aria-haspopup="true"
//             href="https://wordpress.com/sites/naxly.wpcomstaging.com">Mon site</a>
//           <div class="ab-sub-wrapper"></div>
//         </li>
//         <li id="wp-admin-bar-newdash" class="mb-trackable"><a class="ab-item"
//             href="https://wordpress.com/read">Lecteur</a></li>
//         <li id="wp-admin-bar-elementor_edit_page" class="menupop"><a aria-haspopup="true" class="ab-item  "
//             href="https://naxly.wpcomstaging.com/wp-admin/post.php?post=115&amp;action=elementor"><span
//               class="elementor-edit-link-title">Modifier avec Elementor</span></a>
//           <div class="ab-sub-wrapper">
//             <ul class="ab-submenu" id="wp-admin-bar-elementor_edit_page-default">
//               <li id="wp-admin-bar-elementor_site_settings" class="elementor-second-section"><a
//                   class="ab-item  elementor-site-settings"
//                   href="https://naxly.wpcomstaging.com/wp-admin/post.php?post=115&amp;action=elementor&amp;active-document=9"><span
//                     class="elementor-edit-link-title">Réglages du site</span><span
//                     class="elementor-edit-link-type">Site</span></a></li>
//               <li id="wp-admin-bar-elementor_app_site_editor" class="elementor-second-section"><a
//                   class="ab-item  elementor-app-link"
//                   href="https://naxly.wpcomstaging.com/wp-admin/admin.php?page=elementor-app&amp;ver=3.19.2#site-editor/promotion"><span
//                     class="elementor-edit-link-title">Constructeur de thème</span><span
//                     class="elementor-edit-link-type">Site</span></a></li>
//             </ul>
//           </div>
//         </li>
//       </ul>
//       <ul id="wp-admin-bar-top-secondary" class="ab-top-secondary ab-top-menu">
//         <li id="wp-admin-bar-notes" class="menupop mb-trackable"><a class="ab-item"
//             href="https://wordpress.com/notifications"><span id="wpnt-notes-unread-count"
//               class="wpnt-loading wpn-read"></span>
//             <span class="screen-reader-text">Notifications</span>
//             <span class="noticon noticon-bell"></span></a>
//           <div id="wpnt-notes-panel2" style="display:none" lang="fr" dir="ltr" class="wide"><iframe style=""
//               id="wpnt-notes-iframe2" frameborder="0" allowtransparency="true" scrolling="yes"
//               src="https://widgets.wp.com/notifications/?jetpack=true&amp;v=none&amp;locale=fr#https://naxly.wpcomstaging.com/artificial-intelligence/&amp;lang=fr"
//               class="wide intrinsic-ignore"></iframe></div>
//         </li>
//         <li id="wp-admin-bar-my-account" class="with-avatar mb-trackable"><a class="ab-item"
//             href="https://wordpress.com/me"><img alt=""
//               src="https://secure.gravatar.com/avatar/75cc51515eb3e1648997c7c6d44cff64?s=32&amp;d=mm&amp;r=g"
//               srcset="https://secure.gravatar.com/avatar/75cc51515eb3e1648997c7c6d44cff64?s=64&amp;d=mm&amp;r=g 2x"
//               class="avatar avatar-32 photo" height="32" width="32" decoding="async"><span
//               class="ab-text">Moi</span></a></li>
//         <li id="wp-admin-bar-ab-new-post" class="mb-trackable"><a class="ab-item"
//             href="https://naxly.wpcomstaging.com/wp-admin/post-new.php"><span>Écrire</span></a></li>
//       </ul>
//     </div>
//     <a class="screen-reader-shortcut"
//       href="https://naxly.wpcomstaging.com/wp-login.php?action=logout&amp;_wpnonce=c5858febe8">Se déconnecter</a>
//   </div>

//   <iframe style="display:none" class="jetpack-notes-cookie-check"
//     src="https://widgets.wp.com/3rd-party-cookie-check/index.html"></iframe>
//   <script src="https://naxly.wpcomstaging.com/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js?ver=4.9.0">
//   </script>
//   <script
//     src="https://naxly.wpcomstaging.com/wp-content/plugins/elementor/assets/lib/share-link/share-link.min.js?ver=3.19.2">
//   </script><svg style="display: none;" class="e-font-icon-svg-symbols"></svg>
// </main>
// )
// }

// export default IndexPage

// export const Head = () => <title>Home Page</title>