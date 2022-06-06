import EventItem from "./event-item";
import classes from "./event-list.module.css";

function getReadableDate(date) {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function EventList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          location={event.location}
          date={getReadableDate(event.date)}
          image={"/" + event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
