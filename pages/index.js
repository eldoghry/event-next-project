import EventList from "../components/event/event-list";
import { getFeaturedEvents } from "../helper/api-util";

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();
  return <EventList items={props.featuredEvents} />;
}

export default HomePage;

export async function getStaticProps() {
  // need to fetch featured events from the backend to ssg
  return {
    props: {
      featuredEvents: await getFeaturedEvents(),
    },

    revalidate: 1800, //this page not frequantily updated
  };
}
