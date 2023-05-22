'use client'

interface ButtonProps extends JSX.IntrinsicAttributes, React.HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all mt-6"
        >
            {children}
        </button>
    )
}
