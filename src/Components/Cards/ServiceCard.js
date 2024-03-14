import React from 'react'

const ServiceCard = ({slide}) => {

  return (
    <div className="owl-item"
    style={{width:'100%'}}>
    <div className="service-block-two" style={{margin:'10px'}}>
        <div className="inner-box">
            <div className="text-layer">
                <h2>{slide.title}</h2>
            </div>
            <div className="icon-box" style={{WebkitBackgroundClip:'text'}}><i
                    className={`${slide.icon}`} ></i></div>
            <h4><a
                    href="http://el.commonsupport.com/newwp/naxly/service-details/">Machine
                    Learning</a></h4>
            <p>{slide.description}</p>
            <div className="link"><a
                    href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
                        className="flaticon-next"></i>Read More</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default ServiceCard
