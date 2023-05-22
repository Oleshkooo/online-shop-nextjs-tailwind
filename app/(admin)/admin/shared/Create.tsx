'use client'

import { toast } from 'react-hot-toast'

import { type PostReq, type PostRes } from '@/app/api/products/route'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useInput } from '@/hooks/useInput'
import { Fetch } from '@/utils/Fetch'

export const Create: React.FC = () => {
    const { value: name, reset: resetName, bind: bindName } = useInput('')
    const { value: description, reset: resetDescription, bind: bindDescription } = useInput('')
    const { value: price, reset: resetPrice, bind: bindPrice } = useInput('')
    const { value: image, reset: resetImage, bind: bindImage } = useInput('')

    const handleSubmit = async () => {
        if (name.length < 3) {
            toast.error('Вкажіть назву товару')
            return
        }
        if (description.length < 3) {
            toast.error('Вкажіть опис товару')
            return
        }
        if (price.length < 1) {
            toast.error('Вкажіть ціну товару')
            return
        }
        if (isNaN(Number(price))) {
            toast.error('Ціна повинна бути числом')
            return
        }

        const res = await Fetch<PostRes>('/api/products', {
            method: 'POST',
            body: JSON.stringify({
                name,
                description,
                price: Number(price),
                image,
            } satisfies PostReq),
        })

        if (res.error) {
            toast.error(res.message)
            return
        }

        toast.success('Товар успішно додано')

        resetName()
        resetDescription()
        resetPrice()
        resetImage()
    }

    return (
        <div className="flex justify-center flex-col bg-slate-50 p-10 w-96 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Додати товар</h1>

            <div className="flex flex-col gap-5 pt-6">
                <Input name="name" placeholder="Назва" {...bindName} />
                <Input name="description" placeholder="Опис" {...bindDescription} />
                <Input name="price" placeholder="Ціна" {...bindPrice} />
                <Input name="image" placeholder="Зображення" {...bindImage} />
            </div>

            <Button onClick={handleSubmit}>Додати</Button>
        </div>
    )
}
