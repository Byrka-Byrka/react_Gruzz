import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { ServicesSelector } from "../ServicesSelector/ServicesSelector";
import './OrderForm.scss'

export function OrderForm() {

    return (
        <form className='orderForm'>
            <h3>Наш специалист свяжется с вами в кротчайшие сроки</h3>
            <div className='orderForm__input'>
                <p>Помощь грузчиков
                </p>
                <div className="orderForm__porter-select">
                    <label className="porter-select__label" htmlFor="orderForm_porter">Да</label>
                    <input name='porter' type="radio" id='orderForm_porter' />
                </div>
                <div className="orderForm__porter-select">
                    <label className="porter-select__label" htmlFor="orderForm_noPorter">Нет</label>
                    <input name='porter' type="radio" id='orderForm_noPorter' />
                </div>
            </div>
            <div className='orderForm__input'>
                <label htmlFor="orderForm_name">Ваше имя: </label>
                <Input type='text' placeholder='name' id='orderForm_name' />
            </div>
            <div className='orderForm__input'>
                <label htmlFor="orderForm_phone">Ваш телефон: </label>
                <Input id='orderForm_phone' type='tel' minLength="9" maxLength="13" placeholder='+375()' />
            </div>
            <div className='orderForm__input'>
                <label htmlFor="orderForm_distance">Расстояние перевозки в км: </label>
                <Input type='number' placeholder='расстояние в км' id='orderForm_distance' />
            </div>
            <div>
                <p>
                Услуги
                </p>
                <ServicesSelector />
            </div>
            <Button>ЗАКАЗАТЬ ЗВОНОК</Button>
        </form>
    )
}