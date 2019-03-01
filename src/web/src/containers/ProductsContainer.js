import React from 'react';
import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList';
import * as ProductActionCreators from '../actions/Product';
import { getVisibleProducts } from '../reducers/Product';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ viewProduct: ProductActionCreators.viewProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)