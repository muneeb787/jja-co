import React from 'react'
import project1 from '../../images/projects/project-1-img.jpg';
import project2 from '../../images/projects/project-2-img.jpg';
import project3 from '../../images/projects/project-3-img.jpg';
import project4 from '../../images/projects/project-4-img.jpg';
import project5 from '../../images/projects/project-5-img.jpg';
import project6 from '../../images/projects/project-6-img.jpg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_area footer_five" id="footer_contents">
                <div className="footer_widgets_wrap bg_dark_2">

                    <div className="pd_top_75"></div>

                    <div className="auto-container">
                        <div style={{textAlign: 'left'}} className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2>Our Works</h2>
                                    </div>
                                </div>
                                <div className="gallery_repeater">
                                    <ul className="items_gal">
                                        <li>
                                            <span className="image">
                                                <img src={project6} className="gal" alt="Gallery" />
                                                <a href="/" target="_blank" rel="nofollow"><i className="icon-chevron-right"></i></a>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="image">
                                                <img src={project5} className="gal" alt="Gallery" />
                                                <a href="/" target="_blank" rel="nofollow"><i className="icon-chevron-right"></i></a>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="image">
                                                <img src={project4} className="gal" alt="Gallery" />
                                                <a href="/" target="_blank" rel="nofollow"><i className="icon-chevron-right"></i></a>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="image">
                                                <img src={project3} className="gal" alt="Gallery" />
                                                <a href="/" target="_blank" rel="nofollow"><i className="icon-chevron-right"></i></a>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="image">
                                                <img src={project2} className="gal" alt="Gallery" />
                                                <a href="/" target="_blank" rel="nofollow"><i className="icon-chevron-right"></i></a>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="image">
                                                <img src={project1} className="gal" alt="Gallery" />
                                                <a href="/" target="_blank" rel="nofollow"><i className="icon-chevron-right"></i></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="theme_btn_all color_one">
                                    <a href="/" target="_blank" rel="nofollow" className="theme-btn five">View All Works<i
                                        className="icon-right-arrow"></i></a>
                                </div>

                                <div className="pd_bottom_40"></div>

                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2>Informations</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu">
                                                <li className="menu-item"><a href="/">Services</a></li>
                                                <li className="menu-item"><a href="/">Infrastructure</a></li>
                                                <li className="menu-item"><a href="/">Client Support</a></li>
                                                <li className="menu-item"><a href="/">Privacy policy</a></li>
                                                <li className="menu-item"><a href="/">Terms of use</a></li>
                                                <li className="menu-item"><a href="/">Sitemap</a></li>
                                                <li className="menu-item"><a href="/">Careers</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="pd_bottom_40"></div>

                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2>Get In Touch</h2>
                                    </div>
                                </div>
                                <div className="footer_contact_list light_color type_one">
                                    <div className="same_contact address">
                                        <span className="icon-location2"></span>
                                        <div className="content">
                                            <h6 className="titles">Address</h6>
                                            <p>384-N Samanabad, Lahore, Pakistan</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer_contact_list light_color type_one">
                                    <div className="same_contact mail">
                                        <span className="icon-mail"></span>
                                        <div className="content">
                                            <h6 className="titles">Mail Us</h6>
                                            <a href="mailto:jikhan1949@gmail.com">jikhan1949@gmail.com</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="pd_bottom_20"></div>

                                <div className="footer_contact_list light_color type_one">
                                    <div className="same_contact phone">
                                        <span className="icon-telephone"></span>
                                        <div className="content">
                                            <h6 className="titles"> Phone</h6>
                                            <a href="tel:+92 333 4792968 ">+92 333 4792968 </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="pd_bottom_40"></div>

                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_two">
                                    <div className="fo_wid_title">
                                        <h2>Subscribe Us Today</h2>
                                    </div>
                                </div>
                                <div className="footer_widgets foo_subscribe light_color style_one">
                                    <div className="item_subscribe with_text">
                                        <p>Subscribe Us &amp; Recive Our Offers and Updates i Your Inbox Directly.</p>
                                        <div className="shortcodes">

                                            <form className="mc4wp-form" method="post" data-name="Subscibe">
                                                <div className="mc4wp-form-fields">
                                                    <input type="email" name="EMAIL" placeholder="Your email address" required="" />
                                                    <input type="submit" value="Sign up" />
                                                </div>
                                            </form>

                                        </div>
                                        <p>* We do not share your email id</p>
                                    </div>
                                </div>
                                <div className="social_media_v_one light">
                                    <ul>
                                        <li>
                                            <a href="/"> <span className="fa fa-facebook"></span>
                                                <small>facebook</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/"> <span className="fa fa-twitter"></span>
                                                <small>twitter</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/"> <span className="fa fa-instagram"></span>
                                                <small>instagram</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/"> <span className="fa fa-whatsapp"></span>
                                                <small>whatsapp</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/"> <span className="fa fa-linkedin"></span>
                                                <small>linkedin</small>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pd_bottom_40"></div>

                            </div>
                        </div>
                    </div>

                    <div className="pd_bottom_35"></div>

                </div>
                <div className="footer-copyright bg_dark_1">

                    <div className="pd_top_15"></div>

                    <div className="auto-container">
                        <div className="footer_copy_right">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <ul className="list_items_new_box type_one  display_inline">
                                        <li>
                                            <a href="/" className="color_white">
                                                <span className="fa fa-check-circle icon color_white"></span>
                                                Terms of use
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="color_white">
                                                <span className="fa fa-check-circle icon color_white"></span>
                                                Sitemap
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="color_white">
                                                <span className="fa fa-check-circle icon color_white"></span>
                                                Careers
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 text-md-end">
                                    <div className="footer_copy_content color_white">© 2023 <a
                                        href="https://themeforest.net/user/steelthemes" className="color_white">Steelthemes.</a> All Rights Reserved.</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="pd_bottom_5"></div>

                </div>
            </div>
        </div>
    )
}

export default Footer