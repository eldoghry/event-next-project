import Button from "../ui/buttons";
import classes from "./event-item.module.css";
import RightArrowIcon from "../ui/icons/right-arrow";
import DateIcon from "../ui/icons/date";
import LocationIcon from "../ui/icons/location";

import Image from "next/image";

function EventItem(props) {
  return (
    <li className={classes.item}>
      {/* <img  /> */}

      <Image
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        width={250}
        height={140}
      />
      {/* <Image src={props.image} alt="" width={250} height={140} /> */}

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
