import { Fragment, useState } from "react";
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Line from "./Componets/About/Line";
import Product from "./Componets/Product/Product";
import ErroModal from "./Componets/UI/ErrorModal";
import Information from "./Componets/Information/Information";
import Form from "./Componets/Form/Form";


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
            <Information/>
            <Product onshow={showCart} />
            {add && <ErroModal onhide={hideCart} />}
            <Form/>
            
        </Fragment >
    )
}

export default App;
