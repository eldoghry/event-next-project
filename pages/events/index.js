import EventList from "../../components/event/event-list";
import { getAllEvents } from "../../dummay-data";

function AllEventsPage() {
  const allEvents = getAllEvents();
  return <EventList items={allEvents} />;
}

export default AllEventsPage;
