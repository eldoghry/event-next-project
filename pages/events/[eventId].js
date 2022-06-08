import { useRouter } from "next/router";
import { getEventById } from "./../../dummay-data";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";

function EventDetailPage(props) {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);

  if (!props.event) return <p>No event found</p>;

  
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

  const response = await fetch(
    "https://meetups-react-4fcfb-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const transformedData = [];

  for (let key of Object.keys(data)) {
    transformedData.push({
      ...data[key],
      id: key,
    });
  }
  const event = transformedData.filter((e) => e.id === eventId)[0];

  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths() {
  //ISR incremetal static regenration build paths dynamicly based on data
  const response = await fetch(
    "https://meetups-react-4fcfb-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const params = [];

  for (let key of Object.keys(data)) {
    params.push({
      params: {
        eventId: key,
      },
    });
  }

  return {
    paths: params,
    fallback: false,
  };
}
