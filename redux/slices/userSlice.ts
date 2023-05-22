import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type Product } from '@/app/types'

interface UserState {
    isAdmin: boolean
    cart: Product[]
}

const initialState: UserState = {
    isAdmin: false,
    cart: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<Product>) => {
            state.cart.push(action.payload)
        },
        removeCartItem: (state, action: PayloadAction<Product>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
        clearCart: state => {
            state.cart = []
        },
        setAdmin: (state, action: PayloadAction<boolean>) => {
            state.isAdmin = action.payload
        },
    },
})

export const { addCartItem, removeCartItem, clearCart, setAdmin } = userSlice.actions
