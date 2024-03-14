import React from 'react'
import  banner from "../images/banner/banner-2-1.png"
import  gear4 from "../images/icons/gear-4.png"
import  gear5 from "../images/icons/gear-5.png"
import  gear6 from "../images/icons/gear-6.png"
const MainPage = () => {
return (
<section
    className="elementor-section elementor-top-section elementor-element elementor-element-39f9d56 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
    data-id="39f9d56" data-element_type="section">

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e787232"
            data-id="e787232" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-de35060 elementor-widget elementor-widget-naxly_banner_v2"
                    data-id="de35060" data-element_type="widget" data-widget_type="naxly_banner_v2.default">
                    <div className="elementor-widget-container">

                        <section className="banner-style-two">
                            <div className="pattern-layer"

                            >
                            </div>
                            <div className="large-container">
                                <div className="row clearfix">
                                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <h1>Best Artificial Intelligence Lab</h1>
                                            <p>Naxly bring the power of data science and artificial intelligence to
                                                every business.</p>
                                            {/*<a href="http://el.commonsupport.com/newwp/naxly/about-company/"*/}
                                            {/*    className="theme-btn style-five"><i className="flaticon-next"></i>More*/}
                                            {/*    Details</a>*/}
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                                        <div className="image-box">
                                            <figure className="image image-1"><img decoding="async"
                                                    src={banner}
                                                    alt="Awesome Image" width="945" height="771"/></figure>
                                            <figure className="image image-2 rotate-me"><img decoding="async"
                                                    src={gear4}
                                                    alt="Awesome Image" width="245" height="244"/></figure>
                                            <figure className="image image-3 rotate-me"><img decoding="async"
                                                    src={gear5}
                                                    alt="Awesome Image" width="156" height="156"/></figure>
                                            <figure className="image image-4 rotate-me"><img decoding="async"
                                                    src={gear5}
                                                    alt="Awesome Image" width="156" height="156"/></figure>
                                            <figure className="image image-5 rotate-me"><img decoding="async"
                                                    src={gear6}
                                                    alt="Awesome Image" width="253" height="253"/></figure>
                                            <div className="anim-icon">
                                                <span className="icon icon-1"></span>
                                                <span className="icon icon-2"></span>
                                                <span className="icon icon-3"></span>
                                                <span className="icon icon-4"></span>
                                                <span className="icon icon-5"></span>
                                                <span className="icon icon-6"></span>
                                                <span className="icon icon-7"></span>
                                                <span className="icon icon-8"></span>
                                                <span className="icon icon-9"></span>
                                                <span className="icon icon-10"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
)
}

export default MainPage
