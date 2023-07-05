import React from 'react'
import PageHeader from '../../page_header/pageHeader'
import pageHeaderbg from "../../../images/page-header-default.jpg"
import "./career.css"
const EmploymentPortal = () => {
    return (
        <div className="career">
            <PageHeader headerBg={pageHeaderbg} pageName="Employment Portal" />
            {/* <!--===============spacing==============--> */}
            <div className="pd_top_90"></div>
            {/* <!--===============spacing==============--> */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div style={{ textAlign: "left" }} className="col-12">
                            <h5>Welcome to Employment Portal</h5>
                        </div>
                        <div className="col-12">
                            <div style={{ textAlign: "justify" }} className="p">
                                As an employer we believe that our people are not only our biggest asset; they are also our greatest investment into our future, fundamental to our long-term growth and success. Consequently, we go the extra mile in equipping them with the skills necessary for their professional growth, rewarding them for outstanding performance and providing them with a world class environment to deliver their very best.
                                Our philosophy towards trainee staff and articulated persons is to develop them so that they could easily handle the professional work challenges. We maintain a friendly environment in our organization. By the completion of the training period, we produce leaders who believe in their abilities and who inspire the entrepreneurs by their actions and strength.
                                We conduct regular training sessions which help our people to get the practical insights of work matters. Throughout the year, we conduct different recreational events. We plan trips in different regions of Pakistan. We conduct inter departments events and activities. We also maintain proper exam leave policy for our people. Any trainee can discuss work matters with senior staff and partners of the firm.
                                If you are associated with the professional bodies including CA, ACMA, ACCA and MBA then step inside the JJA & Co world where you will find great people working with an invigorated spirit of teamwork, driving exceptional results, and creating powerful impact nationwide and beyond.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="">
                                <div className="">
                                    <div className="contact_form_shortcode">
                                        <form id="contact-form">
                                            <div className="messages"></div>
                                            <div className="controls">
                                                <div style={{ textAlign: "left" }} className="row">
                                                    <form className="row g-3">
                                                        <div className="col-md-6">
                                                            <label for="fname" className="form-label">First Name <span className='mandatory'>*</span></label>
                                                            <input type="text" name='fname' required="required" placeholder='Your First Name' className="form-control" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label for="lname" className="form-label">Last Name <span className='mandatory'>*</span></label>
                                                            <input type="text" name='lname' required="required" placeholder='Your Last Name' className="form-control" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label for="email" className="form-label">Email <span className='mandatory'>*</span></label>
                                                            <input type="email" name='email' placeholder='youremail@domain.com' required="required" className="form-control" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label for="phnumber" className="form-label">Phone Number <span className='mandatory'>*</span></label>
                                                            <input type="tel" name='phnumber' placeholder='+92 300 XXXXXXX' required="required" className="form-control" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label for="inputState" className="form-label">Qualification <span className='mandatory'>*</span></label>
                                                            <select id="inputState" className="form-select">
                                                                <option selected>Choose...</option>
                                                                <option>CA</option>
                                                                <option>CMA</option>
                                                                <option>ACCA</option>
                                                                <option>Masters</option>
                                                                <option>Others</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div>
                                                                <label for="formFileLg" className="form-label">Attach Your CV <span className='mandatory'>*</span></label>
                                                                <input className="form-control form-control-lg" required="required" id="formFileLg" type="file" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label for="message" className="form-label">Your Message</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                                        <div className="col-12">
                                                            <button type="button" className="btn btn-primary">Apply Now</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--===============spacing==============--> */}
            <div className="pd_top_90"></div>
            {/* <!--===============spacing==============--> */}
        </div>
    )
}
export default EmploymentPortal