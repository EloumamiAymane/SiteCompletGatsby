import React from 'react'
export const ContactUs = () => {
return (
<section>

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4067ede"
            data-id="4067ede" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-340a107 elementor-widget elementor-widget-naxly_contact_for_v2"
                    data-id="340a107" data-element_type="widget" data-widget_type="naxly_contact_for_v2.default">
                    <div className="elementor-widget-container">

                        <section className="contact-section style-two" id="contact">
                            {/*<figure className="image-layer float-bob-y"><img decoding="async"*/}
                            {/*        src={rocket}*/}
                            {/*        alt="Awesome Image" width="353" height="359" /></figure>*/}
                            <div className="auto-container">
                                <div className="sec-title text-center mb-60">
                                    <p>Send Message</p>
                                    <h2>We’d love to hear from you</h2>
                                    <div className="decor"
                                    ></div>
                                </div>

                                <div className="content-column">
                                        <div id="content_block_09">
                                            <div className="content-box">
                                                <div id="contact-form" className="default-form">

                                                    <div className="wpcf7 js" id="wpcf7-f463-p271-o1" lang="en-US"
                                                         dir="ltr">
                                                        <div className="screen-reader-response">
                                                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                            <ul></ul>
                                                        </div>
                                                        <form action="/user-analysis/#wpcf7-f463-p271-o1" method="post"
                                                              className="wpcf7-form init" aria-label="Contact form"
                                                              noValidate="novalidate" data-status="init">
                                                            <div style={{display: 'none'}}>
                                                                <input type="hidden" name="_wpcf7" />
                                                                <input type="hidden" name="_wpcf7_locale"
                                                                     />
                                                                <input type="hidden" name="_wpcf7_version"
                                                                       />
                                                                <input type="hidden" name="_wpcf7_unit_tag"
                                                                       />
                                                                <input type="hidden" name="_wpcf7_container_post"
                                                                     />
                                                                <input type="hidden" name="_wpcf7_posted_data_hash"
                                                                       />
                                                            </div>
                                                            <div className="default-form">
                                                                <div className="row clearfix">
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                                        <div className="form-group">
                                                                            <p><label><i className="far fa-user"></i>Your
                                                                                Name</label><span
                                                                                className="wpcf7-form-control-wrap"
                                                                                data-name="text-941"><input size="40"
                                                                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                                            aria-required="true"
                                                                                                            aria-invalid="false"
                                                                                                            placeholder="Enter name here"

                                                                                                            type="text"
                                                                                                            name="text-941"/></span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <p><label><i className="far fa-envelope"></i>Email
                                                                                Address</label><span
                                                                                className="wpcf7-form-control-wrap"
                                                                                data-name="email-638"><input size="40"
                                                                                                             className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                                                                             aria-required="true"
                                                                                                             aria-invalid="false"
                                                                                                             placeholder="Email Address"

                                                                                                             type="email"
                                                                                                             name="email-638"/></span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <p><label><i
                                                                                className="far fa-user"></i>Subject</label><span
                                                                                className="wpcf7-form-control-wrap"
                                                                                data-name="text-942"><input size="40"
                                                                                                            className="wpcf7-form-control wpcf7-text"
                                                                                                            aria-invalid="false"
                                                                                                            placeholder="Subject"

                                                                                                            type="text"
                                                                                                            name="text-942"/></span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                                        <div className="form-group">
                                                                            <p><label><i
                                                                                className="fas fa-text-height"></i>Message</label><span
                                                                                className="wpcf7-form-control-wrap"
                                                                                data-name="textarea-196"><textarea
                                                                                cols="40" rows="10"
                                                                                className="wpcf7-form-control wpcf7-textarea"
                                                                                aria-invalid="false"
                                                                                placeholder="Message goes here"
                                                                                name="textarea-196"></textarea></span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <p>
                                                                                <button className="theme-btn style-ten"
                                                                                        type="submit"
                                                                                        name="submit-form">Send
                                                                                    Your Message
                                                                                </button>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </div>
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
