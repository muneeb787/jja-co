import React from 'react'

const PageHeader = (props) => {
    return (
        <div class="page_header_default style_one ">
            <div class="parallax_cover">
                <div class="simpleParallax"><img src={props.headerBg} alt="bg_image"
                    class="cover-parallax" /></div>
            </div>
            <div class="page_header_content">
                <div class="auto-container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="banner_title_inner">
                                <div class="title_page">
                                    {props.pageName}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="breadcrumbs creote">
                                <ul class="breadcrumb m-auto">
                                    <li><a href="index.html">Home</a></li>
                                    <li class="active">{props.pageName}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader