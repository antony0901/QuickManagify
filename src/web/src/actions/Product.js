import * as ProductActionTypes from '../actiontypes/Product';

export const viewProduct = (selectedProductId) => ({
    type: ProductActionTypes.VIEW_PRODUCT,
    selectedProductId: selectedProductId
});