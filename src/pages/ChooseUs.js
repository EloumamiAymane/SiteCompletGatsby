import React, {useRef} from 'react'
import {useInView,motion} from "framer-motion";

const ChooseUs = () => {
    const ref = useRef(null)
    const isVisible = useInView(ref)
return (
<section className="elementor-section elementor-top-section elementor-element elementor-element-1da2f59 elementor-section-full_width elementor-section-height-default elementor-section-height-default">

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6e152ed"
            data-id="6e152ed" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-627db42 elementor-widget elementor-widget-naxly_why_choose_us"
                    data-id="627db42" data-element_type="widget" data-widget_type="naxly_why_choose_us.default">
                    <div className="elementor-widget-container">

                        <section className="chooseus-section  ">
                            <div className="auto-container">
                                <div className="sec-title text-center style-two">
                                    <p>Why Choose Us</p>
                                    <h2>Reason for people choose us</h2>
                                    <div className="decor"
                                    >
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div id="content_block_04">
                                            <div className="content-box">
                                                <div className="single-item ">
                                                    <div className="icon-box">
                                                        <div className="bg-layer"
                                                         >
                                                        </div>
                                                        <i className="icon flaticon-global" style={{WebkitBackgroundClip:'text'}}></i>
                                                    </div>
                                                    <div className="box">
                                                        <h4>Global Experience</h4>
                                                        <p>Nor again is there anyone who loves or pursues pain of
                                                            itself, because circumstances.</p>
                                                        <a
                                                            href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
                                                                className="fas fa-arrow-right"></i> Read More</a>
                                                    </div>
                                                </div>
                                                <div className="single-item text-right">
                                                    <div className="icon-box">
                                                        <div className="bg-layer"
                                                            >
                                                        </div>
                                                        <i className="icon flaticon-analysis" style={{WebkitBackgroundClip:'text'}}></i>
                                                    </div>
                                                    <div className="box">
                                                        <h4>Value for Results</h4>
                                                        <p>Except obtain some advantages from ithas any to find fault
                                                            with a consequences.</p>
                                                        <a
                                                            href="http://el.commonsupport.com/newwp/naxly/service-details/">Read
                                                            More <i className="fas fa-arrow-left"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                                        <div id="video_block_01">
                                            <motion.div
                                                ref={ref}
                                                initial={{
                                                    x: 100,
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
                                                <div className="video-inner wow slideInRight animated" data-wow-delay="00ms"
                                                     data-wow-duration="1500ms"
                                                     style={{
                                                         visibility: 'visible',
                                                         animationDuration: '1500ms',
                                                         animationDelay: '0ms',
                                                         animationName: 'slideInRight'
                                                     }}>
                                                    <div className="pattern-layer"
                                                    >
                                                    </div>
                                                    <div className="video-btn">
                                                        <div className="btn-bg rotate-me"
                                                        >
                                                        </div>
                                                        <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                                                           className="lightbox-image" data-caption=""><i
                                                            className="fas fa-play"
                                                            style={{WebkitBackgroundClip: 'text'}}></i></a>
                                                    </div>
                                                </div>
                                            </motion.div>
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

export default ChooseUs
