'use client'

import { redirect } from 'next/navigation'
import { useEffect } from 'react'

import { useAppSelector } from '@/redux'

export const RequireAdmin: React.FC = () => {
    const isAdmin = useAppSelector(state => state.user.isAdmin)

    useEffect(() => {
        if (!isAdmin) {
            redirect('/admin-login')
        }
    }, [isAdmin])

    return null
}
