import { Fragment } from "react";
import classes from './Home.module.css';
import img1 from '../image/img.png'

const Home = (props) => {
    return (
        <Fragment>
            <h1 className={classes.title}>Beauty Style</h1>
            <div className={classes.home}>
                <div className={classes.image}>
                    <img src={img1} alt="" />
                    <button className="btn">Read More</button>

                </div>


            </div>


        </Fragment>
    )
}
export default Home;