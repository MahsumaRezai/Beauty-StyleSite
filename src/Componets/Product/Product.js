import { Fragment } from 'react';
import classes from './Product.module.css';
import img1 from '../image/blog1.jpg';
import img2 from '../image/blog2.jpg';
import img3 from '../image/blog3.jpg';

const Product = () => {
    return (
        <Fragment>
            <div className={classes.content}>
                <h1 className={classes.title}>Meet Our Experts</h1>
                <div className={classes.cart}>

                    <div className={classes.img}>
                        <img src={img1} alt="" />
                        <h1>JACOB</h1>
                        <p>Lorem ipsum dolor sit <br></br>amet, iscing elit, sed <br></br>do magna</p>
                    </div>

                    <div className={classes.img}>
                        <img src={img2} alt="" />
                        <h1>LONUT</h1>
                        <p>Lorem ipsum dolor sit <br></br>amet, iscing elit, sed <br></br>do magna</p>

                    </div>

                    <div className={classes.img}>
                        <img src={img3} alt="" />
                        <h1>IRINA</h1>
                        <p>Lorem ipsum dolor sit <br></br>amet, iscing elit, sed <br></br>do magna</p>

                    </div>


                </div>

            </div>
        </Fragment>
    )
}
export default Product;