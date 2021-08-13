import React, {Fragment} from 'react';
import Link from 'next/link';
import {createClient} from "contentful";
import PostPreview from "./postPreview";
import ImageTextBanner from "../../components/banner/imageTextBanner";
import Search from "../../components/search/search";
import BlogList from "./blogList";



function Index(props) {

    return (
        <Fragment>
            

            <section className="py-12 py-md-15 bg-cover jarallax" style={{ 'background-image': 'url(/images/covers/cover-8.jpg)' }}>
            </section>

            <section className="pt-8 pt-md-11">
              <div className="container container_wdth">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-10 col-lg-9 col-xl-8">

                    
                    <h1 className="display-4 text-center">
                      Remote Work is the Future, but Should You Go Remote?
                    </h1>

                    
                    <p className="lead mb-7 text-center text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat euismod risus proin.
                    </p>

                    
                    <div className="row align-items-center py-5 border-top border-bottom">
                      <div className="col-auto">

                        
                        <div className="avatar avatar-lg">
                          <img src="/images/avatars/avatar-1.jpg" className="avatar-img rounded-circle"/>
                        </div>

                      </div>
                      <div className="col ms-n5">

                        
                        <h6 className="text-uppercase mb-0">
                          Ab Hadley
                        </h6>

                        <time className="fs-sm text-muted" datetime="2019-05-20">
                          Published on May 20, 2019
                        </time>

                      </div>
                      <div className="col-auto">

                        <span className="h6 text-uppercase text-muted d-none d-md-inline me-4">
                          Share:
                        </span>

                        <ul className="d-inline list-unstyled list-inline list-social">
                          <li className="list-inline-item list-social-item me-3">
                            <a href="#!" className="text-decoration-none">
                              <img src="/images/icons/social/instagram.svg" className="list-social-icon" alt="..."/>
                            </a>
                          </li>
                          <li className="list-inline-item list-social-item me-3">
                            <a href="#!" className="text-decoration-none">
                              <img src="/images/icons/social/facebook.svg" className="list-social-icon" alt="..."/>
                            </a>
                          </li>
                          <li className="list-inline-item list-social-item me-3">
                            <a href="#!" className="text-decoration-none">
                              <img src="/images/icons/social/twitter.svg" className="list-social-icon" alt="..."/>
                            </a>
                          </li>
                        </ul>

                      </div>
                    </div>

                  </div>
                </div> 
              </div> 
            </section>

            
        </Fragment>

    );
}

export default Index;
