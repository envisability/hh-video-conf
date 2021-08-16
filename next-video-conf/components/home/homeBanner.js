import React, {Fragment} from 'react';

function HomeBanner(props) {
    return (
        <Fragment>
            <section className="py-8 py-md-11 border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">

                            <h1 className="display-3 text-center text-md-start">
                                Welcome to the center for<br />
                                Hyperhidrosis
                            </h1>

                            <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                                orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
                                nulla ipsum.
                            </p>
                            <div className="col-12 col-md-5 col-lg-6 order-md-2">
                                {/*"img/illustrations/illustration-2.png"*/}
                                <img src={'/images/illustrations/illustration-2.png'}
                                     className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
                                     alt="..."
                                     data-aos="fade-up" data-aos-delay="100" />

                            </div>

                            <div className="text-center text-md-start mb-5">
                                <a href="overview.html" className="btn btn-primary shadow lift me-3">
                                    Schedule Now
                                    <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                                </a>
                                {/*<a href="docs/index.html" className="btn btn-primary-soft lift top-index">*/}
                                {/*    Schedule Now!*/}
                                {/*</a>*/}
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            {/*<div className="position-relative mt-10 mt-md-n15 low-index">*/}
            {/*    <div className="shape shape-bottom shape-fluid-x svg-shim text-black">*/}
            {/*        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path d="M720 125L2160 0h720v250H0V125h720z" fill="currentColor"></path>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Fragment>
    );
}

export default HomeBanner;
