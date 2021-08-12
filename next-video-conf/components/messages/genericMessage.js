import React from 'react';
import Link from 'next/link';

function GenericMessage(props) {
    const {message} = props;
    return (
        <div className="row align-items-center justify-content-center gx-0 min-vh-100">
            <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11">
                <h1 className="display-3 fw-bold text-center">
                    {message.title}
                </h1>

                <p className="mb-5 text-center text-muted">
                    {message.body}
                </p>

                <div className="text-center">
                    <Link href={message.returnUrl}>
                        <a className="btn btn-primary">
                            {message.action}
                        </a>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default GenericMessage;
