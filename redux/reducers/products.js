import * as ActionTypes from "../constants/products"

const initialState = {
    products: [{
            id: 6,
            title: "Eloquent JavaScript",
            image: "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
            description: "The fundamental rules are simple and clear programs built on top of these rules",
            prices: 253
        },
        {
            id: 7,
            title: "Pragmatic Programmer",
            image: "https://images-na.ssl-images-amazon.com/images/I/71Nxk9VhSTL.jpg",
            description: "Pragmatic Programmer good read for a newbie to computer programming",
            prices: 753
        },
        {
            id: 3,
            title: "Design Pattern Oreilly",
            image: "https://images-na.ssl-images-amazon.com/images/I/917iQZBR91L.jpg",
            description: "Learn how to write beautiful, structured, and maintainable JavaScript",
            prices: 836
        },
        {
            id: 1,
            title: "The Design of Every Day Things",
            image: "https://images.tokopedia.net/img/cache/500-square/product-1/2017/10/16/14481426/14481426_471416c0-7776-4a8f-8ee8-02a0e5027c3c_334_500.jpg",
            description: "If a dog chews shoes whose shoes does he choose?",
            prices: 568
        },
        {
            id: 2,
            title: "Design Sprint Books",
            image: "https://www.agence-bradford.com/inside-shopper/wp-content/uploads/2019/05/design-sprint-1.jpg",
            description: "If a dog chews shoes whose shoes does he choose?",
            prices: 352
        },
        {
            id: 4,
            title: "This is Marketing",
            image: "https://i.pinimg.com/736x/4d/20/bb/4d20bb46c7a2ae978ac809b63507c4bc.jpg",
            description: "If a dog chews shoes whose shoes does he choose?",
            prices: 573
        },
        {
            id: 5,
            title: "Value Proposition Design",
            image: "https://www.sprinthink.id/wp-content/uploads/2019/11/img-value-proposition-1.jpg",
            description: "If a dog chews shoes whose shoes does he choose?",
            prices: 752
        }
    ],
    carts: [],
    wishlist: [],
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
        case ActionTypes.ADD_WISHLIST:
            const selectedItems = state.products.find(product => product.id === action.payload.id)
            return {
                ...state,
                wishlist: selectedItems
            }
        default:
            return state
    }
}

export default CartProductReducers