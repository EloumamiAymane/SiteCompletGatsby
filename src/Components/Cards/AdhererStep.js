import React, {useRef} from "react";
import {useInView,motion} from "framer-motion";

const AdhererStep =({step,desc})=>{
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
        <div className="content-box wow slideInUp animated"
             data-wow-delay="00ms" data-wow-duration="1500ms"
        >
            <h4><a
                href="http://el.commonsupport.com/newwp/naxly/our-services/">{step}</a></h4>
            <p>{desc}</p>
        </div>
        </motion.div>
    )
}
export default AdhererStep
