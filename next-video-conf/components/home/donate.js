import React from 'react';
import ContactForm from "./contactForm";


function Donate(props) {
    return(

    <section className="py-8 py-md-13 bg-between">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 text-center">
                    <h2 className="fw-bold">
                        Help us help you
                    </h2>
                    <p className="fs-lg text-muted mb-8 px-lg-9">
                        We can help you build a better business faster.
                        Tried and true systems for projects small and
                        large.
                    </p>
                    <a href="#!" className="btn btn-primary-desat lift">
                        Donate Now
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Donate;

