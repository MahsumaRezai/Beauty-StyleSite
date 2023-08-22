import { Fragment } from "react";
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Line from "./Componets/About/Line";
import Product from "./Componets/Product/Product";


function App() {

    return (
        <Fragment>
            <Home />
            <About />
            <Line />
            <Product />
        </Fragment>
    )
}

export default App;
