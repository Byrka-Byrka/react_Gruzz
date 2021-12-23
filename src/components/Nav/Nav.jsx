import './Nav.scss';
import logo from '../../assets/img/logo.png'
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Nav() {

    return (
        <div className='nav_container'>
            <nav className='navbar'>
                <Link className='navLink' to="react_Gruzz/">                <div className='logo_container'>
                    <p className='logoName'>Gruzz.by</p>
                    <img className='logo' src={logo} alt="" />
                </div></Link>
                <Link className='navLink' to="react_Gruzz/contacts"><div className='contacts_container'>
                    контакты
                    <FaPhone size='20px' />
                </div></Link>
            </nav>
        </div>
    )
}