import React from 'react'

const CardProject = ({slide,sTyle}) => {
  return (
    <div class="owl-item cloned"  style={{width:`${sTyle.width}`,margin:'auto',position:'relative',left:`${sTyle.left}`}}>
    <div class="case-block-two">
        <div class="inner-box">
            <figure class="image-box">
                <img fetchpriority="high" decoding="async" width="370"
                    height="340"
                    src={`${slide.photo}`}
                    class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image"
                    alt=""
                    srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?w=370&amp;ssl=1 370w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?resize=300%2C276&amp;ssl=1 300w"
                    sizes="(max-width: 370px) 100vw, 370px"
                    data-attachment-id="149"
                    data-permalink="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture/gallery-1/"
                    data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=370%2C340&amp;ssl=1"
                    data-orig-size="370,340" data-comments-opened="1"
                    data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                    data-image-title="gallery-1" data-image-description=""
                    data-image-caption=""
                    data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=300%2C276&amp;ssl=1"
                    data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/gallery-1.jpg?fit=370%2C340&amp;ssl=1"/>
                <div class="client-box">
                    <span>Neuro Jump</span>
                    <div class="client-logo"><img decoding="async"
                            src="https://i0.wp.com/el.commonsupport.com/newwp/naxly/wp-content/uploads/2020/03/icon-1.png?w=525"
                            alt="Awesome Image" width="39" height="42"/>
                    </div>
                </div>
                <div class="link"><a
                        href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-2/"><i
                            class="flaticon-hyperlink"></i></a></div>
                <div class="overlay-layer"></div>
            </figure>
            <div class="lower-content">
                <div class="box">
                    <div class="icon-box"><i
                            class="icon flaticon-vision"></i></div>
                    <p>Our Projects</p>
                    <h4><a
                            href="https://naxly.wpcomstaging.com/naxly_project/invoice-data-capture-2/">{slide.title}</a></h4>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CardProject