import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient(
        process.env.NODE_ENV === 'production'
            ? {
                  //   log: ['query'],
              }
            : undefined,
    )

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
