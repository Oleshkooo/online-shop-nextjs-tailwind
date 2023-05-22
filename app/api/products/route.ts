import { type Product } from '@prisma/client'
import { NextResponse, type NextRequest } from 'next/server'

import { prisma } from '@/prisma'

// POST

export type PostReq = Omit<Product, 'id' | 'rating'>
export type PostRes = ApiResponse<Product>

export const POST = async (req: NextRequest) => {
    const { name, description, price, image } = (await req.json()) as PostReq

    if (name == null || description == null || price == null || image == null) {
        return NextResponse.json({
            error: true,
            message: 'Всі поля мають бути заповнені',
        } satisfies PostRes)
    }

    const product = await prisma.product.create({
        data: {
            name,
            description,
            price,
            image,
            rating: 0,
        },
    })

    return NextResponse.json({
        error: false,
        message: 'Товар додано',
        data: product,
    } satisfies PostRes)
}

// PUT

export type PutReq = Omit<Product, 'rating'>
export type PutRes = ApiResponse<Product>

export const PUT = async (req: NextRequest) => {
    const { name, description, price, image } = (await req.json()) as PutReq

    if (name == null || description == null || price == null || image == null) {
        return NextResponse.json({
            error: true,
            message: 'Всі поля мають бути заповнені',
        } satisfies PutRes)
    }

    const product = await prisma.product.create({
        data: {
            name,
            description,
            price,
            image,
            rating: 0,
        },
    })

    return NextResponse.json({
        error: false,
        message: 'Товар додано',
        data: product,
    } satisfies PutRes)
}
