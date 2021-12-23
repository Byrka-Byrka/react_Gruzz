import React from "react";
import './ServiceItem.scss'

export function ServiceItem ({eventCallback, children}) {
    return(
        <div onClick={eventCallback} className='service-item'>
            {children}
        </div>
    )
}