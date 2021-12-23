import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './ServicesSelector.scss'

export function ServicesSelector(props) {
    const services = useSelector(state => state.services.services)
    let chosenService = useSelector(state => state.services.chosenService)
    const dispatch = useDispatch()
    const selectService = (event) => {
        dispatch({ type: 'select_service', payload: event.target.value })
    }
    return (
        <select className="services-selector" onChange={selectService} {...props} name="services" >
            <option disabled>Услуги</option>
            {services.map((item, index) => {
                if (chosenService === item) {
                    return <option selected key={index} value={item}>{item}</option>
                }
                return <option key={index} value={item}>{item}</option>
            })}
        </select>
    )
}