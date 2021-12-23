import React from "react";
import './AllServices.scss'
import { useSelector } from "react-redux";
import { ServiceItem } from "../ServiceItem/ServiceItem";
import tons_3 from "../../../assets/img/b3.png"
import tons_3_5 from "../../../assets/img/b3-5.png"
import tons_5_14 from "../../../assets/img/b5-14.png"
import tons_14_25 from "../../../assets/img/b14-25.png"
import passengers from "../../../assets/img/b_passenger.png"
import office_moving from "../../../assets/img/b_relocate.png"
import apartment_moving from "../../../assets/img/b_apartment_moving.png"
import auto_transporter from "../../../assets/img/b_auto_transporter.png"
import evocation_of_cars from "../../../assets/img/b_evocation_of_cars.png"
import spec_teck from "../../../assets/img/b_spec_teck.png"

export function AllServices (props) {
    const services = useSelector(state => state.services.services)
    let servicesIcons = [tons_3,tons_3_5,tons_5_14,tons_14_25,passengers,office_moving,apartment_moving,auto_transporter,evocation_of_cars,spec_teck]
    return(
        <div className='services-wrapper'>
           {services.map((item,index)=>{
            return(
            <ServiceItem eventCallback={props.eventCallback} key={index}>
               <p className ='service-item__descr'>{item}</p>
               <img className='service-item__img' src={servicesIcons[index]} alt="" />
            </ServiceItem> 
            )
           })}

        </div>
    )
}