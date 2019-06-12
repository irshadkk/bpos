export function fetchProducts(item) {
    var url=''
    if(item){
        url='/api/get/products?category='+item
    }else {
        url='/api/get/products'
    }
    return dispatch => {
        dispatch(fetchProductsBegin());
        return fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchProductsSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchProductsFailure(error)));
    };
}
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products }
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
});




export function fetchCategories() {
    return dispatch => {
        dispatch(fetchCategoriesBegin());
        return fetch("/api/get/categories")
            .then(res => res.json())
            .then(json => {
                dispatch(fetchCategoriesSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchCategoriesFailure(error)));
    };
}
export const FETCH_CATEGORIES_BEGIN = 'FETCH_CATEGORIES_BEGIN';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

// export const FETCH_PRODUCTS_BEGIN = 'FETCH_CATEGORIES_BEGIN';
// export const FETCH_PRODUCTS_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
// export const FETCH_PRODUCTS_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategoriesBegin = () => ({
    type: FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = products => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: { products }
});

export const fetchCategoriesFailure = error => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: { error }
});


export const CATEGORYCLICKED = "CATEGORYCLICKED";
export const categoryClicked = (item) => ({ type: CATEGORYCLICKED, payload: item });

// export function categoryClicked(item) {
//     return dispatch => {
//         dispatch(fetchProductsBegin());
//         return fetch("/api/get/products?category="+item)
//             .then(res => res.json())
//             .then(json => {
//                 dispatch(fetchProductsSuccess(json));
//                 return json;
//             })
//             .catch(error => dispatch(fetchProductsFailure(error)));
//     };
// }