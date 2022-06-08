import EventList from "../components/event/event-list";
import { getFeaturedEvents } from "../dummay-data";

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();
  const featuredEvents = props.featuredEvents;
  console.log(featuredEvents);

  return <EventList items={featuredEvents} />;
}

export default HomePage;

export async function getStaticProps() {
  // need to fetch featured events from the backend to ssg
  console.log("getStaticProps featured events");

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

  // console.log(transformedData);

  const featuredEvents = transformedData.filter((event) => event.isFeatured);

  return {
    props: {
      featuredEvents,
    },
  };
}
