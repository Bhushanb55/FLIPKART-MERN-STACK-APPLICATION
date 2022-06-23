import * as actionTypes from '../constants/productConstant';


//state will store cur state and val, action will store updated value
export const getProductReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }      // array of objects    
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state     // return cur state 
    }
};


export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: true,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
}