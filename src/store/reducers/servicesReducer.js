
const initialState = {
    services: ['до 3х тонн', 'от 3 до 5 тонн', 'от 5 до 14 тонн', 'от 14 до 25 тонн', 'пассажирские перевозки', 'офисные переезды', 'квартирные переезды', 'услуги автовозов', 'эвакуация автомобилей', 'спец техника'],
    chosenService: 'Услуги',
}

export function servicesReducer( state = initialState, action) {
    switch (action.type) {
        case 'select_service':
            if(action.payload === 'Заказать перевозку'){
                return {...state, chosenService: 'Услуги'}
            }
            return {...state, chosenService: action.payload}

        default:
            return state;
    }
}