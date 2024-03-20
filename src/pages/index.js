import React, {useContext} from 'react'


import Subscribe from './Subscribe'
import About from './About'
import Service from './Service'
import LatestProject from './LatestProject'
import Work from './Work'
import ChooseUs from './ChooseUs'
import Testimonials from './Testimonials'
import NewsUpdate from './NewsUpdate'
import Clients from './Clients'
import Contact1 from './Contact1'
import Footer from './Footer'
import ChooseUs1  from './ChooseUs1'
import PricePlan  from './PricePlan'
import Welcom  from './Welcom'
import  ContactUs  from './ContactUs'
import  ChooseUs2  from './ChooseUs2'
import News from './News'
import About1 from './About1'
import Skill from './Skill'
import Statistic from './Statistic'
import Testimonials1 from './Testimonials1'
import MobileAppProcess from './MobileAppProcess'
import Header1 from './Header1'
import MainPage1 from "./MainPage1";
import Mobile from "./Mobile";
import ClickContext from "../Context/Context";


const IndexPage = () => {
    const {  click } = useContext(ClickContext);
    const mobile="mobile-menu-visible"
    return (

        <div className={`${click ? `home page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-1469 logged-in admin-bar wp-custom-logo menu-layer
    elementor-default elementor-kit-9 elementor-page elementor-page-1469 dialog-body dialog-buttons-body dialog-container 
    dialog-buttons-container customize-support e--ua-firefox ${mobile}`:'home page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-1469 logged-in admin-bar wp-custom-logo menu-layer elementor-default elementor-kit-9 elementor-page elementor-page-1469 dialog-body dialog-buttons-body dialog-container  dialog-buttons-container customize-support e--ua-firefox'} `}
             data-elementor-device-mode="desktop"
             style={{ overflow: 'visible' }}
        >
<div className="n-stan">

<Header1/>
    <Mobile/>
<div className="elementor elementor-115" data-elementor-type="wp-page" data-elementor-id="115">

<MainPage1/>
<Subscribe/>

<About/>
<About1/>
<Service/>
<LatestProject/>
<Work/>
<ChooseUs/>
<ChooseUs1/>
<ChooseUs2/>
<PricePlan/>
<Welcom/>
<Testimonials/>
<Testimonials1/>
{/*<MobileAppProcess/>*/}
<Statistic/>
<NewsUpdate/>
<News/>
<Skill/>
<Clients/>
<ContactUs/>
<Contact1/>

<Footer/>
</div>
</div>
   </div>

  )
}

export default IndexPage
export const Head = () => <>
<title>Home Page</title>

</>
