'use client'

import { type Product } from '@prisma/client'
import { Minus, Plus, Trash } from 'lucide-react'

import { useAppDispatch, useAppSelector } from '@/redux'
import { decrementCartItem, incrementCartItem, removeCartItem } from '@/redux/slices/userSlice'

export const CartClient: React.FC = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.user.cart)

    const handleIncrement = (id: Product['id']) => {
        const action = incrementCartItem(id)
        dispatch(action)
    }
    const handleDecrement = (id: Product['id']) => {
        const action = decrementCartItem(id)
        dispatch(action)
    }
    const handleRemove = (id: Product['id']) => {
        const action = removeCartItem(id)
        dispatch(action)
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            {cart?.length === 0 && (
                <div className="w-full h-96 grid place-items-center font-semibold text-4xl">
                    В кошику пусто
                </div>
            )}
            {cart?.map(item => (
                <div
                    key={item.id}
                    className="flex justify-between items-center gap-2 max-h-20 bg-slate-50 rounded-lg px-10 py-6 hover:bg-slate-100 transition-all duration-300"
                >
                    <div className="flex gap-3">
                        <p className="font-semibold">{item.name}</p>
                        <p>-</p>
                        <p>{item.quantity} шт</p>
                    </div>
                    <div className="flex">
                        <button
                            onClick={() => {
                                handleDecrement(item.id)
                            }}
                            className="grid place-items-center p-3 transition-all duration-300 hover:scale-110"
                        >
                            <Minus />
                        </button>
                        <button
                            onClick={() => {
                                handleIncrement(item.id)
                            }}
                            className="grid place-items-center p-3 transition-all duration-300 hover:scale-110"
                        >
                            <Plus />
                        </button>
                        <button
                            onClick={() => {
                                handleRemove(item.id)
                            }}
                            className="grid place-items-center p-3 transition-all duration-300 hover:scale-105"
                        >
                            <Trash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
