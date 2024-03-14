import React, {useRef} from 'react'
import illustration1 from "../images/resource/illastration-1.png"
import {useInView,motion} from "framer-motion";
const Skill = () => {
    const ref = useRef(null)
    const isVisible = useInView(ref)
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-9638a3f elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="9638a3f" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-462f6f0" data-id="462f6f0" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-cbb9203 elementor-widget elementor-widget-naxly_our_skills" data-id="cbb9203" data-element_type="widget" data-widget_type="naxly_our_skills.default">
                            <div className="elementor-widget-container">


                                <section className="skills-section">
                                    <div className="pattern-layer"

                                   ></div>
                                    <div className="auto-container">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                <div className="image-box wow slideInLeft" data-wow-delay="200ms"
                                                     data-wow-duration="1500ms">
                                                    <motion.div
                                                        ref={ref}
                                                        initial={{
                                                            x: -100,
                                                            opacity: 0
                                                        }} // Start position: outside of the viewport on the left
                                                        animate={isVisible ? {
                                                            x: 0,
                                                            opacity: 1
                                                        } : {}}// End position: at the center of the viewport
                                                        transition={{
                                                            duration: 2,
                                                            type: "spring",
                                                            stiffness: 8
                                                        }} // Animation duration and type
                                                    >
                                                        <figure className="image js-tilt">
                                                            <img decoding="async" src={illustration1}
                                                                 alt="Awesome Image" data-recalc-dims="1"/></figure>
                                                    </motion.div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                                <div id="content_block_02">
                                                    <div className="content-box">
                                                        <div className="sec-title text-left">
                                                            <p>Skills &amp; Facts</p>
                                                            <h2>We keep our self updated with latest trends</h2>
                                                            <div className="decor"

                                                            ></div>
                                                        </div>
                                                        <div className="text">
                                                        <p>As a solution providing company we offer a  range consulting, development quality testing services with 100% satisfaction.</p>
                                                        </div>
                                                        <div className="inner-box">
                                                            <div className="progress-box">
                                                                <h5>Data Consulting</h5>
                                                                <div className="icon-box"><i className="icon flaticon-chat"></i></div>
                                                                <div className="bar">
                                                                    <motion.div
                                                                        ref={ref}
                                                                        className="bar-inner count-bar"
                                                                        initial={{  width: "0%"}}
                                                                        animate={isVisible ?{width:"62%"}:{}}
                                                                        transition={{duration: 2}}
                                                                    >


                                                                    </motion.div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-box">
                                                                <h5>Big Data &amp; BI</h5>
                                                                <div className="icon-box"><i
                                                                    className="icon flaticon-cloud-computing"></i></div>
                                                                <div className="bar">
                                                                    <motion.div
                                                                        ref={ref}
                                                                        className="bar-inner count-bar"
                                                                        initial={{width: "0%"}}
                                                                        animate={isVisible ?{width:"50%"}:{}}
                                                                        transition={{duration: 2}}
                                                                    >


                                                                    </motion.div>

                                                                </div>
                                                            </div>
                                                            <div className="progress-box">
                                                            <h5>Predictive Analysis</h5>
                                                                <div className="icon-box"><i className="icon flaticon-analysis-1"></i></div>
                                                                <div className="bar">
                                                                    <motion.div
                                                                        ref={ref}
                                                                        className="bar-inner count-bar"
                                                                        initial={{width: "0%"}}
                                                                        animate={isVisible ?{width:"75%"}:{}}
                                                                        transition={{duration: 2}}
                                                                    >


                                                                    </motion.div>
                                                                </div>
                                                            </div>
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

export default Skill
