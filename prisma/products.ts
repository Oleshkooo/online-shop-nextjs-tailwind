import { prisma } from '@/prisma'

export const getProducts = async () => {
    return await prisma.product.findMany()
}

export const getExactProduct = async (id: string) => {
    return await prisma.product.findUnique({
        where: {
            id,
        },
    })
}
