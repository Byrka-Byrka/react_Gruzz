import './Contacts.scss';

export function Contacts() {
    return (
        <div className='contacts_wrapper'>
            <h2>Контакты</h2>
            <iframe title="This is a map" className='contacts__iFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6341.369030800796!2d30.399315273491645!3d53.84951105423165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d0521c52844571%3A0xcf85d14239bb73b6!2z0JzQvtCz0LjQu9GR0LI!5e1!3m2!1sru!2sby!4v1640258940166!5m2!1sru!2sby"></iframe>
            <div className='contacts__info'>
                <p className='contacts_mainInfo'>Компания Gruzz.by</p>
                <p>Работаем ежедневно с 9:00 до 22:00</p>
                <p className='contacts_mainInfo'>Мы находимся по адресу:</p>
                <p>Славгородский проезд 31</p>
                <p>Могилев</p>
                <p>Беларусь</p>
                <p className='contacts_mainInfo'>Наши контактные телефоны:</p>
                <p>+375(29) 937 99 92</p>
                <p>+375(44) 999 99 99</p>
                <p><span className='contacts_mainInfo'>E-mail:</span> perevozca-gruzz@yandex.by</p>
            </div>
        </div>
    )
}