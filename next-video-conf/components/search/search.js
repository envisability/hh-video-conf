import React from 'react';
import Link from 'next/link';
import SearchBar from "./searchBar";

function Search(props) {
    //const {tags} = props;
    const tags = ['palms', 'feet', 'face', 'armpit'];

    return (
        <section className="mt-n6" style={{backgroundColor:'#f9fbfd !important;'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SearchBar />
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <h6 className="fw-bold text-uppercase text-muted mb-0">
                                    Tags:
                                </h6>
                            </div>
                            <div className="col ms-n5 tags_margin_lft">
                                {
                                    tags.map(tag =>
                                        <Link href={`search/tag/${tag}`} >
                                            <a className="badge rounded-pill bg-secondary-soft">
                                                <span className="h6 text-uppercase">{ tag }</span>
                                            </a>
                                        </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Search;
