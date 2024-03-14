import React, {useRef} from "react";
import {useInView,motion} from "framer-motion";

export  const  NewsItem=({image})=>{
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
        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms"
             data-wow-duration="1500ms"
             style={{
                 visibility: 'visible',
                 animationDuration: '1500ms',
                 animationDelay: '0ms',
                 animationName: 'fadeInUp'
             }}
        >
            <div className="inner-box">
                <figure className="image-box">
                    <img loading="lazy" decoding="async" width="370" height="250"
                         src={image}
                         className="attachment-naxly_370x250 size-naxly_370x250 wp-post-image"
                         alt=""
                         srcSet={image}
                         sizes="(max-width: 370px) 100vw, 370px" data-attachment-id="91"
                         data-permalink="https://naxly.wpcomstaging.com/2020/08/13/naxly-named-as-a-global-leader-in-big-data/news-1/"
                         data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg?fit=370%2C250&amp;ssl=1"
                         data-orig-size="370,250" data-comments-opened="1"
                         data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                         data-image-title="news-1" data-image-description=""
                         data-image-caption=""
                         data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg?fit=300%2C203&amp;ssl=1"
                         data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg?fit=370%2C250&amp;ssl=1"/>
                    <a href="https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/news-1.jpg"
                       className="lightbox-image" data-fancybox="gallery"><i
                        className="flaticon-zoom"></i></a>
                </figure>
                <div className="lower-content">
                    <div className="file-box"><i className="far fa-folder-open"></i>
                        <p><a href="https://naxly.wpcomstaging.com/category/latest-news/"
                              rel="category tag">Latest News</a></p>
                    </div>
                    <div className="title-box">
                        <div className="post-date">
                            <p>13</p><span>Août</span>
                        </div>
                        <h4><a
                            href="https://naxly.wpcomstaging.com/2020/08/13/naxly-named-as-a-global-leader-in-big-data/">Naxly
                            Named as a Global Leader in Big Data</a></h4>
                    </div>
                    <div className="link"><a
                        href="https://naxly.wpcomstaging.com/2020/08/13/naxly-named-as-a-global-leader-in-big-data/"><i
                        className="flaticon-next"></i>More Details</a></div>
                </div>
            </div>
        </div>
        </motion.div>
    )
}
