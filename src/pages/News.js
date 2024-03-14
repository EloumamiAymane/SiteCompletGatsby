import React from 'react'
import {NewsUpdate} from "../Components/Cards/NewsUpdate";
import news1 from '../images/news/news-1.jpg'
import news2 from '../images/news/news-2.jpg'
import news3 from '../images/news/news-3.jpg'

const News = () => {
return (
<section>

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fae9c34"
            data-id="fae9c34" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-bd86b57 elementor-widget elementor-widget-naxly_tk_latest_news_v2"
                    data-id="bd86b57" data-element_type="widget" data-widget_type="naxly_tk_latest_news_v2.default">
                    <div className="elementor-widget-container">

                        <section className="latest_news_section_two">

                            <div className="lower-content">
                                <div className="auto-container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="sec-title text-left">
                                                <p>NEWS &amp; UPDATES</p>
                                                <h2>Company news &amp; updates</h2>
                                                <div className="decor"
                                                >
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="view_all_btn text-right">
                                                <a href="http://el.commonsupport.com/newwp/naxly/classic-grid/"
                                                    className="theme-btn style-thirteen">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                          <NewsUpdate image={news1}/>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <NewsUpdate image={news2}/>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <NewsUpdate image={news3}/>
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

export default News
