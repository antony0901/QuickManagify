import * as ActionTypes from '../actiontypes/Currencies';
import * as api from '../api/Currencies';

const receiveCurrencies = (rates) => ({
    type: ActionTypes.RECEIVE_CURRENCIES,
    rates: rates
});

export const selectCurrency = (cur) => ({
    type: ActionTypes.SELECT_CURRENCY,
    cur: cur
})

export const getCurrencies = () => dispatch => {
    api.getCurrencies('USD').then(rs => {
        const {rates} = rs.data;
        dispatch(receiveCurrencies(rates));
    });
}