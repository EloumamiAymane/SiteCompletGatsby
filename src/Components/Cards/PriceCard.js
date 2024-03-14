import React, {useRef} from "react";
import {useInView,motion} from "framer-motion";

export const PriceCard = ({actives}) => {
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

          <div className={ actives ?'pricing-block-one active-block wow fadeInUp animated' :'pricing-block-one  wow fadeInUp animated'}
               data-wow-delay="300ms" data-wow-duration="1500ms"

               style={{
                   visibility: 'visible',
                   animationDuration: '1500ms',
                   animationDelay: '300ms',
                   animationName: 'slideInUp'
               }}>
              <div className="pricing-table">
                  <div className="table-header">
                      <div className="header-upper">
                          <h3>Basic</h3>
                          <p>Provide standard plan specially for developers &amp;
                              freelancers</p>
                      </div>
                      <div className="header-lower">
                          <h1><span>$</span>149</h1>
                          <p>Per Month</p>
                      </div>
                  </div>
                  <div className="table-content">
                      <ul>
                          <li>Full Acess Library</li>
                          <li>One User</li>
                          <li>5 Analytic Report</li>
                          <li>24/7 Support</li>
                      </ul>
                  </div>
                  <div className="table-footer">
                      <a href="#" className="btn-style-eight"><i
                          className="flaticon-next"></i>Get Started</a>
                  </div>
              </div>
          </div>

      </motion.div>
  )
}



