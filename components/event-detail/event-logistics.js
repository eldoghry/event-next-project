import LocationIcon from "../ui/icons/location";
import DateIcon from "../ui/icons/date";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import Image from "next/image";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // const imgUrl = image.slice(1);

  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        {/* <img src={`/${image}`} alt={imageAlt} /> */}
        <Image src={image} alt={imageAlt} width={500} height={500} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={LocationIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
