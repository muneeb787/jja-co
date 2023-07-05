import React from 'react'
import PageHeader from '../../page_header/pageHeader'
import pageHeaderbg from "../../../images/page-header-default.jpg"
import "./career.css"

const StudentPortal = () => {
    return (
        <div className="career">
            <PageHeader headerBg={pageHeaderbg} pageName="Student Portal" />
            {/* <!--===============spacing==============--> */}
            <div className="pd_top_90"></div>
            {/* <!--===============spacing==============--> */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div style={{textAlign:"left"}} className="col-12">
                            <h5>Welcome to Student Portal</h5>
                        </div>
                        <div className="col-12">
                            <div style={{ textAlign: "justify" }} className="p">
                                We are a people company. Strength of our company lies in our people and we believe that our business objectives cannot be achieved without our team. At JJA & Co, you will find yourself in a dynamic and revitalizing environment, surrounded by passionate people. Our philosophy is to empower our people so that they rigorously contribute to the company’s business objectives and achieve their own personal and professional goals.
                                We want people who show entrepreneurial spirit, people with purpose and ambition, who take responsibility for their decisions and who consider JJA & Co their own business. A JJA & Co employee is characterized by creativity and dynamism. We don’t only look for specialists, but people who have knowledge and skills with broad interests.
                                Throughout the year, we have job openings in different departments for members of professional bodies including CA, ACMA, ACCA and MBA.
                                We look forward to hearing from you
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
                                                                <option>CA Part Qualified </option>
                                                                <option>CMA Affiliate</option>
                                                                <option>ACCA Affiliate</option>
                                                                <option>Masters</option>
                                                                <option>Bachelors</option>
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
export default StudentPortal