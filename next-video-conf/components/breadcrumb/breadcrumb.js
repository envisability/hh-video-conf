import React from 'react';
import Link from'next/link';
import { ChevronRight } from "react-feather";

function Breadcrumb(props) {
    return (
        <nav className="bg-gray-200">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ol className="breadcrumb breadcrumb-scroll"
                            style={{marginTop:'0'}}>
                            <li className="breadcrumb-item">
                                <Link href='/'>
                                    <a href="/blog" className="text-gray-700">
                                        Blog
                                    </a>
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <ChevronRight className="breadcrumb-icon" />
                                Search Results
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Breadcrumb;
