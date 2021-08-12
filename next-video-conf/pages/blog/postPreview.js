import React from 'react';
import moment from "moment";

function PostPreview(props) {
    const { blogPost } = props;
    // debugger;
    const coverImageFile = blogPost.coverImage.fields.file;
    const formatedDate =(date) =>{
        return moment(date).format('MMM Dd');
    }
    return (
        <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
                <a className="card-img-top" href="#!">
                    <img src={coverImageFile.url} alt={blogPost.coverImage.fields.title}
                         className="card-img-top" />
                        <div className="position-relative">
                            <div className="shape shape-bottom shape-fluid-x text-white">
                                <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                                          fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                </a>
                <a className="card-body" href="#!">
                    <h3>{blogPost.title}</h3>
                    <p className="mb-0 text-muted">{blogPost.excerpt}</p>
                </a>

                <a className="card-meta mt-auto" href="#!">
                    <hr className="card-meta-divider" />
                        <div className="avatar avatar-sm me-2">
                            <img src={blogPost.author.fields.picture.fields.file.url}
                                 alt={blogPost.author.fields.picture.fields.title}
                                 className="avatar-img rounded-circle" />
                        </div>

                        <h6 className="text-uppercase text-muted me-2 mb-0">
                            {blogPost.author.fields.picture.fields.title}
                        </h6>

                        <p className="h6 text-uppercase text-muted mb-0 ms-auto">
                            <time dateTime={moment(blogPost.date).format('YYYY-MMM-Dd')}>
                                {moment(blogPost.date).format('MMM Dd')}
                            </time>
                        </p>
                </a>
            </div>

        </div>
    );
}

export default PostPreview;
