import { type NextPage } from 'next'
import { redirect } from 'next/navigation'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { pages } from '@/config/pages'
import { getExactProduct } from '@/prisma/products'

import { Img } from './Img'

interface ItemExactProps {
    params: {
        id: string
    }
}
export const dynamic = 'force-dynamic'

export const generateMetadata = async ({ params }: { params: ItemExactProps['params'] }) => {
    const { id } = params

    const item = await getExactProduct(id)

    if (item == null) {
        redirect('/404')
    }

    return {
        title: `${item.name} | VShop`,
        description: item.description,
    }
}

// @ts-expect-error Server component
const ItemExact: NextPage<ItemExactProps> = async ({ params }) => {
    const { id } = params

    const item = await getExactProduct(id)

    if (item == null) {
        redirect('/404')
    }

    const breadcrumbs: Breadcrumb[] = [
        pages.main,
        pages.products,
        {
            name: item.name,
            path: `/${item.id}`,
        },
    ]

    return (
        <>
            <Breadcrumbs data={breadcrumbs} />
            <div className="grid grid-cols-2 gap-20 pt-5">
                <Img
                    src={item.image}
                    alt={item.name}
                    width={2000}
                    height={2000}
                    className="px-10"
                />
                <div className="pt-10">
                    <h1 className="text-5xl leading-tight font-medium">{item.name}</h1>
                    <h5 className="pt-6 text-xl font-normal">{item.price} UAH</h5>

                    <hr className="py-5" />

                    <h3 className="text-3xl font-medium">Опис</h3>
                    <p className="pt-3 leading-relaxed">{item.description}</p>
                </div>
            </div>
            <div className="py-4" />
        </>
    )
}

export default ItemExact
