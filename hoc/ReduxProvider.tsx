'use client'

import { Provider } from 'react-redux'

import { store } from '@/redux'

interface ReduxProviderProps extends JSX.IntrinsicAttributes {
    children?: React.ReactNode
}

export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
}
