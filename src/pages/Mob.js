import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import './Slider.css'
import CardMobile from '../Components/Cards/CardMobile';
const Mob = () => {
    const settings = {
        dots:true,
       
        infinite: true,
        slidesToShow: 11,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 11,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 11,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 11,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 11,
                slidesToScroll: 1
              }
            },
           
          ],
        
      };
     

      const [widthh, setWidth] = useState("3762");
      const [transform, setTransform] = useState(" translate3d(-1032px, 0px, 0px)");
//   useEffect(() => {
//     const handleResize = () => {
//         if (window.innerWidth < 602 ) {
//         setWidth("300");
//         setTransform("")
//         console.log("yes")
//     }
//     else {
//         setTransform(" translate3d(-1032px, 0px, 0px)")
//         setWidth("3762");
//     }
// }

//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }  , []);

return (
<div>

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0ad6c3d"
            data-id="0ad6c3d" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-29f68e5 elementor-widget elementor-widget-naxly_tk_app_screenshot"
                    data-id="29f68e5" data-element_type="widget" data-widget_type="naxly_tk_app_screenshot.default">
                    <div class="elementor-widget-container">

                        <section class="app-screenshot-area">
                            <div class="outer-container">

                                <div class="carousel-container">
                                    <div class="carousel-outer">

                                        <div
                                            class="screenshot-carousel owl-carousel owl-theme style1 owl-loaded owl-drag">

                                            <div class="owl-stage-outer">
                                            
                                                <div class="owl-stage" 
                                                style={{transition:' all 1s ease 0s', width:`${widthh}px`, transform:`${transform}`}}
                                                  >
                                                    <Slider  {...settings}> 
                                                    <CardMobile/>
                                                    <CardMobile/>
                                                    <CardMobile/>
                                                    <CardMobile/>
                                                    <CardMobile/>
                                                    <CardMobile/>
                                                    <CardMobile/>
                                                    <CardMobile/>
                                                    <CardMobile/>
                                                    <CardMobile/>
                                                    <CardMobile/>
{/*                                                     
                                                    <div class="owl-item cloned"
                                                    style={{width:' 322px', marginRight: '20px'}}
                                                     >
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot3.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item cloned"
                                                        style={{width:' 322px', marginRight: '20px'}}>
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot4.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item cloned"
                                                        style={{width:' 322px', marginRight: '20px'}}>
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot5.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item active center"
                                                        style={{width:' 322px', marginRight: '20px'}}>
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot1.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item"  style={{width:' 322px', marginRight: '20px'}}>
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot2.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item"  style={{width:' 322px', marginRight: '20px'}}>
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot3.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item"  style={{width:' 322px', marginRight: '20px'}}>
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot4.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item"  style={{width:' 322px', marginRight: '20px'}}>
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot5.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item cloned"
                                                        style={{width:' 322px', marginRight: '20px'}}>
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot1.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item cloned"
                                                        style={{width:' 322px', marginRight: '20px'}}>
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot2.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item cloned"
                                                        style={{width:' 322px', marginRight: '20px'}}>
                                                        <div class="single-item">
                                                            <div class="img-holder">
                                                                <img decoding="async"
                                                                    src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/app-screen-shot3.png?w=525&amp;ssl=1"
                                                                    alt="Awesome Image" width="322" height="620"/>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                      </Slider>
                                                </div>
                                                
                                            </div>
                                            
                                           
                                            <div class="owl-dots" style={{visibility:'hidden'}}>
                                                <div class="owl-dot active"><span></span></div>
                                                <div class="owl-dot"><span></span></div>
                                                <div class="owl-dot"><span></span></div>
                                                <div class="owl-dot"><span></span></div>
                                                <div class="owl-dot"><span></span></div>
                                                
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

</div>
)
}

export default Mob
