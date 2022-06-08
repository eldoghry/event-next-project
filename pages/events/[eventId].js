// import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../helper/api-util";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";

function EventDetailPage(props) {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);

  if (!props.event) return <p>Loading...</p>;

  return (
    <Fragment>
      <EventSummary title={props.event.title} />
      <EventLogistics
        date={props.event.date}
        address={props.event.location}
        image={props.event.image}
        imageAlt={props.event.title}
      />

      <EventContent>
        <p>{props.event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  console.log("regenerating event detail page");

  return {
    props: {
      event,
    },

    revalidate: 30, //this page not frequantily updated
  };
}

export async function getStaticPaths() {
  //ISR incremetal static regenration build paths dynamicly based on data
  // prerender only featured events (assume that I have million events, so I can't prerender all events)

  const featuredEvents = await getFeaturedEvents();

  const params = featuredEvents.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));

  return {
    paths: params,
    // fallback: false,
    fallback: true, // we tell next there are some ids not prerender and we need to render them on the fly
  };
}
