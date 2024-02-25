import  React, { useState } from "react"



const About1 = () => {
    const [activeTab, setActiveTab] = useState(0); // Initially set the active tab to 1
const [active,setActive]=useState("")
  const handleTabClick = (index) => {
    setActive("active-btn")
    setActiveTab(index); // Update the active tab when a tab button is clicked
  };
    return (
        <section class="elementor-section elementor-top-section elementor-element elementor-element-d216883 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="d216883" data-element_type="section">


            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-43a92fd" data-id="43a92fd" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-5831279 elementor-widget elementor-widget-naxly_about_company" data-id="5831279" data-element_type="widget" data-widget_type="naxly_about_company.default">
                            <div class="elementor-widget-container">

                                {/* <!-- about-section --> */}
                                <section class="about-section ">
                                    <div class="auto-container">
                                        <div class="tabs-box">
                                            <div class="tabs-content" id="content_block_01">
                                                {activeTab === 0 &&  <div class="tab active-tab " id="tab-0">
                                                    <div class="row clearfix">
                                                        <div class="col-lg-4 col-md-6 col-sm-12 content-column">
                                                            <div class="content-box">
                                                                <div class="sec-title text-left">
                                                                    <p>Reseaux & Opportunités </p>
                                                                    <h2>Réseau : Succès Assuré</h2>
                                                                    <div class="decor"style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png)' }}></div>
                                                                </div>
                                                                <div class="text">
                                                                    <p> Accédez à un réseau dynamique pour des opportunités exclusives et des conseils d'experts. Votre avenir commence ici</p>
                                                                </div>
                                                                <ul class="list-item clearfix">
                                                                    <li><span class="dots"></span>Réseautage professionnel ciblé et efficace.</li>
                                                                    <li><span class="dots"></span>Opportunités de carrière personnalisées.</li>
                                                                    <li><span class="dots"></span>Mentorat expert pour guider votre succès.</li>
                                                                    <li><span class="dots"></span>Événements exclusifs pour développer vos relations.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-8 col-md-6 col-sm-12 inner-column">
                                                            <div class="inner-box">
                                                                <div class="video-inner"  style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/video-1.jpg)' }}>
                                                                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image" data-caption=""><i class="flaticon-play-button"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>}
                                               
                                                {activeTab === 1 &&  <div class="tab active-tab" id="tab-1">
                                                <div class="row clearfix">
                                                        <div class="col-lg-4 col-md-6 col-sm-12 content-column">
                                                            <div class="content-box">
                                                                <div class="sec-title text-left">
                                                                    <p>Reseaux & Opportunités </p>
                                                                    <h2>Explorez: Osez l'Infini</h2>
                                                                    <div class="decor" style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png)' }}></div>
                                                                </div>
                                                                <div class="text">
                                                                    <p> Découvrez de nouvelles opportunités et élargissez vos perspectives professionnelles. Le monde est votre terrain de jeu</p>
                                                                </div>
                                                                <ul class="list-item clearfix">
                                                                    <li><span class="dots"></span>Exploration de carrière diversifiée et stimulante.</li>
                                                                    <li><span class="dots"></span>Accès à des opportunités internationales et multiculturelles.</li>
                                                                    <li><span class="dots"></span>Formation continue pour une croissance professionnelle constante.</li>
                                                                    <li><span class="dots"></span>Connexions mondiales pour des opportunités à l'échelle internationale</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-8 col-md-6 col-sm-12 inner-column">
                                                            <div class="inner-box">
                                                                <div class="video-inner" style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/video-1.jpg)' }}>
                                                                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image" data-caption=""><i class="flaticon-play-button"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> }
                                                {activeTab == 2 && <div class="tab active-tab " id="tab-2">
                                                    <div class="row clearfix">
                                                        <div class="col-lg-4 col-md-6 col-sm-12 content-column">
                                                            <div class="content-box">
                                                                <div class="sec-title text-left">
                                                                    <p>Reseaux & Opportunités </p>
                                                                    <h2>Success Story: Votre Chapitre Commence</h2>
                                                                    <div class="decor" style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png)' }}></div>
                                                                </div>
                                                                <div class="text">
                                                                    <p>Bâtissez votre héritage professionnel avec notre soutien et une communauté engagée. Écrivez votre propre histoire de succès.</p>
                                                                </div>
                                                                <ul class="list-item clearfix">
                                                                    <li><span class="dots"></span>Soutien personnalisé pour chaque étape de votre carrière.</li>
                                                                    <li><span class="dots"></span>Accès à des mentors inspirants et des modèles de réussite.</li>
                                                                    <li><span class="dots"></span>Communauté d'anciens étudiants unie pour le succès collectif.</li>
                                                                    <li><span class="dots"></span>Outils et ressources pour transformer vos ambitions en réalité.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-8 col-md-6 col-sm-12 inner-column">
                                                            <div class="inner-box">
                                                                <div class="video-inner" style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/video-1.jpg)' }}>
                                                                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image" data-caption=""><i class="flaticon-play-button"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> } 
                                                
                                            </div>
                                            <div class="tab-btn-box">
                                                <ul class="tab-btns tab-buttons clearfix">
                                                    <li class={`${activeTab === 0 ? `tab-btn ${active} `:'tab-btn'} `} data-tab="#tab-0" onClick={() => handleTabClick(0)}><h4>Succès Connecté</h4></li>
                                                    <li class={`${activeTab === 1 ? `tab-btn ${active} `:'tab-btn'} `} data-tab="#tab1" onClick={() => handleTabClick(1)}><h4>Horizons Illimités</h4></li>
                                                    <li class={`${activeTab === 2 ? `tab-btn ${active} `:'tab-btn'} `} data-tab="#tab-2" onClick={() => handleTabClick(2)}><h4>Légende Personnelle</h4></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- about-section end --> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About1
