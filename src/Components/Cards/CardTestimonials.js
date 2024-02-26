import React from 'react'

const CardTestimonials = ({testi,width}) => {
  return (
    <div class="bx_item"
    style={{float: 'none', listStyle: 'none', position: 'relative', width: `${width}`}}>

    <div class="testi_box_content">
        <div class="testi_box_content_outer">
            <div class="person_box">
                <img loading="lazy" decoding="async" width="178"
                    height="180"
                    src={testi.image}
                    class="img-fluid wp-post-image" alt=""
/>
            </div>
            <div class="testi_box_content_inner">
                <div class="content_box">
                    <p>{testi.description}</p>
                    <h2>{testi.author}</h2>
                    <h6>{testi.job}</h6>
                </div>
                <span class="flaticon-quote quote_icon"></span>
            </div>
        </div>
    </div>
</div>
  )
}

export default CardTestimonials