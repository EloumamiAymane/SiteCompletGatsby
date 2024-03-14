import welcome1 from "../../images/resource/welcome-1.png";
import React, {useRef} from "react";
import {useInView,motion} from "framer-motion";

export  const WelcomItem=({photo})=>{
    const ref = useRef(null)
    const isVisible = useInView(ref,{once:true})
    return (
        <motion.div
            ref={ref}
            initial={{
                y: 100,
                opacity: 0
            }} // Start position: outside of the viewport on the left
            animate={isVisible ? { y: 0, opacity: 1 } : {}}// End position: at the center of the viewport
            transition={{
                duration: 2,
                type: "spring",
                stiffness: 8
            }} // Animation duration and type
        >
        <div className="inner-box">
            <div className="image-box">
                <figure className="image">
                    <img decoding="async" width="108" height="143"
                                               src={photo}
                                               className="attachment-naxly_136x143 size-naxly_136x143 wp-post-image"
                                               alt="" data-attachment-id="375"
                                               data-permalink="https://naxly.wpcomstaging.com/naxly_service/user-prespective/welcome-1/"
                                               data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/welcome-1.png?fit=108%2C150&amp;ssl=1"
                                               data-orig-size="108,150" data-comments-opened="1"
                                               data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                               data-image-title="welcome-1" data-image-description=""
                                               data-image-caption=""
                                               data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/welcome-1.png?fit=108%2C150&amp;ssl=1"
                                               data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/welcome-1.png?fit=108%2C150&amp;ssl=1"/>
                </figure>
                <div className="bg-pattern"
                >
                </div>
                <div className="overlay-pattern"
                >
                </div>
            </div>
            <div className="lower-content">
                <h3><a
                    href="http://el.commonsupport.com/newwp/naxly/service-details/">User
                    Prespective</a></h3>
                <div className="text">
                    <p>To take a trivial example, which idea of our ever undertakes.
                    </p>
                </div>
            </div>
        </div>
        </motion.div>
    )
}
