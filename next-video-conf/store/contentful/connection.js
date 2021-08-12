import React from 'react';
import {createClient} from "contentful";

function Connection(props) {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    const ContentfulContext = React.createContext(client);

    return (
        <ContentfulContext.Provider value={client}>
            {children}
        </ContentfulContext.Provider>
    );
}

export default Connection;
