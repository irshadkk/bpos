export const ADDTOCART = "ADDTOCART";
export const REMOVEFROMCART = "REMOVEFROMCART";


export const addToCart = (item) => ({ type: ADDTOCART, payload: item });
export const removeFromCart = () => ({ type: REMOVEFROMCART });

