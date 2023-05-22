type Pages = Record<string, Breadcrumb>

export const pages: Pages = {
    main: {
        name: 'Головна',
        path: '/',
    },
    products: {
        name: 'Товари',
        path: '/products',
    },
    admin: {
        name: 'Адмін',
        path: '/admin',
    },
}
