import React from 'react'
import {PriceCard} from "../Components/Cards/PriceCard";


 const PricePlan = () => {

return (
<section>

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-343f55e"
            data-id="343f55e" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-99861e9 elementor-widget elementor-widget-naxly_pricing_plan"
                    data-id="99861e9" data-element_type="widget" data-widget_type="naxly_pricing_plan.default">
                    <div className="elementor-widget-container">

                        <section className="pricing-section">
                            <div className="title-inner bg-color-1">
                                <div className="auto-container">
                                    <div className="sec-title text-center">
                                        <p>Pricing &amp; Plans</p>
                                        <h2>Our affordable pricing plans</h2>
                                        <div className="decor"
                                      >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <div className="auto-container">
                                    <div className="inner-container">
                                        <div className="row clearfix">
                                            <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                                <PriceCard actives={false}/>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                                <PriceCard actives={true}/>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                                <PriceCard actives={false}/>
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

export default PricePlan
