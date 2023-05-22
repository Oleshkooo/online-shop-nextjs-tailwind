'use client'

import { type Product } from '@prisma/client'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { useAppDispatch, useAppSelector } from '@/redux'
import { addCartItem, removeCartItem } from '@/redux/slices/userSlice'

interface AddToCartProps {
    product: Product
}

export const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.user.cart)

    const [isInCart, setIsInCart] = useState(() => cart?.some(item => item.id === product.id))
    const [activeClassNames, setActiveClassNames] = useState<string>(
        'bg-green-700 focus:ring-green-300',
    )

    const handleClick = () => {
        if (isInCart) {
            setActiveClassNames('bg-green-700 focus:ring-green-300')
        } else {
            toast.success('Товар додано до кошика')
            setActiveClassNames('bg-blue-700 focus:ring-blue-300')
        }
        const action = isInCart ? removeCartItem(product.id) : addCartItem(product)
        dispatch(action)
        setIsInCart(prev => !prev)
    }

    return (
        <button
            onClick={handleClick}
            className={`${activeClassNames} text-white px-6 py-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-center transition-all`}
        >
            {isInCart ? 'Забрати з кошику' : 'В кошик'}
        </button>
    )
}
