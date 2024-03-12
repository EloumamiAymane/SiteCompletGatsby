import React from 'react'
import  shape12 from "../images/shape/shape-12.png"
import decor1 from "../images/icons/decor-1.png"
import about from "../images/resource/about.png"
const About = () => {
return (
<section class="elementor-section elementor-top-section elementor-element elementor-element-7ba2a33 elementor-section-full_width elementor-section-height-default elementor-section-height-default">

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b295bf3"
            data-id="b295bf3" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-a005400 elementor-widget elementor-widget-naxly_about_company_v2"
                    data-id="a005400" data-element_type="widget" data-widget_type="naxly_about_company_v2.default">
                    <div class="elementor-widget-container">

                        <section class="about-style-two">
                            <div class="auto-container">
                                <div class="row clearfix">
                                    <div class="col-lg-7 col-md-12 col-sm-12 image-column">
                                        <div id="image_block_01">
                                            <div class="image-box wow slideInLeft animated" data-wow-delay="00ms"
                                                data-wow-duration="1500ms"
                                                style={{visibility:'visible',animationDuration:'1500ms',animationDelay:'0ms',animationName:'slideInLeft'}}>
                                                <div class="pattern-layer"

                                                >
                                                </div>
                                                <figure class="image js-tilt" style={{willChange:'transform'}}><img
                                                        decoding="async"
                                                        src={about}
                                                        alt="Awesome Image" width="615" height="504"/>
                                                    <div class="js-tilt-glare"
                                                    style={{position:'absolute',top:'0px',left:'0px',width:'100%',height:'100%',overflow:'hidden'}}
                                                        >
                                                        <div class="js-tilt-glare-inner"
                                                         style={{position:'absolute',top:'50%',left:'50%',pointerEvents:'none',backgroundImage:'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)',width:'1041.47px',height:'1041.47px',transform:' rotate(180deg) translate(-50%, -50%)',transformOrigin:'0% 0% 0px',opacity:'0'}}
                                                            >
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-12 col-sm-12 content-column">
                                        <div id="content_block_03">
                                            <div class="content-box">
                                                <div class="sec-title style-two text-left">
                                                    <p>About Company</p>
                                                    <h2>Mission is to bring the power of AI to every business</h2>
                                                    <div class="decor"
                                                    style={{backgroundImage:' url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png)'}}
                                                      >
                                                    </div>
                                                </div>
                                                <div class="text">
                                                    <p>To take a trivial example, which of us ever undertakes laborious
                                                        physical exercise, except to obtain some advantage from it but
                                                        right to find fault with a man who chooses enjoy.</p>
                                                </div>
                                                <div class="lower-box">
                                                    <div class="icon-box">
                                                        <div class="bg-box"
                                                        style={{backgroundImage:'url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/icon-bg-3.png)'}}
                                                        >
                                                        </div>
                                                        <i class="icon flaticon-brain-2" style={{WebkitBackgroundClip:'text'}} ></i>
                                                    </div>
                                                    <h5>Impressive Works Since 2010</h5>
                                                    <a href="http://el.commonsupport.com/newwp/naxly/about-company/"><i
                                                            class="flaticon-next"></i>More About Us</a>
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

export default About
