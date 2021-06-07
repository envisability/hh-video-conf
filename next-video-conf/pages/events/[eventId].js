import React, { Fragment } from 'react';
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { createClient } from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticProps(context) {
    const { params } = context;
    const event = await client.getEntry(params.eventId);
    return{
        props:{
            events:event
        }
    }
}

export async function getStaticPaths() {
    // todo: map all the ids
    // const events = client.getEntries({content_type: 'event'})
    // const paths = events.sys.map(event => ({params: {eventId: event.sys.id }}))
    return{
        paths:[
            { params: {eventId: '3wMYZdVI370E59gokDCf5Z'}}
        ],
        fallback: 'blocking'
    }
}

function EventDetailPage(props) {
    const router = useRouter();
    const event = props.events.fields;

    if (!event) {
        return(
            <ErrorAlert>
                <div>No event found!</div>
            </ErrorAlert>
        );
    }

    return (
        <Fragment>
            <EventSummary title={event.eventTitle} />
            <EventLogistics
                date={event.eventDate}
                address={event.locationAsAddress}
                image={event.eventMainImage.fields.file.url}
                imageAlt={event.eventTitle}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export default EventDetailPage;
