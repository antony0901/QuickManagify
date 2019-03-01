import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreator from '../actions/Currencies';
import CurrenciesList from '../components/CurrenciesList';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        selectCurrency: ActionCreator.selectCurrency
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesList);