import { AllServices } from '../UI/AllServices/AllServices';
import { Button } from '../UI/Button/Button';
import { PopUp } from '../UI/PopUp/PopUp';
import './Home.scss';
import { useState } from 'react';
import { OrderForm } from '../UI/OrderForm/OrderForm';
import { useDispatch } from "react-redux";




export function Home() {
    const dispatch = useDispatch()
    const [popupActive, setPopupActive] = useState(false)
    const activatePopUp = (e) => {
        setPopupActive(true)
        let text = e.currentTarget.textContent
        dispatch({type: 'select_service', payload: text})
    }

    return (
        <div className='home_wrapper'>
            <PopUp active={popupActive} setActive={setPopupActive}>
                <OrderForm/>
                <Button onClick={() => setPopupActive(false)}>ОТМЕНА</Button>
            </PopUp>
            <header className='header'>
                <p>Грузоперевозки по Беларуси в целом и грузоперевозки в Минске в частности - вот только незначительная часть оказываемых нашей компанией услуг.</p>
                <h1>Грузоперевозки в Могилёве, РБ и СНГ</h1>
                <div>
                   <Button onClick={activatePopUp}>пассажирские перевозки</Button> 
                   <Button onClick={activatePopUp}>офисные переезды</Button> 
                   <Button onClick={activatePopUp}>квартирные переезды</Button> 
                   <Button onClick={activatePopUp}>эвакуация автомобилей</Button> 
                </div>
                <p> Gruzz.by - это серьезная фирма, главная цель которой заключается в предоставлении своим клиентам максимально удобного и качественного сервиса за минимальные деньги.
                Компания Gruzz.by выполняет перевозки от одного килограмма до двадцати пяти тонн.</p>
                <Button onClick={activatePopUp}>Заказать перевозку</Button>
            </header>
            <section className='description'>
            <AllServices eventCallback = {activatePopUp}></AllServices>
                <h2>ЧТО МОЖЕМ СДЕЛАТЬ ДЛЯ ВАС?</h2>
                <ol className='description__ol' type='1'>
                    <li>Мы стараемся устанавливать максимально низкие тарифы на свои услуги. Все вопросы оплаты оговариваются по телефону и рассчитываются в каждом отдельном случае сугубо индивидуально. Мы стремимся договариваться и всегда идем на компромисс нашим клиентам.</li>
                    <li>Обилие сфер нашей деятельности дает Вам возможность постоянно сотрудничать с одной проверенной компанией и свести соответствующие риски к нулю.</li>
                    <li>Gruzz.by - это компания, осуществляющая постоянные инвестиции в свой автопарк и персонал, чтобы быть максимально полезными, мобильными и оперативными. Ведь мы понимаем, что время - деньги, а подвести клиента - значит потерять его и заработать негативную репутацию.</li>
                    <li>5+ - это оценка, которую дают нам клиенты, уже успевшие поработать с нами.</li>
                </ol>
                <p>Всегда рады оказать посильную помощь. С нами - надежно!</p>
                <Button onClick={activatePopUp}>Заказать перевозку</Button>
            </section>
        </div>
    )
}