import React from 'react'
import client1 from "../images/clients/clients-logo-6.png"
import client2 from "../images/clients/clients-logo-7.png"
import client3 from "../images/clients/clients-logo-8.png"
import client4 from "../images/clients/clients-logo-9.png"
import client5 from "../images/clients/clients-logo-10.png"
import client6 from "../images/clients/clients-logo-11.png"
const Clients = () => {
return (
<section
    class="elementor-section elementor-top-section elementor-element elementor-element-1752d98 elementor-section-full_width elementor-section-height-default elementor-section-height-default">

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ab12c0f"
            data-id="ab12c0f" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-a1dc603 elementor-widget elementor-widget-naxly_our_clients_v2"
                    data-id="a1dc603" data-element_type="widget" data-widget_type="naxly_our_clients_v2.default">
                    <div class="elementor-widget-container">

                        <section class="clients-style-two bg-color-1">
                            <div class="pattern-layer">
                                <div class="pattern-1"

                                   >
                                </div>
                                <div class="pattern-2 wow slideInRight animated" data-wow-delay="00ms"
                                    data-wow-duration="1500ms"
                                    style={{visibility:'visible',animationDuration:'1500ms',animationDelay:'0ms',animationName:'slideInRight'}}
                                    >
                                </div>
                            </div>
                            <div class="auto-container">
                                <div class="sec-title text-center style-two mb-70">
                                    <p>Clients</p>
                                    <h2>Latest thinking in AI and our</h2>
                                    <div class="decor"

                                      >
                                    </div>
                                </div>
                                <div class="logo-inner">
                                    <ul class="logo-box logo-box-one clearfix">
                                        <li>
                                            <figure class="image-box"><a href="#"><img decoding="async"
                                                        src={client1}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                        <li>
                                            <figure class="image-box"><a href="#"><img decoding="async"
                                                        src={client2}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                        <li>
                                            <figure class="image-box"><a href="#"><img decoding="async"
                                                        src={client3}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                        <li>
                                            <figure class="image-box"><a href="#"><img decoding="async"
                                                        src={client4}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                    </ul>
                                    <ul class="logo-box logo-box-two clearfix">
                                        <li>
                                            <figure class="image-box"><a href="#"><img decoding="async"
                                                        src={client5}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                        <li>
                                            <figure class="image-box"><a href="#"><img decoding="async"
                                                        src={client6}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                        <li>
                                            <figure class="image-box"><a href="#"><img decoding="async"
                                                        src={client4}
                                                        alt="Awesome Image" width="170" height="45"/></a></figure>
                                        </li>
                                    </ul>
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

export default Clients
