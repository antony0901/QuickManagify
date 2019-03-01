import React from 'react';

import * as ActionTypes from '../actiontypes/Currencies';

const initialState = {
    rates: [],
    selectedCur: ''
}

const currencies = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.RECEIVE_CURRENCIES:
            return {
                ...state,
                rates: action.rates
            }
        case ActionTypes.SELECT_CURRENCY:
            return {
                ...state,
                selectedCur: action.cur
            }
        default:
            return state;
    }
}

export default currencies;