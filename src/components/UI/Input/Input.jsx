import React from "react";
import classes from './Input.module.scss'

export function Input(props) {
    return(
        <input className={classes.input} {...props} />
    )
}