import React, {Fragment} from 'react';

function Process(props) {
    const mainMedia = "/images/illustrations/illustration-1-dark.png";
    return (
        <Fragment >
            <div className="section bg-black pt-12 pt-md-15 pb-8 pb-md-11">
                <div className="container container_wdth">
                    <div className="row justify-content-between align-items-center mb-5">
                        <div className="col-12 col-md-4 order-md-2 text-center mt-8 pad_10">
                            <img className="img-fluid w-75 w-md-100 mb-6 mb-md-0"
                                 style={{maxWidth:"100%"}}
                                 src={mainMedia} alt="..." />

                        </div>
                        <div className="col-12 col-md-7 order-md-1">
                            <h2 className="text-white" style={{maxWidth:"450px"}}>
                                Curabitur diam nisl, consectetur nec orci sed scelerisque lobortis diam.
                            </h2>

                            <div className="lead text-muted-80 mb-0">
                                Donec nec ante sem. Duis egestas ex sit amet purus convallis bibendum.
                                Duis et dapibus risus, a elementum quam. Phasellus vel aliquet erat,
                                condimentum iaculis dui.
                            </div>

                        </div>
                    </div>

                    <div className=" home_page row">


                        <div className="col-12 col-md-4">
                          <div className="row">
                            <div className="col-auto col-md-12">

                              <div className="row gx-0 align-items-center mb-md-5">
                                <div className="col-auto">

                                  <a className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1" href="#!">
                                    <span>1</span>
                                  </a>

                                </div>
                                <div className="col">

                                  <hr className="d-none d-md-block bg-gray-900-50 me-n7"/>

                                </div>
                              </div>

                            </div>
                            <div className="col col-md-12 ms-md-0 pad_ryt_30 pad_lft_35">

                              <h3 className="text-white">
                                Palmar Heyperhidrosis treatments
                              </h3>

                              <p className="text-muted-80 mb-6 mb-md-0">
                                Praesent condimentum at libero ut faucibus. Fusce egestas in velit eu cursus.
                                Duis egestas ex sit amet purus convallis bibendum
                              </p>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-4">
                          <div className="row">
                            <div className="col-auto col-md-12">

                              <div className="row gx-0 align-items-center mb-md-5">
                                <div className="col-auto">

                                  <a className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1" href="#!">
                                    <span>2</span>
                                  </a>

                                </div>
                                <div className="col">

                                  <hr className="d-none d-md-block bg-gray-900-50 me-n7"/>

                                </div>
                              </div>

                            </div>
                            <div className="col col-md-12 ms-md-0 pad_ryt_30 pad_lft_35">

                              <h3 className="text-white">
                                Fill out your intro survey

                              </h3>

                              <p className="text-muted-80 mb-6 mb-md-0">
                                Proin eu turpis consequat felis vestibulum imperdiet. Mauris et nisi
                                sit amet ligula congue interdum. In vel lacus in
                                libero scelerisque feugiat ut quis felis.
                              </p>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-4">
                          <div className="row">
                            <div className="col-auto col-md-12">

                              <div className="row gx-0 align-items-center mb-md-5">
                                <div className="col-auto">

                                  <a className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1" href="#!">
                                    <span>3</span>
                                  </a>

                                </div>
                               
                              </div>

                            </div>
                            <div className="col col-md-12 ms-md-0 pad_ryt_30 pad_lft_35">

                              <h3 className="text-white">
                                Fill out your intro survey
                              </h3>

                              <p className="text-muted-80 mb-6 mb-md-0">
                                Donec nec ante sem. Duis egestas ex sit amet purus convallis bibendum.
                                Duis et dapibus risus, a elementum quam.
                                Phasellus vel aliquet erat, condimentum iaculis dui. Nunc porta eget enim in sodales
                              </p>

                            </div>
                          </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="position-relative" style={{height:"4rem"}}>
                <div className="shape shape-top shape-fluid-x shape-flip-x svg-shim text-black">
                    <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h2880v125h-720L720 250H0V0z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </Fragment>
    );
}

export default Process;
