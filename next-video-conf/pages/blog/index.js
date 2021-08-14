import React, {Fragment} from 'react';
import Link from 'next/link';
import {createClient} from "contentful";
import PostPreview from "./postPreview";
import ImageTextBanner from "../../components/banner/imageTextBanner";
import Search from "../../components/search/search";
import BlogList from "./blogList";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    // Get list of blog posts and authors
    const posts = await client.getEntries({content_type: 'post'})
    const authors = await client.getEntries({content_type:'author'})

    return{
        props:{
            posts:posts.items,
            authors:authors.items
        },
        revalidate: 10
    }
}

function Index(props) {
    const { posts, authors } = props;
    // debugger;

    function getAuthorById( id ) {
        return authors.find(item => item.sys.id === id);
    }

    const banner = {
        backgroundImage: 'images/covers/cover-3.jpg',
        title: 'Some title',
        subtitle: 'Keep up to date with what is going on ! ' +
            'with regular updates'
    }

    return (
        <Fragment>
            <ImageTextBanner banner={ banner } />
            <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x text-light" style={{marginBottom:"-5px"}}>
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                              fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <Search />
            <BlogList posts={posts} />
        </Fragment>

    );
}

export default Index;
