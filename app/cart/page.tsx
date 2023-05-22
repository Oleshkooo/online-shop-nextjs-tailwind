import { type NextPage } from 'next'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { pages } from '@/config/pages'

import { CartClient } from './CartClient'

export const metadata = {
    title: 'Кошик | VShop',
}

const breadcrumbs: Breadcrumb[] = [pages.main, pages.cart]

const Cart: NextPage = () => {
    return (
        <>
            <Breadcrumbs data={breadcrumbs} />
            <CartClient />{' '}
        </>
    )
}

export default Cart
