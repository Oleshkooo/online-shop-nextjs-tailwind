type Pages = Record<string, Breadcrumb>

export const pages = {
    main: {
        name: 'Головна',
        path: '/',
    },
    products: {
        name: 'Товари',
        path: '/products',
    },
    cart: {
        name: 'Кошик',
        path: '/cart',
    },
    admin: {
        name: 'Адмін',
        path: '/admin',
    },
} satisfies Pages
