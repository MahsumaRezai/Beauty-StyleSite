import { Fragment } from "react";
import img from '../image/right.png'

const Form = (props) => {
    return (
        <Fragment>
            <div>
                <div className={classes.img}>
                    <img alt="" src={img} />
                </div>


            </div>
        </Fragment>
    )
}
export default Form;
