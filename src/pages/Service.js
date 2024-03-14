import React, {  useRef, useState } from 'react'
import ServiceCard from '../Components/Cards/ServiceCard'
import Slider from "react-slick";
import  illustration from  "../images/resource/illastration-2.png"
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
className="elementor-section elementor-top-section elementor-element elementor-element-3ac182f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
    data-id="3ac182f" data-element_type="section">

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b1d08b6"
            data-id="b1d08b6" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-1930b72 elementor-widget elementor-widget-naxly_our_services_v1"
                    data-id="1930b72" data-element_type="widget" data-widget_type="naxly_our_services_v1.default">
                    <div className="elementor-widget-container">

                        <section className="service-style-two">
                            <div className="pattern-layer"

                            >
                            </div>
                            <figure className="image-layer"><img decoding="async"
                                    src={illustration}
                                    alt="Awesome Image" width="525" height="823"/></figure>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-xl-9 col-lg-12 col-md-12 inner-column">
                                        <div className="inner-content">
                                            <div className="sec-title text-center light">
                                                <p>Our Services</p>
                                                <h2>Services we offer for you</h2>
                                                <div className="decor"
                                              >
                                                </div>
                                            </div>
                                            <div
                                                className="service-carousel owl-carousel owl-theme owl-dots-none nav-style-one owl-loaded owl-drag  ">

                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage "
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
                                                <div className="owl-nav disabled">
        <div className="owl-prev" onClick={goToPrevious}><span className=""></span></div>
        <div className="owl-next" onClick={goToNext}><span className=""></span></div>
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
