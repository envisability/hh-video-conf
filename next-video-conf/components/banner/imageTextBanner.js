import React from 'react';

function ImageTextBanner(props) {
    const { banner } = props;

    return (
        <section data-jarallax data-speed=".8"
                 className="py-10 py-md-14 overlay
                    overlay-black overlay-60 bg-cover
                    jarallax"
                 style={ {
                     backgroundImage: `url(${banner.backgroundImage})`
                 }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-7 text-center">

                        <h1 className="display-2 fw-bold text-white">
                            { banner.title }
                        </h1>

                        <p className="lead mb-0 text-white-75">
                            { banner.subtitle }
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImageTextBanner;
