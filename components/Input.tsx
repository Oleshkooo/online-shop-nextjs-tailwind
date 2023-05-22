interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string
    value: string
    type?: 'text' | 'password' | 'email'
    placeholder?: string
    required?: boolean
}

export const Input: React.FC<InputProps> = ({
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    required,
}) => {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">
                {placeholder}
            </label>
            <input
                type={type}
                id={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
        </div>
    )
}
