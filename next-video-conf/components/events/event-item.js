import React from 'react';
import classes from "../../styles/event-item.module.css";
import Button from "../ui/Button";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

function EventItem(props) {
    const {title, image, date, location, id} = props;
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title}/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;
