import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';

const Testimonials1 = () => {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const Previous = () => {
      sliderRef.slickPrev();
    };
   
    const [transform, setTransform] = useState("translate3d(-0px, -510px, 0px)");
useEffect(() => {
  const handleResize = () => {
if (window.innerWidth >= 1400) {
        setTransform('translate3d(-0px, -510px, 0px)');
      } else if (window.innerWidth >= 1026) {
        setTransform('translate3d(-0px, -510px, 0px)');
      } else if (window.innerWidth >= 565) {
        setTransform('translate3d(-0px, -10px, 0px)');
      } else if (window.innerWidth >= 479) {
        setTransform('translate3d(-0px, -60px, 0px)');
      } else if (window.innerWidth >= 300) {
        setTransform('translate3d(-0px, -10px, 0px)');
      } else {
        setTransform('translate3d(-0px, -60px, 0px)');
      }
}

  window.addEventListener('resize', handleResize);
  handleResize();
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}  , []);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
responsive: [
           
         
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
           
          ],
        
      };
return (
<section >

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ba5fee4"
            data-id="ba5fee4" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-fbbf2d0 elementor-widget elementor-widget-naxly_tk_testimonials"
                    data-id="fbbf2d0" data-element_type="widget" data-widget_type="naxly_tk_testimonials.default">
                    <div class="elementor-widget-container">

                        <section class="client-testi-section">
                            <div class="pattern-layer"
                                style={{backgroundImage:'url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-bg-shape-3.png)'}}>
                            </div>
                            <div class="auto-container">

                                <div class="row">
                                    <div class="col-lg-2">

                                    </div>
                                    <div class="col-lg-8">

                                        <div class="bx-wrapper" style={{maxWidth:"100%"}}>
                                            <div class="bx-viewport"
                                                style={{width:' 100%',overflow: "hidden" ,position: 'relative', height: '467px'}}>
                                                <div class="bxslider testimonial_new_bx"
                                                    style={{width: 'auto', position: 'relative',transitionDuration: '0s', transform:`${transform}`}}>
                                                         <Slider  {...settings}  ref={slider => {
          sliderRef = slider;
        }}> 
                                                    <div class="bx_item bx-clone"
                                                        style={{float: 'none', listStyle: 'none', position: 'relative', width: '918.8px'}}>

                                                        <div class="testi_box_content">
                                                            <div class="testi_box_content_outer">
                                                                <div class="person_box">
                                                                    <img loading="lazy" decoding="async" width="178"
                                                                        height="180"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=178%2C180&amp;ssl=1"
                                                                        class="img-fluid wp-post-image" alt=""
                                                                        srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?w=178&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=70%2C70&amp;ssl=1 70w"
                                                                        sizes="(max-width: 178px) 100vw, 178px"
                                                                        data-attachment-id="1301"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/cuthbert-brain-2/home-6-testi-box-4/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?fit=178%2C180&amp;ssl=1"
                                                                        data-orig-size="178,180"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="home-6-testi-box-4"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?fit=178%2C180&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?fit=178%2C180&amp;ssl=1" />
                                                                </div>
                                                                <div class="testi_box_content_inner">
                                                                    <div class="content_box">
                                                                        <p>As a growing company, we found in Naxly’
                                                                            expertise in data science invaluable. In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us define our data.</p>
                                                                        <h2>Cuthbert Brain</h2>
                                                                        <h6>CEO &amp; Founder - Soft Solution</h6>
                                                                    </div>
                                                                    <span class="flaticon-quote quote_icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bx_item"
                                                        style={{float: 'none', position: 'relative', width: '918.8px',listStyle:'none'}}>
                                                        <div class="testi_box_content">
                                                            <div class="testi_box_content_outer">
                                                                <div class="person_box">
                                                                    <img decoding="async" width="178" height="180"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=178%2C180&amp;ssl=1"
                                                                        class="img-fluid wp-post-image" alt=""
                                                                        srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?w=178&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=70%2C70&amp;ssl=1 70w"
                                                                        sizes="(max-width: 178px) 100vw, 178px"
                                                                        data-attachment-id="1298"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/cuthbert-brain-2/home-6-testi-box-1/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?fit=178%2C180&amp;ssl=1"
                                                                        data-orig-size="178,180"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="home-6-testi-box-1"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?fit=178%2C180&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?fit=178%2C180&amp;ssl=1" />
                                                                </div>
                                                                <div class="testi_box_content_inner">
                                                                    <div class="content_box">
                                                                        <p>As a growing company, we found in Naxly’
                                                                            expertise in data science invaluable. In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us define our data.</p>
                                                                        <h2>Cuthbert Brain</h2>
                                                                        <h6>CEO &amp; Founder - Soft Solution</h6>
                                                                    </div>
                                                                    <span class="flaticon-quote quote_icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bx_item"
                                                        style={{float: 'none', listStyle: 'none', position: 'relative', width: '918.8px'}}>
                                                        <div class="testi_box_content">
                                                            <div class="testi_box_content_outer">
                                                                <div class="person_box">
                                                                    <img decoding="async" width="178" height="180"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=178%2C180&amp;ssl=1"
                                                                        class="img-fluid wp-post-image" alt=""
                                                                        srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?w=178&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=70%2C70&amp;ssl=1 70w"
                                                                        sizes="(max-width: 178px) 100vw, 178px"
                                                                        data-attachment-id="1299"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/cuthbert-brain-2/home-6-testi-box-2/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?fit=178%2C180&amp;ssl=1"
                                                                        data-orig-size="178,180"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="home-6-testi-box-2"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?fit=178%2C180&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?fit=178%2C180&amp;ssl=1" />
                                                                </div>
                                                                <div class="testi_box_content_inner">
                                                                    <div class="content_box">
                                                                        <p>As a growing company, we found in Naxly’
                                                                            expertise in data science invaluable. In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us define our data.</p>
                                                                        <h2>Cuthbert Brain</h2>
                                                                        <h6>CEO &amp; Founder - Soft Solution</h6>
                                                                    </div>
                                                                    <span class="flaticon-quote quote_icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bx_item"
                                                        style={{float: 'none', listStyle: 'none', position: 'relative', width: '918.8px'}}>
                                                        <div class="testi_box_content">
                                                            <div class="testi_box_content_outer">
                                                                <div class="person_box">
                                                                    <img decoding="async" width="178" height="180"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=178%2C180&amp;ssl=1"
                                                                        class="img-fluid wp-post-image" alt=""
                                                                        srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?w=178&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=70%2C70&amp;ssl=1 70w"
                                                                        sizes="(max-width: 178px) 100vw, 178px"
                                                                        data-attachment-id="1300"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/cuthbert-brain-2/home-6-testi-box-3/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?fit=178%2C180&amp;ssl=1"
                                                                        data-orig-size="178,180"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="home-6-testi-box-3"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?fit=178%2C180&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?fit=178%2C180&amp;ssl=1" />
                                                                </div>
                                                                <div class="testi_box_content_inner">
                                                                    <div class="content_box">
                                                                        <p>As a growing company, we found in Naxly’
                                                                            expertise in data science invaluable. In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us define our data.</p>
                                                                        <h2>Cuthbert Brain</h2>
                                                                        <h6>CEO &amp; Founder - Soft Solution</h6>
                                                                    </div>
                                                                    <span class="flaticon-quote quote_icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="bx_item"
                                                        style={{float: 'none', listStyle: 'none', position: 'relative', width: '918.8px'}}>
                                                        <div class="testi_box_content">
                                                            <div class="testi_box_content_outer">
                                                                <div class="person_box">
                                                                    <img loading="lazy" decoding="async" width="178"
                                                                        height="180"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=178%2C180&amp;ssl=1"
                                                                        class="img-fluid wp-post-image" alt=""
                                                                        srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?w=178&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=70%2C70&amp;ssl=1 70w"
                                                                        sizes="(max-width: 178px) 100vw, 178px"
                                                                        data-attachment-id="1301"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/cuthbert-brain-2/home-6-testi-box-4/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?fit=178%2C180&amp;ssl=1"
                                                                        data-orig-size="178,180"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="home-6-testi-box-4"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?fit=178%2C180&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?fit=178%2C180&amp;ssl=1" />
                                                                </div>
                                                                <div class="testi_box_content_inner">
                                                                    <div class="content_box">
                                                                        <p>As a growing company, we found in Naxly’
                                                                            expertise in data science invaluable. In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us define our data.</p>
                                                                        <h2>Cuthbert Brain</h2>
                                                                        <h6>CEO &amp; Founder - Soft Solution</h6>
                                                                    </div>
                                                                    <span class="flaticon-quote quote_icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </Slider  > 
                                                    <div class="bx_item bx-clone"
                                                        style={{float: 'none', listStyle: 'none', position: 'relative', width: '918.8px'}}>
                                                        <div class="testi_box_content">
                                                            <div class="testi_box_content_outer">
                                                                <div class="person_box">
                                                                    <img decoding="async" width="178" height="180"
                                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=178%2C180&amp;ssl=1"
                                                                        class="img-fluid wp-post-image" alt=""
                                                                        srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?w=178&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=70%2C70&amp;ssl=1 70w"
                                                                        sizes="(max-width: 178px) 100vw, 178px"
                                                                        data-attachment-id="1298"
                                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/cuthbert-brain-2/home-6-testi-box-1/"
                                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?fit=178%2C180&amp;ssl=1"
                                                                        data-orig-size="178,180"
                                                                        data-comments-opened="1"
                                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                                        data-image-title="home-6-testi-box-1"
                                                                        data-image-description="" data-image-caption=""
                                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?fit=178%2C180&amp;ssl=1"
                                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?fit=178%2C180&amp;ssl=1" />
                                                                </div>
                                                                <div class="testi_box_content_inner">
                                                                    <div class="content_box">
                                                                        <p>As a growing company, we found in Naxly’
                                                                            expertise in data science invaluable. In
                                                                            almost two years of cooperation, they’ve
                                                                            helped us define our data.</p>
                                                                        <h2>Cuthbert Brain</h2>
                                                                        <h6>CEO &amp; Founder - Soft Solution</h6>
                                                                    </div>
                                                                    <span class="flaticon-quote quote_icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bx-controls bx-has-controls-direction">
                                                <div class="bx-controls-direction"><a class="bx-prev" ><i
                                                            class="flaticon-next" onClick={next}></i></a><a class="bx-next" ><i
                                                            class="flaticon-next" onClick={Previous}></i></a></div>
                                            </div>
                                        </div>

                                        <div class="bx-pager">
                                            <a data-slide-index="0" href="" class="wow flipInY animated active"
                                                data-wow-delay="100ms" data-wow-duration="2500ms"
                                                style={{visibility:'visible',animationDuration:'2500ms',animationDelay:'100ms',animationName:'flipInY'}}>
                                                <span class=" bx_pagination"><img loading="lazy" decoding="async"
                                                        width="160" height="161"
                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=160%2C161&amp;ssl=1"
                                                        class="img-fluid wp-post-image" alt=""
                                                        srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?w=178&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?resize=70%2C70&amp;ssl=1 70w"
                                                        sizes="(max-width: 160px) 100vw, 160px"
                                                        data-attachment-id="1298"
                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/cuthbert-brain-2/home-6-testi-box-1/"
                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?fit=178%2C180&amp;ssl=1"
                                                        data-orig-size="178,180" data-comments-opened="1"
                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                        data-image-title="home-6-testi-box-1" data-image-description=""
                                                        data-image-caption=""
                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?fit=178%2C180&amp;ssl=1"
                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-1.png?fit=178%2C180&amp;ssl=1" /></span>
                                            </a>
                                            <a data-slide-index="1" href="" class="wow flipInY animated"
                                                data-wow-delay="100ms" data-wow-duration="2500ms"
                                                style={{visibility:'visible',animationDuration:'2500ms',animationDelay:'100ms',animationName:'flipInY'}}>
                                                <span class=" bx_pagination"><img loading="lazy" decoding="async"
                                                        width="160" height="161"
                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=160%2C161&amp;ssl=1"
                                                        class="img-fluid wp-post-image" alt=""
                                                        srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?w=178&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?resize=70%2C70&amp;ssl=1 70w"
                                                        sizes="(max-width: 160px) 100vw, 160px"
                                                        data-attachment-id="1299"
                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/cuthbert-brain-2/home-6-testi-box-2/"
                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?fit=178%2C180&amp;ssl=1"
                                                        data-orig-size="178,180" data-comments-opened="1"
                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                        data-image-title="home-6-testi-box-2" data-image-description=""
                                                        data-image-caption=""
                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?fit=178%2C180&amp;ssl=1"
                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-2.png?fit=178%2C180&amp;ssl=1" /></span>
                                            </a>
                                            <a data-slide-index="2" href="" class="wow flipInY animated"
                                                data-wow-delay="100ms" data-wow-duration="2500ms"
                                                style={{visibility:'visible',animationDuration:'2500ms',animationDelay:'100ms',animationName:'flipInY'}}>
                                                <span class=" bx_pagination"><img loading="lazy" decoding="async"
                                                        width="160" height="161"
                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=160%2C161&amp;ssl=1"
                                                        class="img-fluid wp-post-image" alt=""
                                                        srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?w=178&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?resize=70%2C70&amp;ssl=1 70w"
                                                        sizes="(max-width: 160px) 100vw, 160px"
                                                        data-attachment-id="1300"
                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/cuthbert-brain-2/home-6-testi-box-3/"
                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?fit=178%2C180&amp;ssl=1"
                                                        data-orig-size="178,180" data-comments-opened="1"
                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                        data-image-title="home-6-testi-box-3" data-image-description=""
                                                        data-image-caption=""
                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?fit=178%2C180&amp;ssl=1"
                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-3.png?fit=178%2C180&amp;ssl=1" /></span>
                                            </a>
                                            <a data-slide-index="3" href="" class="wow flipInY animated"
                                                data-wow-delay="100ms" data-wow-duration="2500ms"
                                                style={{visibility:'visible',animationDuration:'2500ms',animationDelay:'100ms',animationName:'flipInY'}}>
                                                <span class=" bx_pagination"><img loading="lazy" decoding="async"
                                                        width="160" height="161"
                                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=160%2C161&amp;ssl=1"
                                                        class="img-fluid wp-post-image" alt=""
                                                        srcset="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?w=178&amp;ssl=1 178w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=140%2C140&amp;ssl=1 140w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=80%2C80&amp;ssl=1 80w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=105%2C105&amp;ssl=1 105w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=85%2C85&amp;ssl=1 85w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=160%2C161&amp;ssl=1 160w, https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?resize=70%2C70&amp;ssl=1 70w"
                                                        sizes="(max-width: 160px) 100vw, 160px"
                                                        data-attachment-id="1301"
                                                        data-permalink="https://naxly.wpcomstaging.com/naxly_testimonials/cuthbert-brain-2/home-6-testi-box-4/"
                                                        data-orig-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?fit=178%2C180&amp;ssl=1"
                                                        data-orig-size="178,180" data-comments-opened="1"
                                                        data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                                                        data-image-title="home-6-testi-box-4" data-image-description=""
                                                        data-image-caption=""
                                                        data-medium-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?fit=178%2C180&amp;ssl=1"
                                                        data-large-file="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/12/home-6-testi-box-4.png?fit=178%2C180&amp;ssl=1" /></span>
                                            </a>

                                        </div>

                                    </div>
                                    <div class="col-lg-2">

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

export default Testimonials1