import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';
import CardProject from '../Components/Cards/CardProject';

const LatestProject = () => {
    const [sliderStyle, setSliderStyle] = useState({
        width: '370px',
        left: '0%'
      });
    const projetcs = [
        { title: 'Invoice data capture', photo: 'https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?resize=370%2C340&amp;ssl=1' },
        { title: 'Automate feedback Analysis', photo: 'https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=370%2C340&amp;ssl=1' },
        { title: 'Big data processing', photo: 'https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?resize=370%2C340&amp;ssl=1'},
         { title: 'Invoice data capture', photo: 'https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=370%2C340&amp;ssl=1' },
        { title: 'Automate feedback Analysis', photo: 'https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-2.jpg?resize=370%2C340&amp;ssl=1' },
        { title: 'Big data processing', photo: 'https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-3.jpg?resize=370%2C340&amp;ssl=1'},
      
      ];


      let sliderRef = useRef(null);
      const goToPrevious = () => {
        // console.log(sliderRef)
          sliderRef.slickNext();
      };
    
      const goToNext = () => {
        console.log(sliderRef)
          sliderRef.slickPrev();
      };

      const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1152,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 834,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 608,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
      });
      useEffect(() => {
        const handleResize = () => {
           
          if (window.innerWidth < 1152 && window.innerWidth > 834) {
            setSettings(prevSettings => ({
              ...prevSettings,
              slidesToShow: 2,
              slidesToScroll: 2
            }));
            setSliderStyle(prevStyle => ({
                
                width: '400px',
                left:'0%'
              }));
           
        }   else if (window.innerWidth <= 834 && window.innerWidth >608) {
                setSettings(prevSettings => ({
                  ...prevSettings,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }));
                setSliderStyle(prevStyle => ({
                
                    width: '500px',
                    left:'12%'
                  }));
              }
              else if (window.innerWidth <= 608) {
                setSettings(prevSettings => ({
                  ...prevSettings,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }));
                setSliderStyle(prevStyle => ({
                
                    width: '200px',
                    left:'22%'
                  }));
              }
             
          else {
            setSettings(prevSettings => ({
              ...prevSettings,
              slidesToShow: 3,
              slidesToScroll: 1
            }));
          
          }
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Call handleResize initially to set initial settings based on window size
        handleResize();
    
        // Remove event listener when component unmounts
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    

return (
<section class="elementor-section elementor-top-section elementor-element elementor-element-a6f5114 elementor-section-full_width elementor-section-height-default elementor-section-height-default">

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fb1c4ae"
            data-id="fb1c4ae" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-6d3dce6 elementor-widget elementor-widget-naxly_case_studies_v2"
                    data-id="6d3dce6" data-element_type="widget" data-widget_type="naxly_case_studies_v2.default">
                    <div class="elementor-widget-container">

                        <section class="case-style-two">
                            <div class="auto-container">
                                <div class="top-inner clearfix">
                                    <div class="sec-title style-two text-left pull-left">
                                        <p>Case Studies</p>
                                        <h2>Latest from our projects</h2>
                                        <div class="decor"
                                        style={{backgroundImage:' url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png)'}}
                                         >
                                        </div>
                                    </div>
                                    <div class="btn-box pull-right">
                                        <a href="http://el.commonsupport.com/newwp/naxly/project-2-columns/"
                                            class="theme-btn style-five"><i class="flaticon-next"></i>All Projects</a>
                                    </div>
                                </div>
                                <div
                                    class="three-item-carousel owl-carousel owl-theme owl-nav-none owl-loaded owl-drag">

                                    <div class="owl-stage-outer">
                                        <div class="owl-stage"
                                        style={{transform:'translate3d(0px, 0px, 0px)',transition:'all 0s ease 0'}}
                                           >
                                        <Slider {...settings} ref={slider => { sliderRef = slider}}>
                                               
                                              
                                               {projetcs.map((slideItem, slideIndex) => (
                                               <>
                                               <CardProject  key={slideIndex} slide={slideItem} sTyle={sliderStyle}  />
                                              
                                               </>
                                              
                                          
                                           )
                                       )}
                                </Slider>
                                        </div>
                                    </div>
                                    <div class="owl-nav">
                                        <div class="owl-prev"><span class="flaticon-left"></span></div>
                                        <div class="owl-next"><span class="flaticon-arrow"></span></div>
                                    </div>
                                    <div class="owl-dots">
                                        <div class="owl-dot" onClick={goToNext}><span></span></div>
                                        <div class="owl-dot active" onClick={goToPrevious}><span></span></div>
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

export default LatestProject