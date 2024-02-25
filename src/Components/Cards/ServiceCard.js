import React from 'react'

const ServiceCard = ({slide,width}) => {
    console.log(width)
    // console.log(slide)
  return (
    <div class="owl-item " id='ole'
    style={{width:`${width}`,marginRight:'30px'}}>
    <div class="service-block-two">
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