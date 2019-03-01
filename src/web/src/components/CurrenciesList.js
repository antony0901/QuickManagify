import React from 'react';

const CurrenciesList = (props) =>{
    console.log(props);
    
    const {rates} = props.currencies;
    const rate = rates.map(item => {
        return (
            <li onClick={() => props.selectCurrency(item.currency)}>{item.currency}</li>
        )
    });

    return (
        <div>
            <ul>{rate}</ul>
            <p>Selected Currency: {props.currencies.selectedCur}</p>
        </div>
    )
}

export default CurrenciesList;
