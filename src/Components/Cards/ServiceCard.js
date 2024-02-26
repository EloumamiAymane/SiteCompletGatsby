import React from 'react'

const ServiceCard = ({slide}) => {

  return (
    <div class="owl-item"
    style={{width:'100%'}}>
    <div class="service-block-two" style={{margin:'10px'}}>
        <div class="inner-box">
            <div class="text-layer">
                <h2>{slide.title}</h2>
            </div>
            <div class="icon-box" style={{WebkitBackgroundClip:'text'}}><i
                    class={`${slide.icon}`} ></i></div>
            <h4><a
                    href="http://el.commonsupport.com/newwp/naxly/service-details/">Machine
                    Learning</a></h4>
            <p>{slide.description}</p>
            <div class="link"><a
                    href="http://el.commonsupport.com/newwp/naxly/service-details/"><i
                        class="flaticon-next"></i>Read More</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default ServiceCard