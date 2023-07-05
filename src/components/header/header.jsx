import React from 'react'
import { Link } from "react-router-dom";
import jjaLogo from "../../images/jja-logo-1.png"
import $ from 'jquery'



const Header = () => {

    const mobileMenu = () => {


        if ($('.crt_mobile_menu').length) {
            var mobileMenuContent = $('.header  .header_content_collapse .navigation_menu').html();
            $('.crt_mobile_menu .menu-box .menu-outer').append(mobileMenuContent);

            //Menu Toggle Btn
            $('.navbar_togglers').on('click', function () {
                $('body').toggleClass('crt_mobile_menu-visible');
            });
            //Menu Toggle Btn
            $('.crt_mobile_menu .menu-backdrop,.crt_mobile_menu .close-btn').on('click', function () {
                $('body').removeClass('crt_mobile_menu-visible');
            });
        }
        $(function () {
            $('.crt_mobile_menu li.dropdown .dropdown-btn').on('click', function (event) {
                event.preventDefault();
                $(this).toggleClass('open');
                $(this).parent().find('ul.dropdown-menu').first().toggle(300);

                $(this).parent().siblings().find('ul.dropdown-menu').hide(200);

                //Hide menu when clicked outside
                $(this).parent().find('ul.dropdown-menu').parent().mouseleave(function () {
                    var thisUI = $(this);
                    $('html').click(function () {
                        thisUI.children(".dropdown-menu").hide();
                        thisUI.children("span").removeClass('open');

                        $('html').unbind('click');
                    });
                });
            });
        });
    }
    function headerStyle() {
        if($('body').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('body');
            if (windowpos >= 250) {
                siteHeader.addClass('fixed-header');
            } else {
                siteHeader.removeClass('fixed-header');
            }
        }
    }
    $(window).on('scroll', function() {
        headerStyle();
    });
    return (
        <div className="header_area" id="header_contents">
            <header className="main-header header header_v13">
                <div className="header_top">
                    <div className="default-container">
                        <div className="header_top_inner">
                            <div className="top_left">
                                <ul className="top-links clearfix">
                                    <li>
                                        <Link to="contact" className="get_a_quote">Get a quote </Link>
                                    </li>
                                    <li>Welcome to our consulting company.</li>
                                </ul>
                            </div>
                            <div className="top_right text-right">
                                <ul className="contact_info_two">
                                    <li className="single">
                                        <p> <span className="icon-telephone"></span> <a href="tel:+92 333 4792968">+92 333 4792968</a>
                                        </p>
                                    </li>
                                    <li className="single">
                                        <p><span className="icon-mail"></span><Link
                                            to="mailto:sendmail@creote.com">jikhan1949@gmail.com</Link>
                                        </p>
                                    </li>
                                    <li className="single">
                                        <p> <span className="icon-location2"></span>
                                            384-N Samanabad, Lahore, Pakistan </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar_outer get_sticky_header">
                    <div className="default-container">
                        <nav className="inner_box">
                            <div className="header_logo_box">
                                <Link to="/" className="logo navbar-brand">
                                    <img style={{ width: '30vw' }} src={jjaLogo} alt="Javed Jalal Amjed & Co." className="logo_default" />
                                    <img style={{ width: '30vw' }} src={jjaLogo} alt="Javed Jalal Amjed & Co." className="logo__sticky" />
                                </Link>
                            </div>
                            <div onClick={mobileMenu} className="navbar_togglers hamburger_menu">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                            <div className="header_content header_content_collapse">
                                <div className="header_menu_box">
                                    <div className="navigation_menu">
                                        <ul id="myNavbar" className="navbar_nav">
                                            <li className="menu-item nav-item">
                                                <Link to="/" className="dropdown-toggle nav-link">
                                                    <span>Home</span>
                                                </Link>
                                            </li>
                                            <li className="menu-item nav-item">
                                                <Link to="/" className="dropdown-toggle nav-link">
                                                    <span>About</span>
                                                </Link>
                                            </li>
                                            <li className="menu-item menu-item-has-children dropdown nav-item">
                                                <Link to="/" className="dropdown-toggle nav-link">
                                                    <span>Services</span>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="menu-item menu-item-has-children dropdown nav-item">
                                                        <Link to="service-default.html"
                                                            className="dropdown-item nav-link"><span>Audit & Assurance</span></Link>
                                                        <ul className="dropdown-menu">
                                                            <li className="menu-item  nav-item">
                                                                <Link to="service-classic.html"
                                                                    className="dropdown-item nav-link">
                                                                    <span>Assurance Engagements</span>
                                                                </Link>
                                                            </li>
                                                            <li className="menu-item  nav-item">
                                                                <Link to="service-classic.html"
                                                                    className="dropdown-item nav-link">
                                                                    <span>Review Engagements</span>
                                                                </Link>
                                                            </li>
                                                            <li className="menu-item  nav-item">
                                                                <Link to="service-classic.html"
                                                                    className="dropdown-item nav-link">
                                                                    <span>Other Related Engagements</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                                    </li>
                                                    <li className="menu-item menu-item-has-children dropdown nav-item">
                                                        <Link to="service-default.html"
                                                            className="dropdown-item nav-link"><span>Taxation</span></Link>
                                                        <ul className="dropdown-menu">
                                                            <li className="menu-item  nav-item">
                                                                <Link to="service-classic.html"
                                                                    className="dropdown-item nav-link">
                                                                    <span>Income Tax</span>
                                                                </Link>
                                                            </li>
                                                            <li className="menu-item  nav-item">
                                                                <Link to="service-classic.html"
                                                                    className="dropdown-item nav-link">
                                                                    <span>Federal Sales Tax</span>
                                                                </Link>
                                                            </li>
                                                            <li className="menu-item  nav-item">
                                                                <Link to="service-classic.html"
                                                                    className="dropdown-item nav-link">
                                                                    <span>Provincial Sales Tax</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                                    </li>
                                                    <li className="menu-item menu-item-has-children dropdown nav-item">
                                                        <Link to="service-default.html"
                                                            className="dropdown-item nav-link"><span>Corporate</span></Link>
                                                        <ul className="dropdown-menu">
                                                            <li className="menu-item  nav-item">
                                                                <Link to="service-classic.html"
                                                                    className="dropdown-item nav-link">
                                                                    <span>Company Registration</span>
                                                                </Link>
                                                            </li>
                                                            <li className="menu-item  nav-item">
                                                                <Link to="service-classic.html"
                                                                    className="dropdown-item nav-link">
                                                                    <span>Annual Filings</span>
                                                                </Link>
                                                            </li>
                                                            <li className="menu-item  nav-item">
                                                                <Link to="service-classic.html"
                                                                    className="dropdown-item nav-link">
                                                                    <span>Other Coporate Services</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                                    </li>
                                                    <li className="menu-item  nav-item">
                                                        <Link to="faqs.html" className="dropdown-item nav-link">
                                                            <span>Business Advisory</span>
                                                        </Link>
                                                    </li>
                                                    <li className="menu-item  nav-item">
                                                        <Link to="faqs.html" className="dropdown-item nav-link">
                                                            <span>Accounting & Finance</span>
                                                        </Link>
                                                    </li>
                                                    <li className="menu-item  nav-item">
                                                        <Link to="contact.html" className="dropdown-item nav-link">
                                                            <span>BookKeeping</span>
                                                        </Link>
                                                    </li>
                                                    <li className="menu-item  nav-item">
                                                        <Link to="coming-soon.html" className="dropdown-item nav-link">
                                                            <span>Other Services</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                            </li>
                                            <li className="menu-item nav-item">
                                                <Link to="/" className="dropdown-toggle nav-link">
                                                    <span>Industries</span>
                                                </Link>
                                            </li>
                                            <li className="menu-item menu-item-has-children dropdown nav-item">
                                                <Link to="" className="dropdown-toggle nav-link">
                                                    <span>Career</span>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="menu-item  nav-item">
                                                        <Link to="/empPortal" className="dropdown-item nav-link">
                                                            <span>Employment Portal</span>
                                                        </Link>
                                                    </li>
                                                    <li className="menu-item  nav-item">
                                                        <Link to="/stuPortal" className="dropdown-item nav-link">
                                                            <span>Student Portal</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                            </li>
                                            <li className="menu-item nav-item">
                                                <Link to="/contact" className="dropdown-toggle nav-link">
                                                    <span>Contact</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="navbar_right navbar_nav ">
                                    <li>
                                        <button type="button" className="contact-toggler">
                                            <i className="icon-menu1"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="crt_mobile_menu">
                <div className="menu-backdrop"></div>
                <nav className="menu-box">
                    <div className="close-btn"><i className="icon-close"></i></div>
                    <form role="search" method="get" action="#">
                        <input type="search" className="search" placeholder="Search..." name="s" title="Search" />
                        <button type="submit" className="sch_btn"> <i className="icon-search"></i></button>
                    </form>
                    <div className="menu-outer">
                        {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header