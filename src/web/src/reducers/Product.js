import * as ProductActionTypes from '../actiontypes/Product';
const initialState = {
    items: [{
        id: 1,
        name: 'Honda'
    },{
        id: 2,
        name: 'Yamaha'
    }],
    selectedProduct: {}
}

export const getVisibleProducts = state => {
    return state.products;
}

const products = (state=initialState, action) => {
    switch (action.type) {
        case ProductActionTypes.VIEW_PRODUCT:
            const selectedProducts = state.items.filter(item => item.id === action.selectedProductId);
            return {
                ...state,
                selectedProduct: selectedProducts[0]
            }
            
        default:
            return state
    }
}

export default products;