import Head from 'next/head'
import Image from 'next/image'
import EventList from "../components/events/event-list";
import {getFeaturedEvents} from "../dummy-data";
import Layout from "../components/layout/layout";

export default function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return (
      <h1>home page</h1>
    )
}
