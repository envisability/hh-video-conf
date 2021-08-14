import React, {Fragment} from 'react';

function Footer(props) {
    const logourl ='/images/logo.png';
    const socialPath ='/images/icons/social/';

    return (
        <Fragment>
            <div className="position-relative mt-5">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-dark"
                    style={{marginBottom:"-5px"}}>
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#1B2A4E"></path>
                    </svg>
                </div>
            </div>
            <footer className="footer py-6 py-md-11 bg-dark">
                <div className="container">
                    <div className="row">
                        {/*<div className="col-12 col-md-4 col-lg-3 d-none">*/}
                        {/*    <img src={logourl} alt="..."*/}
                        {/*         className="footer-brand img-fluid" />*/}
                        {/*    <p className="text-gray-700 mb-2">*/}
                        {/*    </p>*/}
                        {/*</div>*/}

                        <div className="col-6 col-md-4 col-lg-2 ">
                            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                            <li className="list-inline-item list-social-item me-3">
                                <a href="#!" className="text-decoration-none">
                                    <img src={socialPath + 'instagram.svg'}
                                         className="list-social-icon" alt="..." />
                                </a>
                            </li>
                            <li className="list-inline-item list-social-item me-3">
                                <a href="#!" className="text-decoration-none">
                                    <img src={socialPath + 'facebook.svg'}
                                         className="list-social-icon" alt="..." />
                                </a>
                            </li>
                            <li className="list-inline-item list-social-item me-3">
                                <a href="#!" className="text-decoration-none">
                                    <img src={socialPath + "twitter.svg"}
                                         className="list-social-icon" alt="..." />
                                </a>
                            </li>
                            <li className="list-inline-item list-social-item">
                                <a href="#!" className="text-decoration-none">
                                    <img src={socialPath + "pinterest.svg"}
                                         className="list-social-icon" alt="..." />
                                </a>
                            </li>
                        </ul>
                        </div>
                        <p className="text-gray-700 mb-2">
                            Copyright © 2021 Medical Boulevard LLC. All rights reserved.
                        </p>

                        <div class
                             Name="col-6 col-md-4 col-lg-2 d-none">
                            <h6 className="fw-bold text-uppercase text-gray-700">

                            </h6>
                            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0 d-none">
                                <li className="mb-3">
                                    <a href="#!" className="text-reset">
                                        Sweaty Palms
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a href="#!" className="text-reset">
                                        Sweaty Feet
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a href="#!" className="text-reset">
                                        Armpit Sweating
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a href="#!" className="text-reset">
                                        Sweating Symptoms
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-6 col-md-4 col-lg-2 d-none">
                            <h6 className="fw-bold text-uppercase text-gray-700">
                                Company
                            </h6>
                            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                                <li className="mb-3">
                                    <a href="#!" className="text-reset">
                                        Home
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a href="#!" className="text-reset">
                                        About
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a href="#!" className="text-reset">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;
