import React from 'react'

const Subscribe = () => {
return (
<section
    class="elementor-section elementor-top-section elementor-element elementor-element-7ba2a33 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
    data-id="7ba2a33" data-element_type="section">

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-125b76f"
            data-id="125b76f" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-20c43e9 elementor-widget elementor-widget-naxly_subscribe_form"
                    data-id="20c43e9" data-element_type="widget" data-widget_type="naxly_subscribe_form.default">
                    <div class="elementor-widget-container">

                        <div class="subscribe-us">
                            <div class="large-container">
                                <div class="subscribe-inner">
                                    <form action="http://feedburner.google.com/fb/a/mailverify" accept-charset="utf-8"
                                        method="post">
                                        <div class="form-group">
                                            <input type="hidden" id="uri6" name="uri" value=""/>
                                            <input type="email" name="email" placeholder="Enter Email Address..."
                                                required=""/>
                                            <button type="submit"><i class="flaticon-next"></i>Subscribe Us</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
)
}

export default Subscribe