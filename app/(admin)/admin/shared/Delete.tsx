'use client'

import { toast } from 'react-hot-toast'

import { type DeleteRes } from '@/app/api/products/[id]/route'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useInput } from '@/hooks/useInput'
import { Fetch } from '@/utils/Fetch'

export const Delete: React.FC = () => {
    const { value: id, reset: resetId, bind: bindId } = useInput('')

    const handleSubmit = async () => {
        if (id.length === 0) {
            toast.error('Вкажіть правильний ID')
            return
        }

        const res = await Fetch<DeleteRes>(`/api/products/${id}`, {
            method: 'DELETE',
        })

        if (res.error) {
            toast.error(res.message)
            return
        }

        toast.success(res.message)

        resetId()
    }

    return (
        <div className="flex justify-center flex-col bg-slate-50 p-10 w-96 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Видалити товар</h1>

            <div className="flex flex-col gap-5 pt-6">
                <Input name="id" placeholder="ID" {...bindId} />
            </div>

            <Button onClick={handleSubmit}>Видалити</Button>
        </div>
    )
}
