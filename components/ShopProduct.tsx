import { type Product } from '@prisma/client'
import Link from 'next/link'

import { pages } from '@/config/pages'

interface ShopProductProps {
    item: Product
}

export const ShopProduct: React.FC<ShopProductProps> = ({ item }) => {
    return (
        <Link
            href={`${pages.products.path}/${item.id}`}
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
            }}
            className="flex items-end h-96 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer rounded-2x"
        >
            <div className="w-full backdrop-blur-sm">
                <div className="bg-white/70 px-2 py-2">
                    <h5 className="text-black font-medium">{item.name}</h5>
                    <p className="text-black font-lignt pt-1">{item.price} UAH</p>
                </div>
            </div>
        </Link>
    )
}
