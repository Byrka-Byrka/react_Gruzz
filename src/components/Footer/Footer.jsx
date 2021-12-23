import { FaPhone } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Footer.scss';

export function Footer() {
    let location = useLocation()
    console.log(location.pathname)
    let isToHomeLinkActive = location.pathname !== '/';

    return (
        <div className='footer_container'>
            <footer className='footer'>
                {isToHomeLinkActive ? <Link className='navLink navLink_home' to="react_Gruzz/">
                    <p>ВЕРНУТЬСЯ НА ГЛАВНУЮ</p>
                </Link> : ''}
                <Link className='navLink' to="react_Gruzz/aboutUs">
                    <p>О НАС</p>
                </Link>
                <Link className='navLink' to="react_Gruzz/contacts">
                    <div className='contacts_container'>
                        контакты
                        <FaPhone size='20px' />
                    </div>
                </Link>
                <p className='madeByInfo'>разработано <a href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BA%D1%80%D0%B0%D0%B2%D1%86%D0%BE%D0%B2-b04653223/">Александром Кравцовым</a> 2021г</p>
            </footer>
        </div>
    )
}