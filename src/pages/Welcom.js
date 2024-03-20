import React from 'react'
import  welcome1 from "../images/resource/welcome-1.png"
import  welcome2 from "../images/resource/welcome-2.png"
import  welcome3 from "../images/resource/welcome-3.png"
import {WelcomItem} from "../Components/Cards/WelcomItem";
 const Welcom = () => {
return (
<section>

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a4e5449"
            data-id="a4e5449" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-aee2c17 elementor-widget elementor-widget-naxly_feature_services_v3"
                    data-id="aee2c17" data-element_type="widget" data-widget_type="naxly_feature_services_v3.default">
                    <div className="elementor-widget-container">

                        <section className="welcome-section">
                            <div className="auto-container">
                                <div className="sec-title text-center">
                                    <p>Welcome to Naxly</p>
                                    <h2>Target your customers with the <br/> right messages</h2>
                                    <div className="decor"

                                      >
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 welcome-block">
                                        <div className="welcome-block-one wow slideInUp animated" data-wow-delay="00ms"
                                            data-wow-duration="1500ms"
                                            style={{visibility: 'visible',animationDuration:'1500ms',animationDelay:'0ms',animationName:'slideInUp'}}
                                           >
                                            <WelcomItem photo={welcome1}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 welcome-block">
                                        <div className="welcome-block-one wow slideInUp animated" data-wow-delay="00ms"
                                            data-wow-duration="1500ms"
                                            style={{visibility: 'visible',animationDuration:'1500ms',animationDelay:'0ms',animationName:'slideInUp'}}
                                            >
                                            <WelcomItem photo={welcome2}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 welcome-block">
                                        <div className="welcome-block-one wow slideInUp animated" data-wow-delay="00ms"
                                            data-wow-duration="1500ms"
                                            style={{visibility: 'visible',animationDuration:'1500ms',animationDelay:'0ms',animationName:'slideInUp'}}
                                           >
                                            <WelcomItem photo={welcome3}/>
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

export default Welcom
