import React from "react";
import { Fragment } from "react";
import img from "./med.jpg";
import "./ProfilPhoto.css";

export default function ProfilPhoto() {
    return (
        <Fragment>
            <img className="image" src={img} alt="med" />
        </Fragment>
    );
}
