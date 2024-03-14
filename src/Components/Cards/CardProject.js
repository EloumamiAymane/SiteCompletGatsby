import React, {useRef} from 'react'
import {motion, useInView} from "framer-motion";

const CardProject = ({slide}) => {
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
    <div className="owl-item cloned"  style={{width:'100%',margin:'auto',position:'relative'}}>
    <div className="case-block-two" style={{margin:'10px'}}>
        <div className="inner-box">
            <figure className="image-box">
                <img fetchpriority="high" decoding="async" width="370"
                    height="340"
                    src={`${slide.photo}`}
                    className="attachment-naxly_370x340 size-naxly_370x340 wp-post-image"
                    alt=""
        />
                <div className="client-box">
                    <span>Neuro Jump</span>
                    <div className="client-logo"><img decoding="async"
                            src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-1.png?w=525"
                            alt="Awesome Image" width="39" height="42"/>
                    </div>
                </div>
                <div className="link"><a
                        href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-2/"><i
                            className="flaticon-hyperlink"></i></a></div>
                <div className="overlay-layer"></div>
            </figure>
            <div className="lower-content">
                <div className="box">
                    <div className="icon-box"><i
                            className="icon flaticon-vision"></i></div>
                    <p>Our Projects</p>
                    <h4><a
                            href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-2/">{slide.title}</a></h4>
                </div>
            </div>
        </div>
    </div>
</div>
      </motion.div>
  )
}

export default CardProject
