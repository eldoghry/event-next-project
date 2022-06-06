import classes from "./results-title.module.css";
import Button from "../ui/buttons";

function ResultsTitle(props) {
  const { date } = props;

  const readableDate = new Date(date).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>{readableDate} Events</h1>
      <Button link="/events">all Events</Button>
    </section>
  );
}

export default ResultsTitle;
