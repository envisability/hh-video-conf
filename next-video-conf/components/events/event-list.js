import React from 'react';
import EventItem from "./event-item";
import classes from "../../styles/event-list.module.css"

function EventList(props) {
    const {items} = props;
    //debugger;
    return (
        <ul className={classes.list}>
            {items.map(event =>
                <EventItem
                    key={event.sys.id}
                    id={event.sys.id}
                    title={event.fields.eventTitle}
                    location={event.fields.locationAsAddress}
                    date={event.fields.eventDate}
                    image={event.fields.eventMainImage.fields.file.url}
                />
            )}
        </ul>
    );
}

export default EventList;
