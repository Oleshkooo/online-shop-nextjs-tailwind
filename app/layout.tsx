import { Montserrat } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { Navbar } from '@/components/Navbar'
import { ReduxProvider } from '@/hoc/ReduxProvider'
import '@/styles/global.scss'

interface RootLayoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: 'VShop',
    description: 'Made by Vitalii Pahuta',
}

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Toaster containerClassName="toaster" position="top-center" reverseOrder={false} />
                <ReduxProvider>
                    <Navbar title="VShop" />
                    <div className="py-11" />
                    <div className="container mx-auto">{children}</div>
                </ReduxProvider>
            </body>
        </html>
    )
}

export default RootLayout
