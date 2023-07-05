import React from 'react'
import pageHeaderbg from "../../../images/page-header-default.jpg"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import PageHeader from '../../page_header/pageHeader';


const containerStyle = {
    height: '450px'
};
const center = {
    lat: 31.53665384266269,
    lng: 74.30247457410296
};

const Contact = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyADcWc_NF_C-YjGA4HhyYvoD6AGsdTSK-Q"  //need to define your google api key 
    })

    // const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])




    return (
        <div className="contact-page">
            <PageHeader headerBg={pageHeaderbg} pageName="Contact" />
            <div id="content" class="site-content ">

                <section class="contact-section">
                    {/* <!--===============spacing==============--> */}
                    <div class="pd_top_90"></div>
                    {/* <!--===============spacing==============--> */}
                    <div class="container">
                        <div style={{textAlign:'left'}} class="row align-items-center">
                            <div class="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                                <div class="contact_form_box_all type_one">
                                    <div class="contact_form_box_inner">
                                        <div class="contact_form_shortcode">
                                            <form id="contact-form">
                                                <div class="messages"></div>

                                                <div class="controls">
                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <div class="form-group">
                                                                <label> Your Name<br /></label>
                                                                <input type="text" name="name" placeholder="Your Name *" required="required" data-error="Enter Your Name" />
                                                                <div class="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12">
                                                            <div class="form-group">
                                                                <label> Your Email<br /></label>
                                                                <input type="text" name="email" required="required" placeholder="Email *" data-error="Enter Your Email Id" />
                                                                <div class="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12">
                                                            <div class="form-group">
                                                                <label> Your Subject<br /></label>
                                                                <input type="text" name="subject" required="required" placeholder=" Subject  (Optional)" />
                                                            </div>
                                                        </div>


                                                        <div class="col-sm-12">
                                                            <div class="form-group">
                                                                <label> Your Message<br /></label>
                                                                <textarea name="message" placeholder="Additional Information... (Optional) " rows="3" required="required" data-error="Please, leave us a message."></textarea>
                                                                <div class="help-block with-errors"></div>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-12">
                                                            <div class="form-group mg_top apbtn">
                                                                <button class="theme_btn" type="submit">Contact Now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 pd_left_30">
                                <div class="title_all_box style_one dark_color">
                                    <div class="title_sections left">
                                        <div class="before_title">Contact Info to</div>
                                        <h2>Reach Our Expert Team</h2>
                                        <p>Send a message through given form, If your enquiry is time sensitive please use below
                                            contact details.</p>
                                    </div>
                                </div>

                                <div class="contact_box_content style_one">
                                    <div class="contact_box_inner icon_yes">
                                        <div class="icon_bx">
                                            <span class=" icon-placeholder"></span>
                                        </div>
                                        <div class="contnet">
                                            <h3> Post Address </h3>
                                            <p>
                                                384-N Samanabad, Lahore, Pakistan
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--===============spacing==============--> */}
                                <div class="pd_bottom_15"></div>
                                {/* <!--===============spacing==============--> */}
                                <div class="contact_box_content style_one">
                                    <div class="contact_box_inner icon_yes">
                                        <div class="icon_bx">
                                            <span class="icon-phone-call"></span>
                                        </div>
                                        <div class="contnet">
                                            <h3> General Enquires </h3>
                                            <p>
                                                Phone: +92 42 37587137 &amp; Email: jikhan1949@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--===============spacing==============--> */}
                                <div class="pd_bottom_15"></div>
                                {/* <!--===============spacing==============--> */}
                                <div class="contact_box_content style_one">
                                    <div class="contact_box_inner icon_yes">
                                        <div class="icon_bx">
                                            <span class="fa fa-clock-o"></span>
                                        </div>
                                        <div class="contnet">
                                            <h3> Operation Hours </h3>
                                            <p>
                                                Monday-Friday: 09.00 to 06.00 (Saturday/Sunday: Closed)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--===============spacing==============--> */}
                                <div class="pd_bottom_40"></div>
                                {/* <!--===============spacing==============--> */}
                                <div class="social_media_v_one style_two">
                                    <ul>
                                        <li>
                                            <a href="/"> <span class="fa fa-facebook"></span>
                                                <small>facebook</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/"> <span class="fa fa-twitter"></span>
                                                <small>twitter</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/"> <span class="fa fa-skype"></span>
                                                <small>skype</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/"> <span class="fa fa-instagram"></span>
                                                <small>instagram</small>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/"> <span class="fa fa-whatsapp"></span>
                                                <small>Whatsapp</small>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--===============spacing==============--> */}
                    <div class="pd_top_70"></div>
                    {/* <!--===============spacing==============--> */}
                </section>
                <section class="contact-map-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <section class="map-section">
                                    {/* <!--Map Outer--> */}
                                    <div class="map-outer">
                                        {isLoaded ? <GoogleMap
                                            mapContainerStyle={containerStyle}
                                            center={center}
                                            zoom={7}
                                            // onLoad={onLoad}
                                            // onUnmount={onUnmount}
                                        >
                                            { /* Child components, such as markers, info windows, etc. */}
                                            <></>
                                        </GoogleMap>
                                            : <></>
                                        }
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/* <!--===============spacing==============--> */}
                    <div class="pd_top_90"></div>
                    {/* <!--===============spacing==============--> */}
                </section>
                {/* <!---newsteller---> */}
                <section class="newsteller style_one bg_dark_1">
                    {/* <!--===============spacing==============--> */}
                    <div class="pd_top_40"></div>
                    {/* <!--===============spacing==============--> */}
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12">
                                <div class="content">
                                    <h2>Join Our Mailing List</h2>
                                    <p>For receiving our news and updates in your inbox directly. </p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12">
                                <div class="item_scubscribe">
                                    <div class="input_group">
                                        <form class="mc4wp-form" method="post" data-name="Subscibe">
                                            <div class="mc4wp-form-fields">
                                                <input type="email" name="EMAIL" placeholder="Your email address" required="" />
                                                <input type="submit" value="Sign up" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--===============spacing==============--> */}
                    <div class="pd_bottom_40"></div>
                    {/* <!--===============spacing==============--> */}
                </section>
                {/* <!---newsteller end---> */}
            </div>
        </div>
    )
}

export default Contact