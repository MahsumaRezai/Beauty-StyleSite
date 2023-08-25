import { Fragment } from "react";
import img from '../image/right.png';
import classes from './Form.module.css'

const Form = (props) => {
    return (
        <Fragment>
            <div >
                <div className={classes.img}>
                    <img alt="" src={img} />
                </div>
                <form className={classes.content} >
                    <h1 className={classes.title}>Get In Touch</h1>
                    <input placeholder="Name" />
                    <input placeholder="Phone Number" />
                    <input placeholder="Email" />
                    <textarea className={classes.text}></textarea>

                </form>



            </div>
        </Fragment>
    )
}
export default Form;
