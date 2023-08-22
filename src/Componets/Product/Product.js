import { Fragment } from 'react';
import classes from './Product.module.css';
import img1 from '../image/blog1.jpg';
import img2 from '../image/blog2.jpg';
import img3 from '../image/blog3.jpg';

const Product = () => {
    return (
        <Fragment>
            <div className={classes.content}>
                <div className={classes.cart}>

                    <div className={classes.img}>
                        <img src={img1} alt="" />
                    </div>

                    <div>
                        <img src={img2} alt="" />
                    </div>

                    <div>
                        <img src={img3} alt="" />
                    </div>


                </div>

            </div>
        </Fragment>
    )
}
export default Product;