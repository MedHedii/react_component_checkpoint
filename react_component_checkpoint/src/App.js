import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilPhoto from "./Components/ProfilPhoto/ProfilPhoto";
import FullName from "./Components/FullName/FullName";
import Address from "./Components/Address/Address";

function App() {
    return (
        <Fragment>
            <ProfilPhoto />
            <FullName />
            <Address />
        </Fragment>
    );
}

export default App;
