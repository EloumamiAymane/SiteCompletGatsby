import React from 'react'

const CardTestimonials = ({testi,width}) => {
  return (
    <div className="bx_item"
    style={{float: 'none', listStyle: 'none', position: 'relative', width: `${width}`}}>

    <div className="testi_box_content">
        <div className="testi_box_content_outer">
            <div className="person_box">
                <img loading="lazy" decoding="async" width="178"
                    height="180"
                    src={testi.image}
                    className="img-fluid wp-post-image" alt=""
/>
            </div>
            <div className="testi_box_content_inner">
                <div className="content_box">
                    <p>{testi.description}</p>
                    <h2>{testi.author}</h2>
                    <h6>{testi.job}</h6>
                </div>
                <span className="flaticon-quote quote_icon"></span>
            </div>
        </div>
    </div>
</div>
  )
}

export default CardTestimonials
