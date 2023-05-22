declare interface Breadcrumb {
    name: string
    path: string
}

declare interface ApiResponse<T = any> {
    error: boolean
    message: string
    data?: T
}
