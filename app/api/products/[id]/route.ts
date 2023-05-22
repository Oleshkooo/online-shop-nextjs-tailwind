import { type Product } from '@prisma/client'
import { NextResponse, type NextRequest } from 'next/server'

import { prisma } from '@/prisma'

// DELETE

export type DeleteReq = Pick<Product, 'id'>
export type DeleteRes = ApiResponse<Product>
interface DeleteParams {
    params: {
        id: string
    }
}

export const DELETE = async (req: NextRequest, { params }: DeleteParams) => {
    const { id } = params

    try {
        if (id == null) {
            return NextResponse.json({
                error: true,
                message: 'ID не вказано',
            } satisfies DeleteRes)
        }

        const product = await prisma.product.findUnique({
            where: {
                id,
            },
        })

        if (product == null) {
            return NextResponse.json({
                error: true,
                message: 'Товар не знайдено',
            } satisfies DeleteRes)
        }

        const newProduct = await prisma.product.delete({
            where: {
                id,
            },
        })

        return NextResponse.json({
            error: false,
            message: 'Товар видалено',
            data: newProduct,
        } satisfies DeleteRes)
    } catch (error) {
        return NextResponse.json({
            error: true,
            message: 'Помилка сервера',
        } satisfies DeleteRes)
    }
}
