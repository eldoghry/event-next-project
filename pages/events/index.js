import EventList from "../../components/event/event-list";
import { getAllEvents } from "../../dummay-data";
import { Fragment } from "react";
import EventSearchForm from "../../components/event/event-search";
import { useRouter } from "next/router";

function AllEventsPage() {
  const allEvents = getAllEvents();
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
