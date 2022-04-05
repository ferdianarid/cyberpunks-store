import * as ActionTypes from "../constants/products"

export const AddToCart = (itemsId) => {
    return {
        type: ActionTypes.ADD_CART,
        payload: {
            id: itemsId
        }
    }
}

export const RemoveFromCart = (itemsId) => {
    return {
        type: ActionTypes.REMOVE_CART,
        payload: {
            id: itemsId
        }
    }
}

export const AdjustmentQty = (itemsId, quantity) => {
    return {
        type: ActionTypes.ADJUSTMENT_QTY,
        payload: {
            id: itemsId,
            quantity: quantity
        }
    }
}

export const LoadCurrentItems = (items) => {
    return {
        type: ActionTypes.LOAD_CURRENT_ITEMS,
        payload: {
            currentItems: items
        }
    }
}