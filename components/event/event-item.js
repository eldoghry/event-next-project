import Button from "../ui/buttons";
import classes from "./event-item.module.css";
import RightArrowIcon from "../ui/icons/right-arrow";
import DateIcon from "../ui/icons/date";
import LocationIcon from "../ui/icons/location";

function EventItem(props) {
  return (
    <li className={classes.item}>
      <img src={props.image} alt="" />

      <div className={classes.content}>
        <h2>{props.title}</h2>

        <div className={classes.date}>
          <DateIcon />
          <time>{props.date}</time>
        </div>

        <div className={classes.address}>
          <LocationIcon />
          <address>{props.location}</address>
        </div>

        <div className={classes.actions}>
          <Button link={"/events/" + props.id}>
            <span className={classes.icon}>
              explore more
              <RightArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
