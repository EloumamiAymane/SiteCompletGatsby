import React, {useRef} from 'react'
import client1 from "../images/clients/clients-logo-6.png"
import client2 from "../images/clients/clients-logo-7.png"
import client3 from "../images/clients/clients-logo-8.png"
import client4 from "../images/clients/clients-logo-9.png"
import client5 from "../images/clients/clients-logo-10.png"
import client6 from "../images/clients/clients-logo-11.png"
import {useInView,motion} from "framer-motion";
const Clients = () => {
    const ref = useRef(null)
    const isVisible = useInView(ref)
return (
<section
    className="elementor-section elementor-top-section elementor-element elementor-element-1752d98 elementor-section-full_width elementor-section-height-default elementor-section-height-default">

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ab12c0f"
            data-id="ab12c0f" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-a1dc603 elementor-widget elementor-widget-naxly_our_clients_v2"
                    data-id="a1dc603" data-element_type="widget" data-widget_type="naxly_our_clients_v2.default">
                    <div className="elementor-widget-container">

                        <section className="clients-style-two bg-color-1">
                            <div className="pattern-layer">
                                <div className="pattern-1"

                                >
                                </div>
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
                                    <div className="pattern-2 wow slideInRight animated" data-wow-delay="00ms"
                                         data-wow-duration="1500ms"

                                    >
                                    </div>
                                </motion.div>
                            </div>
                            <div className="auto-container">
                                <div className="sec-title text-center style-two mb-70">
                                    <p>Clients</p>
                                    <h2>Latest thinking in AI and our</h2>
                                    <div className="decor"

                                    >
                                    </div>
                                </div>
                                <div className="logo-inner">
                                    <ul className="logo-box logo-box-one clearfix">
                                        <li>
                                            <figure className="image-box"><a href="#"><img decoding="async"
                                                                                       src={client1}
                                                                                       alt="Awesome Image" width="170"
                                                                                       height="45"/></a></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><a href="#"><img decoding="async"
                                                        src={client2}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><a href="#"><img decoding="async"
                                                        src={client3}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><a href="#"><img decoding="async"
                                                        src={client4}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                    </ul>
                                    <ul className="logo-box logo-box-two clearfix">
                                        <li>
                                            <figure className="image-box"><a href="#"><img decoding="async"
                                                        src={client5}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><a href="#"><img decoding="async"
                                                        src={client6}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                        <li>
                                            <figure className="image-box"><a href="#"><img decoding="async"
                                                        src={client4}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                    </ul>
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

export default Clients
