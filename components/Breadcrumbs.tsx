import Link from 'next/link'

interface BreadcrumbsProps {
    data: Breadcrumb[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ data }) => {
    return (
        <div className="flex gap-2">
            {data.map((item, index) => (
                <div key={item.path} className="flex gap-2 font-medium">
                    <Link
                        href={item.path}
                        className="text-blue-600 hover:text-blue-400 transition-all cursor-pointer"
                    >
                        {item.name}
                    </Link>
                    {index !== data.length - 1 && <span className="text-gray-400">{'>'}</span>}
                </div>
            ))}
        </div>
    )
}
