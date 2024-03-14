import React, {useRef} from 'react'

import about from "../images/resource/about.png"
import {motion, useInView} from "framer-motion";

const About = () => {

    const ref = useRef(null)
    const isVisible = useInView(ref)

return (
<section className="elementor-section elementor-top-section elementor-element elementor-element-7ba2a33 elementor-section-full_width elementor-section-height-default elementor-section-height-default">

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b295bf3"
            data-id="b295bf3" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-a005400 elementor-widget elementor-widget-naxly_about_company_v2"
                    data-id="a005400" data-element_type="widget" data-widget_type="naxly_about_company_v2.default">
                    <div className="elementor-widget-container">

                        <section className="about-style-two">
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                                        <div id="image_block_01">
                                            <div className="image-box wow slideInLeft animated" data-wow-delay="00ms"
                                                 data-wow-duration="1500ms">
                                                <motion.div
                                                    ref={ref}
                                                    initial={{
                                                        x: -100,
                                                        opacity: 0
                                                    }} // Start position: outside of the viewport on the left
                                                    animate={isVisible ? { x: 0, opacity: 1 } : {}}// End position: at the center of the viewport
                                                    transition={{
                                                        duration: 2,
                                                        type: "spring",
                                                        stiffness: 8
                                                    }} // Animation duration and type
                                                >
                                                    <div className="pattern-layer">
                                                    </div>
                                                    <figure className="image js-tilt"><img
                                                        decoding="async"
                                                        src={about}
                                                        alt="Awesome Image" width="615" height="504"/>
                                                        <div className="js-tilt-glare"
                                                             style={{
                                                                 position: 'absolute',
                                                                 top: '0px',
                                                                 left: '0px',
                                                                 width: '100%',
                                                                 height: '100%',
                                                                 overflow: 'hidden'
                                                             }}
                                                        >
                                                            <div className="js-tilt-glare-inner"
                                                                 style={{
                                                                     position: 'absolute',
                                                                     top: '50%',
                                                                     left: '50%',
                                                                     pointerEvents: 'none',
                                                                     backgroundImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)',
                                                                     width: '1041.47px',
                                                                     height: '1041.47px',
                                                                     transform: ' rotate(180deg) translate(-50%, -50%)',
                                                                     transformOrigin: '0% 0% 0px',
                                                                     opacity: '0'
                                                                 }}
                                                            >
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                                        <div id="content_block_03">
                                            <div className="content-box">
                                                <div className="sec-title style-two text-left">
                                                    <p>About Company</p>
                                                    <h2>Mission is to bring the power of AI to every business</h2>
                                                    <div className="decor"

                                                      >
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <p>To take a trivial example, which of us ever undertakes laborious
                                                        physical exercise, except to obtain some advantage from it but
                                                        right to find fault with a man who chooses enjoy.</p>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="icon-box">
                                                        <div className="bg-box"

                                                        >
                                                        </div>
                                                        <i className="icon flaticon-brain-2" style={{WebkitBackgroundClip:'text'}} ></i>
                                                    </div>
                                                    <h5>Impressive Works Since 2010</h5>
                                                    <a href="http://el.commonsupport.com/newwp/naxly/about-company/"><i
                                                            className="flaticon-next"></i>More About Us</a>
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
