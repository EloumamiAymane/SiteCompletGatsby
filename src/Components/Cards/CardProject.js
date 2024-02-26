import React from 'react'

const CardProject = ({slide}) => {
  return (
    <div class="owl-item cloned"  style={{width:'100%',margin:'auto',position:'relative'}}>
    <div class="case-block-two" style={{margin:'10px'}}>
        <div class="inner-box">
            <figure class="image-box">
                <img fetchpriority="high" decoding="async" width="370"
                    height="340"
                    src={`${slide.photo}`}
                    class="attachment-naxly_370x340 size-naxly_370x340 wp-post-image"
                    alt=""
        />
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