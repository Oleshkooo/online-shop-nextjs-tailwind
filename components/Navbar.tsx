'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

import { pages } from '@/config/pages'
import { useAppSelector } from '@/redux'

interface NavbarProps {
    title: string
}

const links = [pages.main, pages.products]

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
    const cart = useAppSelector(state => state.user.cart)
    const cartLength = cart.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <div className="fixed w-full bg-slate-900">
            <div className="container h-16 flex justify-between items-center">
                <h1 className="text-3xl text-white">{title}</h1>
                <ul className="flex space-x-10">
                    {links?.map(link => (
                        <li key={link.path}>
                            <Link href={link.path} className="text-white">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/cart" className="flex gap-2 text-white">
                            <ShoppingCart />({cartLength})
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
