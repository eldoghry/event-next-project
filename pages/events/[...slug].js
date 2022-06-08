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

  // const [loading, setLoading] = useState(true);

  // let filterdEvents = "";

  console.log(props);
  const filterEvents = props.filterEvents;

  if (props.hasError || !filterEvents || filterEvents.length === 0) {
    return (
      <ErrorAlert>
        <p className="center">No events found</p>
      </ErrorAlert>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filterEvents} />
    </div>
  );
}

export default FilterEventsPage;

export async function getServerSideProps(context) {
  const { params } = context;
  // console.log(params);
  // const filterData = req.params.slug;
  const year = +params.slug[0];
  const month = +params.slug[1];

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
    return date.getFullYear() === year && date.getMonth() + 1 === month;
  });

  if (!filterEvents || filterEvents.length === 0) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  // console.log(filterEvents);
  return {
    props: {
      filterEvents,
      date: {
        month,
        year,
      },
    },
  };
}
