import { Fragment, useRef } from "react";
import img from '../image/right.png';
import classes from './Form.module.css'
import Button from "./Button";

const Form = (props) => {
    const NameCheck = useRef();
    const PasswordCheck = useRef();
    const EmailCheck = useRef();

    const FormHandler = (event) => {
        event.preventDefault();
        const nameEnterd = NameCheck.current.value;
        const passwordEnterd = PasswordCheck.current.value;
        const emailEnterd = EmailCheck.current.value;



    }
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
                    <Button>Send Me</Button>

                </form>



            </div>
        </Fragment>
    )
}
export default Form;
