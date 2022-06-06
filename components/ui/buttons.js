import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    // is set send link
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  } else {
    //send regular button
    return <button className={classes.btn}>{props.children}</button>;
  }
}

export default Button;
