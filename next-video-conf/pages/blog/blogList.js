import React from 'react';
import PostPreview from "./postPreview";

function BlogList(props) {
    return (
        <section
            className={`pt-7 pt-md-10`}
            style={{backgroundColor: "#f9fbfd !important"}}
        >
            <div className={`container`}>
                <div className="row align-items-center mb-5">
                    {/*<div className="col-12 col-md">*/}
                    {/*    <h3 className="mb-0">*/}
                    {/*        Latest Blogs*/}
                    {/*    </h3>*/}
                    {/*    <p className="mb-0 text-muted">*/}
                    {/*        Here’s what we've been up to recently.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    {/*<div className="col-12 col-md-auto">*/}
                    {/*    <Link href='/blog' className="btn btn-sm btn-outline-gray-300 d-none d-md-inline">*/}
                    {/*        View all*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
                <div className="row">
                    {props.posts.map(blog =>
                        // console.log(blog);
                        <PostPreview key={blog.sys.id}
                                     blogPost = {{
                                         id : blog.sys.id,
                                         title : blog.fields.title,
                                         slug : blog.fields.slug,
                                         content: blog.fields.content,
                                         excerpt: blog.fields.excerpt ,
                                         coverImage: blog.fields.coverImage,
                                         date: blog.fields.date,
                                         author: blog.fields.author,
                                         isFeatured: blog.fields.isFeatured
                                     }}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default BlogList;
