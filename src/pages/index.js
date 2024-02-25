import React from 'react'

import MainPage from './MainPage'
import Header from './Header'
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
import ServiceAll from './ServiceAll'
import MainPage1 from './MainPage1'
import { ChooseUs1 } from './ChooseUs1'
import { PricePlan } from './PricePlan'
import { Welcom } from './Welcom'
import { ContactUs } from './ContactUs'
import MainPage2 from './MainPage2'
import { ChooseUs2 } from './ChooseUs2'
import News from './News'
import MainPage3 from './MainPage3'
import About1 from './About1'
import Skill from './Skill'
import Statistic from './Statistic'
import Testimonials1 from './Testimonials1'
import MobileAppProcess from './MobileAppProcess'

const IndexPage = () => {
  return (
   <div class="page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-115 logged-in admin-bar wp-custom-logo menu-layer elementor-default elementor-kit-9 elementor-page elementor-page-115 dialog-body dialog-buttons-body dialog-container dialog-buttons-container customize-support e--ua-firefox"
  style={{overflow:'visible'}} data-elementor-device-mode="desktop">
<div class="n-stan">
<Header/>

<div class="elementor elementor-115" data-elementor-type="wp-page" data-elementor-id="115">
{/* <MainPage/> */}
{/* <MainPage1/> */}
<MainPage2/>
{/* <MainPage3/> */}
<Subscribe/>

<About/>
<About1/>
<Service/>
{/* <ServiceAll/> */}
<LatestProject/>
<Work/>
<ChooseUs/>
<ChooseUs1/>
<ChooseUs2/>
<PricePlan/>
<Welcom/>
<Testimonials/>
<Testimonials1/>
<MobileAppProcess/>
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