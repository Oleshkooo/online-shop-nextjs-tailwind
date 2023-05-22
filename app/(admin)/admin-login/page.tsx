'use client'

import { type NextPage } from 'next'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useInput } from '@/hooks/useInput'
import { useAppDispatch, useAppSelector } from '@/redux'
import { setAdmin } from '@/redux/slices/userSlice'

const AdminLogin: NextPage = () => {
    const dispatch = useAppDispatch()
    const isAdmin = useAppSelector(state => state.user.isAdmin)

    const { value: login, reset: resetLogin, bind: bindLogin } = useInput('')
    const { value: password, reset: resetPassword, bind: bindPassword } = useInput('')

    useEffect(() => {
        if (isAdmin) {
            redirect('/admin')
        }
    }, [isAdmin])

    const handleSubmit = async () => {
        if (login.length < 3) {
            toast.error('Логін занадто короткий')
            return
        }
        if (password.length < 3) {
            toast.error('Пароль занадто короткий')
            return
        }

        const checkLogin = login === process.env.NEXT_PUBLIC_ADMIN_LOGIN
        const checkPassword = password === process.env.NEXT_PUBLIC_ADMIN_PASS

        if (!checkLogin || !checkPassword) {
            toast.error('Неправильний логін або пароль')
            return
        }

        const action = setAdmin(true)
        dispatch(action)

        toast.success('Вхід успішний!')

        resetLogin()
        resetPassword()
    }

    return (
        <div className="w-full h-full grid place-items-center pt-40">
            <div className="flex justify-center flex-col bg-slate-50 p-10 w-96 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold">Вхід в адмін панель</h1>

                <div className="flex flex-col gap-5 pt-6">
                    <Input name="login" {...bindLogin} />
                    <Input name="password" {...bindPassword} />
                </div>

                <Button onClick={handleSubmit}>Увійти</Button>
            </div>
        </div>
    )
}

export default AdminLogin
