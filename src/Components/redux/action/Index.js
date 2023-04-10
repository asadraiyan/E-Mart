// for add item to cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// for delete item from cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

export const removeProduct = (product) => {
    return {
        type: "REMOVE_PRODUCT",
        payload: product
    }
}

export const emptyCart = () => {
    return {
        type: "REMOVE_ALL"
    }
}