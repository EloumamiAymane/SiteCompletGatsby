import React, { useRef } from 'react'
import Slider from 'react-slick';

const Testimonials = () => {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const Previous = () => {
      sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 8,
        slidesToScroll: 1,
        waitForAnimate: false
      };
return (
<section className="elementor-section elementor-top-section elementor-element elementor-element-cbae8fb elementor-section-full_width elementor-section-height-default elementor-section-height-default">

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1d74fd9"
            data-id="1d74fd9" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-653e096 elementor-widget elementor-widget-naxly_testimonials_v2"
                    data-id="653e096" data-element_type="widget" data-widget_type="naxly_testimonials_v2.default">
                    <div className="elementor-widget-container">

                        <section className="testimonial-style-two">
                            <div className="title-inner bg-color-3">
                                <div className="pattern-layer"

                                  >
                                </div>
                                <div className="auto-container">
                                    <div className="sec-title text-left light">
                                        <p>Testimonials</p>
                                        <h2>Words from our clients</h2>
                                        <div className="decor"
                                       >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <div className="auto-container">
                                    <div className="inner-content">
                                        <div
                                            className="testimonial-carousel-2 owl-carousel owl-theme owl-dots-none nav-style-one owl-loaded owl-drag">

                                            <div className="owl-stage-outer">
                                                <div className="owl-stage"
                                                style={{transition:'all 0s ease 0s'}}
                                                   >
                                                    <Slider {...settings} ref={slider=> { sliderRef = slider }}>
                                                    <div className="owl-item cloned" style={{width:'1034px'}}  >
                                                        <div className="testimonial-content">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img loading="lazy"
                                                                        decoding="async" width="553" height="432"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=553%2C432&amp;ssl=1"
                                                                        className="attachment-naxly_553x432 size-naxly_553x432 wp-post-image"
                                                                        alt=""
                                                                        srcSet="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=300%2C234&amp;ssl=1 300w"
                                                                        sizes="(max-width: 525px) 100vw, 525px"
                                                                        data-attachment-id="171"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-2/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=553%2C432&amp;ssl=1"
                                                                        data-orig-size="553,432"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="testimonial-2"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=300%2C234&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=525%2C410&amp;ssl=1"/>
                                                                </figure>
                                                                <div className="content-box">
                                                                    <div className="icon-box"

                                                                    >
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>As a growing company, we found in Naxly
                                                                            expertise in data science invaluble In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us.</p>
                                                                    </div>
                                                                    <div className="author-info">
                                                                        <h4>Donal Archar</h4>
                                                                        <span className="designation">CEO &amp; Founder -
                                                                            Soft Solution</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item cloned" style={{width:'1034px'}} >
                                                        <div className="testimonial-content">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img loading="lazy"
                                                                        decoding="async" width="553" height="432"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?resize=553%2C432&amp;ssl=1"
                                                                        className="attachment-naxly_553x432 size-naxly_553x432 wp-post-image"
                                                                        alt=""
                                                                        srcSet="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?resize=300%2C234&amp;ssl=1 300w"
                                                                        sizes="(max-width: 525px) 100vw, 525px"
                                                                        data-attachment-id="172"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-3/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=553%2C432&amp;ssl=1"
                                                                        data-orig-size="553,432"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="testimonial-3"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=300%2C234&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=525%2C410&amp;ssl=1"/>
                                                                </figure>
                                                                <div className="content-box">
                                                                    <div className="icon-box"

                                                                    >
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>As a growing company, we found in Naxly
                                                                            expertise in data science invaluble In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us.</p>
                                                                    </div>
                                                                    <div className="author-info">
                                                                        <h4>Jams Shan</h4>
                                                                        <span className="designation">CEO &amp; Founder -
                                                                            Soft Solution</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{width:'1034px'}} >
                                                        <div className="testimonial-content">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img loading="lazy"
                                                                        decoding="async" width="553" height="432"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?resize=553%2C432&amp;ssl=1"
                                                                        className="attachment-naxly_553x432 size-naxly_553x432 wp-post-image"
                                                                        alt=""
                                                                        srcSet="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?resize=300%2C234&amp;ssl=1 300w"
                                                                        sizes="(max-width: 525px) 100vw, 525px"
                                                                        data-attachment-id="170"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-1/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=553%2C432&amp;ssl=1"
                                                                        data-orig-size="553,432"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="testimonial-1"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=300%2C234&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=525%2C410&amp;ssl=1"/>
                                                                </figure>
                                                                <div className="content-box">
                                                                    <div className="icon-box"

                                                                      >
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>As a growing company, we found in Naxly
                                                                            expertise in data science invaluble In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us.</p>
                                                                    </div>
                                                                    <div className="author-info">
                                                                        <h4>Dedrew Kowzel</h4>
                                                                        <span className="designation">CEO &amp; Founder -
                                                                            Soft Solution</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item active" style={{width:'1034px'}} >
                                                        <div className="testimonial-content">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img loading="lazy"
                                                                        decoding="async" width="553" height="432"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=553%2C432&amp;ssl=1"
                                                                        className="attachment-naxly_553x432 size-naxly_553x432 wp-post-image"
                                                                        alt=""
                                                                        srcSet="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=300%2C234&amp;ssl=1 300w"
                                                                        sizes="(max-width: 525px) 100vw, 525px"
                                                                        data-attachment-id="171"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-2/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=553%2C432&amp;ssl=1"
                                                                        data-orig-size="553,432"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="testimonial-2"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=300%2C234&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=525%2C410&amp;ssl=1"/>
                                                                </figure>
                                                                <div className="content-box">
                                                                    <div className="icon-box"

                                                                     >
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>As a growing company, we found in Naxly
                                                                            expertise in data science invaluble In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us.</p>
                                                                    </div>
                                                                    <div className="author-info">
                                                                        <h4>Donal Archar</h4>
                                                                        <span className="designation">CEO &amp; Founder -
                                                                            Soft Solution</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{width:'1034px'}} >
                                                        <div className="testimonial-content">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img loading="lazy"
                                                                        decoding="async" width="553" height="432"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?resize=553%2C432&amp;ssl=1"
                                                                        className="attachment-naxly_553x432 size-naxly_553x432 wp-post-image"
                                                                        alt=""
                                                                        srcSet="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?resize=300%2C234&amp;ssl=1 300w"
                                                                        sizes="(max-width: 525px) 100vw, 525px"
                                                                        data-attachment-id="172"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-3/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=553%2C432&amp;ssl=1"
                                                                        data-orig-size="553,432"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="testimonial-3"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=300%2C234&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-3.jpg?fit=525%2C410&amp;ssl=1"/>
                                                                </figure>
                                                                <div className="content-box">
                                                                    <div className="icon-box"
                                                                    >
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>As a growing company, we found in Naxly
                                                                            expertise in data science invaluble In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us.</p>
                                                                    </div>
                                                                    <div className="author-info">
                                                                        <h4>Jams Shan</h4>
                                                                        <span className="designation">CEO &amp; Founder -
                                                                            Soft Solution</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item cloned" style={{width:'1034px'}} >
                                                        <div className="testimonial-content">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img loading="lazy"
                                                                        decoding="async" width="553" height="432"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?resize=553%2C432&amp;ssl=1"
                                                                        className="attachment-naxly_553x432 size-naxly_553x432 wp-post-image"
                                                                        alt=""
                                                                        srcSet="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?resize=300%2C234&amp;ssl=1 300w"
                                                                        sizes="(max-width: 525px) 100vw, 525px"
                                                                        data-attachment-id="170"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-1/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=553%2C432&amp;ssl=1"
                                                                        data-orig-size="553,432"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="testimonial-1"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=300%2C234&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-1.jpg?fit=525%2C410&amp;ssl=1"/>
                                                                </figure>
                                                                <div className="content-box">
                                                                    <div className="icon-box"
                                                                  >
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>As a growing company, we found in Naxly
                                                                            expertise in data science invaluble In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us.</p>
                                                                    </div>
                                                                    <div className="author-info">
                                                                        <h4>Dedrew Kowzel</h4>
                                                                        <span className="designation">CEO &amp; Founder -
                                                                            Soft Solution</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item cloned" style={{width:'1034px'}} >
                                                        <div className="testimonial-content">
                                                            <div className="inner-box">
                                                                <figure className="image-box"><img loading="lazy"
                                                                        decoding="async" width="553" height="432"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=553%2C432&amp;ssl=1"
                                                                        className="attachment-naxly_553x432 size-naxly_553x432 wp-post-image"
                                                                        alt=""
                                                                        srcSet="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?w=553&amp;ssl=1 553w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?resize=300%2C234&amp;ssl=1 300w"
                                                                        sizes="(max-width: 525px) 100vw, 525px"
                                                                        data-attachment-id="171"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/dedrew-kowzel/testimonial-2/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=553%2C432&amp;ssl=1"
                                                                        data-orig-size="553,432"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="testimonial-2"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=300%2C234&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-2.jpg?fit=525%2C410&amp;ssl=1"/>
                                                                </figure>
                                                                <div className="content-box">
                                                                    <div className="icon-box"
                                                                  >
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>As a growing company, we found in Naxly
                                                                            expertise in data science invaluble In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us.</p>
                                                                    </div>
                                                                    <div className="author-info">
                                                                        <h4>Donal Archar</h4>
                                                                        <span className="designation">CEO &amp; Founder -
                                                                            Soft Solution</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                            <div className="owl-nav">
                                                <div className="owl-prev" onClick={Previous}><span className=""></span></div>
                                                <div className="owl-next" onClick={next}><span className=""></span></div>
                                            </div>
                                            <div className="owl-dots">
                                                <div className="owl-dot"><span></span></div>
                                                <div className="owl-dot active"><span></span></div>
                                                <div className="owl-dot"><span></span></div>
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

export default Testimonials
