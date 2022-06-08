import { useRouter } from "next/router";
import EventList from "../../components/event/event-list";
import { getFilteredEvents } from "../../dummay-data";
import ResultsTitle from "../../components/event/results-title";
import ErrorAlert from "./../../components/event/error-alert";
import { useState, useEffect } from "react";

function FilterEventsPage(props) {
  // const router = useRouter();
  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p>Loading...</p>;
  // }

  // const year = +filterData[0];
  // const month = +filterData[1];

  // const filterdEvents = getFilteredEvents({ year, month });

  // const date = new Date(year, month - 1);

  const [loading, setLoading] = useState(true);

  let filterdEvents = "";

  useEffect(() => {
    filterdEvents = props.filterEvents;
    setLoading(false);
  });

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (filterdEvents.length === 0) {
    return (
      <ErrorAlert>
        <p className="center">No events found</p>
      </ErrorAlert>
    );
  }

  return (
    <div>
      {/* <ResultsTitle date={props.date} /> */}
      <EventList items={filterdEvents} />
    </div>
  );
}

export default FilterEventsPage;

export async function getServerSideProps(context) {
  const { req } = context;
  // const filterData = req.params.slug;
  const year = +req.url.split("/")[2];
  const month = +req.url.split("/")[3];

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

  const filterEvents = transformedData.filter((e) => {
    const date = new Date(e.date);
    console.log(date);
    return date.getFullYear() === year && date.getMonth() + 1 === month;
  });

  // console.log(filterEvents);
  return {
    props: {
      filterEvents,
    },
  };
}
