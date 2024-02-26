import React, { useEffect, useRef, useState } from 'react'
import ServiceCard from '../Components/Cards/ServiceCard'
import Slider from "react-slick";

const Service = () => {
    const [width,setWidth]=useState('270px')
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

    
  
    const slides = [
      { title: 'Mac', description: 'Simple & easy distinguish in a ...', icon: 'icon flaticon-data' },
      { title: 'Dat', description: 'Any right to find fault with ...', icon: 'icon flaticon-brain' },
      { title: 'Cus', description: 'Beguiled & demoralized by the  ...', icon: 'icon flaticon-vr' },
       { title: 'Mac', description: 'Simple & easy distinguish in a ...', icon: 'icon flaticon-data' },
      { title: 'Kaw', description: 'Any right to find fault with ...', icon: 'icon flaticon-brain' },
      { title: 'Aym', description: 'Beguiled & demoralized by the  ...', icon: 'icon flaticon-vr' },
    
    ];
  
    let sliderRef = useRef(null);

    const goToPrevious = () => {
        sliderRef.slickNext();
    };
  
    const goToNext = () => {
        sliderRef.slickPrev();
    };
return (
<section
class="elementor-section elementor-top-section elementor-element elementor-element-3ac182f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
    data-id="3ac182f" data-element_type="section">

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b1d08b6"
            data-id="b1d08b6" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-1930b72 elementor-widget elementor-widget-naxly_our_services_v1"
                    data-id="1930b72" data-element_type="widget" data-widget_type="naxly_our_services_v1.default">
                    <div class="elementor-widget-container">

                        <section class="service-style-two">
                            <div class="pattern-layer"
                            style={{backgroundImage:' url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-13.png)'}}
                            >
                            </div>
                            <figure class="image-layer"><img decoding="async"
                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/illastration-2.png?w=525&amp;ssl=1"
                                    alt="Awesome Image" width="525" height="823"/></figure>
                            <div class="auto-container">
                                <div class="row clearfix">
                                    <div class="col-xl-9 col-lg-12 col-md-12 inner-column">
                                        <div class="inner-content">
                                            <div class="sec-title text-center light">
                                                <p>Our Services</p>
                                                <h2>Services we offer for you</h2>
                                                <div class="decor"
                                                style={{backgroundImage:' url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-4.png)'}}
                                                >
                                                </div>
                                            </div>
                                            <div
                                                class="service-carousel owl-carousel owl-theme owl-dots-none nav-style-one owl-loaded owl-drag  ">

                                                <div class="owl-stage-outer">
                                                    <div class="owl-stage "
                                                    style={{transition:'all 3s ease 0s'}}
                                                    >
                                             
                                                <Slider {...settings} ref={slider => { sliderRef = slider}}>
                                               
                                              
                                                               {slides.map((slideItem, slideIndex) => (
                                                               <>
                                                               <ServiceCard  key={slideIndex} slide={slideItem}  />                                                             
                                                               </>
                                                              
                                                          
                                                           )
                                                       )}
                                                </Slider>
                                                


 
                                                        
                                                      
                                                    </div>
                                                </div>
                                                <div class="owl-nav disabled">
        <div class="owl-prev" onClick={goToPrevious}><span class=""></span></div>
        <div class="owl-next" onClick={goToNext}><span class=""></span></div>
      </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
)
}

export default Service