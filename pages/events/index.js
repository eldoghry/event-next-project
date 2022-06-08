import EventList from "../../components/event/event-list";
import { getAllEvents } from "../../helper/api-util";
import { Fragment } from "react";
import EventSearchForm from "../../components/event/event-search";
import { useRouter } from "next/router";

function AllEventsPage(props) {
  const allEvents = props.allEvents;

  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearchForm onSearch={findEventHandler} />
      <EventList items={allEvents} />;
    </Fragment>
  );
}

export default AllEventsPage;

export async function getStaticProps() {
  return {
    props: {
      allEvents: await getAllEvents(),
    },
  };
}
