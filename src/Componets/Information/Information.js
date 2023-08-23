import { Fragment } from "react";
import img from '../image/about.png'
import classes from './Info.module.css';

const Information = (props) => {
    return (
        <Fragment>
            <div className={classes.info}>
                <div className={classes.text}>
                    <h1>About Us</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br>tempor incididunt ut
                     labore et dolore magna aliqua. Ut enim ad minim <br></br>veniam, quis nostrud exercitation</p>

                </div>
                <div>
                    <img src={img} alt="" />

                </div>




            </div>
        </Fragment>
    )
}
export default Information;