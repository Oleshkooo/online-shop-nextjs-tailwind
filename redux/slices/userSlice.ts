import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type Product } from '@prisma/client'

export type CartProduct = Product & {
    quantity: number
}

interface UserState {
    isAdmin: boolean
    cart: CartProduct[]
}

const initialState: UserState = {
    isAdmin: false,
    cart: [],
}

const saveState = (state: UserState) => {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('user', serializedState)
}

export const loadState = (): UserState => {
    const serializedState = localStorage.getItem('user')
    if (serializedState === null) {
        return initialState
    }
    return JSON.parse(serializedState)
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserState: (state, action: PayloadAction<UserState>) => {
            state = action.payload
            saveState(state)
        },
        addCartItem: (state, action: PayloadAction<Product | CartProduct>) => {
            state.cart.push({
                ...action.payload,
                quantity: 1,
            })
            saveState(state)
        },
        removeCartItem: (state, action: PayloadAction<Product['id']>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
            saveState(state)
        },
        incrementCartItem: (state, action: PayloadAction<Product['id']>) => {
            const index = state.cart.findIndex(item => item.id === action.payload)
            state.cart[index].quantity++
            saveState(state)
        },
        decrementCartItem: (state, action: PayloadAction<Product['id']>) => {
            const index = state.cart.findIndex(item => item.id === action.payload)
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
            saveState(state)
        },
        clearCart: state => {
            state.cart = []
            saveState(state)
        },
        setAdmin: (state, action: PayloadAction<boolean>) => {
            state.isAdmin = action.payload
            saveState(state)
        },
    },
})

export const {
    setUserState,
    addCartItem,
    removeCartItem,
    incrementCartItem,
    decrementCartItem,
    clearCart,
    setAdmin,
} = userSlice.actions
