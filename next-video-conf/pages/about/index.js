import React, {Fragment} from 'react';


function Index(props) {

    return (
        <Fragment>
            <section className="pt-4 pt-md-11">
                <div className="container container_wdth">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">

                            <h1 className="display-2 text-center text-md-start">
                                Small team. Big hearts.
                            </h1>

                            <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                                Our focus is always on finding the best people to work with. Our bar is high, but you look ready to take on the challenge.
                            </p>
                      
                        </div>
                    </div>

                    <div className="row gx-4">
                      <div className="col-4 pad_10">

                        <img src={'/images/photos/photo-16.jpg'}
                                     className="img-fluid rounded img_shadow"
                                     alt="..." />

                      </div>
                      <div className="col-3 pad_10">

                        <img src={'/images/photos/photo-17.jpg'}
                                     className="img-fluid rounded img_shadow mb-4"
                                     alt="..." />

                        <img src={'/images/photos/photo-18.jpg'}
                                     className="img-fluid rounded img_shadow"
                                     alt="..." />

                      </div>
                      <div className="col-5 pad_10">

                        <div className="row gx-5 mb-4">
                          <div className="col-5 pad_lft_ryt">

                            <img src={'/images/photos/photo-19.jpg'}
                                     className="img-fluid rounded img_shadow"
                                     alt="..." />

                          </div>
                          <div className="col-7 pad_lft_ryt">

                            <img src={'/images/photos/photo-20.jpg'}
                                     className="img-fluid rounded img_shadow"
                                     alt="..." />


                          </div>
                        </div>

                        <img src={'/images/photos/photo-21.jpg'}
                                     className="img-fluid rounded img_shadow"
                                     alt="..." />


                      </div>
                  </div>
                </div>
            </section>
        </Fragment>

    );
}

export default Index;
