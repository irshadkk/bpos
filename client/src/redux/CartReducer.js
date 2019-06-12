import { ADDTOCART, REMOVEFROMCART } from './Actions';

const initialState = {
    count: 0,
    cartItem: [],
    products: []
};
let reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDTOCART:
            let _state = {}
            let index = state.cartItem.indexOf(action.payload);
            if (index < 0) {
                action.payload.qty = 1;
                action.payload.ttl = (action.payload.price).toFixed(2);
                _state = {
                    ...state,
                    loading: false,
                    cartItem: [...state.cartItem, action.payload]
                }
            } else {
                _state = { ...state }
                _state.cartItem[index].qty = _state.cartItem[index].qty + 1
                _state.cartItem[index].ttl = (_state.cartItem[index].price * _state.cartItem[index].qty).toFixed(2)
                _state = {
                    ...state,
                    loading: false,
                    cartItem: [..._state.cartItem]
                }
            }
            return _state;
        case REMOVEFROMCART:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}
export default reducer;
