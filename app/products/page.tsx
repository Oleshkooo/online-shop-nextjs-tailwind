import { type NextPage } from 'next'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ShopProduct } from '@/components/ShopProduct'

import { pages } from '@/config/pages'
import { getProducts } from '@/prisma/products'

export const dynamic = 'force-dynamic'
export const metadata = {
    title: 'Товари | VShop',
}

const breadcrumbs: Breadcrumb[] = [pages.main, pages.products]

// @ts-expect-error Server component
const Products: NextPage = async () => {
    const products = await getProducts()

    return (
        <>
            <Breadcrumbs data={breadcrumbs} />
            <div className="pt-2 pb-4" />
            <div className="grid grid-cols-4 gap-6">
                {products.map(item => (
                    <ShopProduct key={item.id} item={item} />
                ))}
            </div>
            <div className="py-4" />
        </>
    )
}

export default Products
