import * as ActionTypes from "../constants/products"

const initialState = {
    products: [{
            id: 1,
            title: "The Design of Every Day Things",
            image: "https://images.tokopedia.net/img/cache/500-square/product-1/2017/10/16/14481426/14481426_471416c0-7776-4a8f-8ee8-02a0e5027c3c_334_500.jpg",
            description: "If a dog chews shoes whose shoes does he choose?",
            prices: 234
        },
        {
            id: 2,
            title: "Design Sprint Books",
            image: "https://miro.medium.com/max/1400/1*SZNgCxNNqPtRDVZwTAk03A.jpeg",
            description: "If a dog chews shoes whose shoes does he choose?",
            prices: 777
        },
        {
            id: 3,
            title: "This is Marketing",
            image: "https://i.pinimg.com/736x/4d/20/bb/4d20bb46c7a2ae978ac809b63507c4bc.jpg",
            description: "If a dog chews shoes whose shoes does he choose?",
            prices: 882
        },
        {
            id: 4,
            title: "Value Proposition Design",
            image: "https://www.sprinthink.id/wp-content/uploads/2019/11/img-value-proposition-1.jpg",
            description: "If a dog chews shoes whose shoes does he choose?",
            prices: 599
        }
    ],
    carts: [],
    currentItems: null
}

const CartProductReducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CART:
            // check items on product array
            const items = state.products.find(product => product.id === action.payload.id)

            // check items aleady on cart or not
            const intheCart = state.carts.find(item => item.id === action.payload.id ? true : false)

            return {
                ...state,
                carts: intheCart ? state.carts.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity + 1 } : item) : [...state.carts, {...items, quantity: 1 }]
            }
        case ActionTypes.REMOVE_CART:
            return {
                ...state,
                carts: state.carts.filter((item) => item.id !== action.payload.id)
            }
        case ActionTypes.ADJUSTMENT_QTY:
            return {
                ...state,
                carts: state.carts.map((item) => item.id === action.payload.id ? {...item, quantity: +action.payload.quantity } : item)
            }
        case ActionTypes.LOAD_CURRENT_ITEMS:
            return {
                ...state,
                currentItems: action.payload
            }
        default:
            return state
    }
}

export default CartProductReducers