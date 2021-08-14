import Head from 'next/head'
import Image from 'next/image'
import EventList from "../components/events/event-list";
import {getFeaturedEvents} from "../dummy-data";
import Layout from "../components/layout/layout";
import {Fragment} from "react";
import HomeBanner from "../components/home/homeBanner";
import Process from "../components/home/process";
import Donate from "../components/home/donate";

export default function HomePage() {
    const featuredEvents = getFeaturedEvents();
    return (
        <Fragment>
            <HomeBanner />
            <Process />
            <Donate />
            {/*<ContactForm />*/}
        </Fragment>
    )
}
