import EventList from "../components/event/event-list";
import { getFeaturedEvents } from "../dummay-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents} />;
}

export default HomePage;
