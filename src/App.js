import { Fragment, useState } from "react";
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Line from "./Componets/About/Line";
import Product from "./Componets/Product/Product";
import ErroModal from "./Componets/UI/ErrorModal";


function App() {
    const [add, setAdd] = useState(false);
    const showCart = () => {
        setAdd(true);

    }
    const hideCart = () => {
        setAdd(false)
    }


    return (
        < Fragment >
            <Home />
            <About />
            <Line />
            <Product onshow={showCart} />
            {add && <ErroModal onhide={hideCart} />}
            
        </Fragment >
    )
}

export default App;
