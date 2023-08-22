import { Fragment } from "react";
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Line from "./Componets/About/Line";


function App() {

    return (
        <Fragment>
            <Home />
            <About/>
            <Line/>
        </Fragment>
    )
}

export default App;
