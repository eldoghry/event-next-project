import { useRouter } from "next/router";
import EventList from "../../components/event/event-list";
import { getFilteredEvents } from "../../dummay-data";
import ResultsTitle from "../../components/event/results-title";
import ErrorAlert from "./../../components/event/error-alert";

function FilterEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading...</p>;
  }

  const year = +filterData[0];
  const month = +filterData[1];

  const filterdEvents = getFilteredEvents({ year, month });

  const date = new Date(year, month - 1);

  if (filterdEvents.length === 0) {
    return (
      <ErrorAlert>
        <p className="center">No events found</p>
      </ErrorAlert>
    );
  }

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filterdEvents} />
    </div>
  );
}

export default FilterEventsPage;
