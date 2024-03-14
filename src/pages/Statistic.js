import React, {useRef} from 'react'
import {motion, useInView} from "framer-motion";
import CountText from "../Helpers/CountText";

const Statistic = () => {
    const ref = useRef(null)
    const isVisible = useInView(ref)
return (
<section
    className="elementor-section elementor-top-section elementor-element elementor-element-d73fb65 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
    data-id="3457ad1" data-element_type="section">

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d7fc72b"
            data-id="d7fc72b" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-8bd3b2d elementor-widget elementor-widget-naxly_funfacts"
                    data-id="8bd3b2d" data-element_type="widget" data-widget_type="naxly_funfacts.default">
                    <div className="elementor-widget-container">

                        <section className="fun-fact ">
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 counter-block">
                                        <div className="counter-block-one wow slideInUp animated" data-wow-delay="00ms"
                                            data-wow-duration="1500ms"
                                            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'slideInUp' }}>
                                            <div className="inner-box">
                                                <div className="icon-box" style={{WebkitBackgroundClip: 'text'}}>
                                                    <i className="icon flaticon-analytics"></i>
                                                </div>
                                                <motion.div
                                                    ref={ref}

                                                >
                                                    <div className="count-outer count-box counted">
                                                        <motion.div
                                                            ref={ref}>
                                                            {!isVisible && <span>0</span>}
                                                            {isVisible && <CountText speed={8500} stop={3500}/>}
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                                <h4>Projects Completed</h4>
                                                <p>To take trivial example, which idea of ever undertakes.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 counter-block">
                                        <div className="counter-block-one wow slideInUp animated" data-wow-delay="00ms"
                                             data-wow-duration="1500ms"
                                             style={{
                                                 visibility: 'visible',
                                                 animationDuration: '1500ms',
                                                 animationDelay: '0ms',
                                                 animationName: 'slideInUp'
                                             }}>
                                            <div className="inner-box">
                                                <div className="icon-box" style={{WebkitBackgroundClip: 'text'}}><i
                                                    className="icon flaticon-brain-1"></i></div>
                                                <div className="count-outer count-box counted">
                                                    <motion.div
                                                        ref={ref}>
                                                        {!isVisible && <span>0</span>}
                                                        {isVisible && <CountText speed={8500} stop={1864}/>}
                                                    </motion.div>
                                                </div>
                                                <h4>Industries Covered</h4>
                                                <p>Best every pleasure is to welcomed every pain avoided.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 counter-block">
                                        <div className="counter-block-one wow slideInUp animated" data-wow-delay="00ms"
                                            data-wow-duration="1500ms"
                                            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'slideInUp' }}>
                                            <div className="inner-box">
                                                <div className="icon-box" style={{WebkitBackgroundClip:'text'}}><i className="icon flaticon-freelance"></i></div>
                                                <div className="count-outer count-box counted">
                                                    <motion.div
                                                        ref={ref}>
                                                        {!isVisible && <span>0</span>}
                                                        {isVisible && <CountText speed={5000} stop={393}/>}
                                                    </motion.div>
                                                </div>
                                                <h4>Expert Scientists</h4>
                                                <p>Have to be repudiated annoyances accepted the wise.</p>
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

export default Statistic
