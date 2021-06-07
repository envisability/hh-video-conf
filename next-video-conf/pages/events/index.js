import React, { Fragment } from 'react';
import { useRouter } from "next/router";
import EventsSearch from "../../components/events/events-search";
import EventList from "../../components/events/event-list";
import {getAllEvents} from "../../dummy-data";
import { createClient } from "contentful";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    const res = await client.getEntries({content_type: 'event'})
    return{
        props:{
            events:res.items
        },
        revalidate: 10
    }
}

export default function EventsPage(props) {
    const router = useRouter();
    const events = getAllEvents();

    console.log(props.events);

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={props.events} />
        </Fragment>
    );
}
