import React from 'react'
import {NewsItem} from "../Components/Cards/NewsItem";
import news1 from "../images/news/news-1.jpg"
import news2 from "../images/news/news-2.jpg"
import news3 from "../images/news/news-3.jpg"

const NewsUpdate = () => {
return (
<section className="elementor-section elementor-top-section elementor-element elementor-element-c12456c elementor-section-full_width elementor-section-height-default elementor-section-height-default">

    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c1e841a"
            data-id="c1e841a" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-11a4fe2 elementor-widget elementor-widget-naxly_latest_news_v2"
                    data-id="11a4fe2" data-element_type="widget" data-widget_type="naxly_latest_news_v2.default">
                    <div className="elementor-widget-container">

                        <section className="news-section style-two">
                            <div className="auto-container">
                                <div className="sec-title text-center style-two mb-60">
                                    <p>News &amp; Updates</p>
                                    <h2>Latest thinking in AI and our <br/>
                                        company news</h2>
                                    <div className="decor"
                                    >
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                      <NewsItem image={news1}/>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                        <NewsItem image={news2}/>

                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                        <NewsItem image={news3}/>
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

export default NewsUpdate
