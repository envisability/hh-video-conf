import React, { Fragment } from 'react';
import { useRouter } from "next/router";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import {createClient} from "contentful";
import moment from "moment";

//import classes from '../../styles/events.module.css'

export async function getServerSideProps(context) {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    const { params } = context;
    const filterData = params.slug;

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        // Check validation
    }

    const date = new Date(numYear, numMonth-1, 1).toISOString();
    //Filter the results
    const res = await client.getEntries({
        content_type: 'event',
        'fields.eventDate[gt]': date
    })

    const allEvents = await client.getEntries({
        content_type: 'event'
    })

    return{
        props:{
            allEvents: allEvents,
            params:params,
            events:res,
            date:date
        }
    }
}


function FilteredEventPage(props) {
    const router = useRouter();
    const filterData = props.events;

    if (!filterData) {
        return <p className='center'>Loading...</p>;
    }

    // const filteredYear = filterData[0];
    // const filteredMonth = filterData[1];
    //
    // const numYear = +filteredYear;
    // const numMonth = +filteredMonth;
    //
    // if (
    //     isNaN(numYear) ||
    //     isNaN(numMonth) ||
    //     numYear > 2030 ||
    //     numYear < 2021 ||
    //     numMonth < 1 ||
    //     numMonth > 12
    // ) {
    //     return (
    //         <Fragment>
    //             <ErrorAlert>
    //                 <p>Invalid filter. Please adjust your values!</p>
    //             </ErrorAlert>
    //             <div className='center'>
    //                 <Button link='/events'>Show All Events</Button>
    //             </div>
    //         </Fragment>
    //     );
    // }

    // const filteredEvents = getFilteredEvents({
    //     year: numYear,
    //     month: numMonth,
    // });

    if (!props.events || props.events.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        );
    }
    //
    // const date = new Date(numYear, numMonth - 1);

    return (
        <Fragment>
            {/*<ResultsTitle date={date} />*/}
            <EventList items={props.events.items} />
        </Fragment>
    );
}

export default FilteredEventPage;
