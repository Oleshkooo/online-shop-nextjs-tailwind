'use client'

import Image from 'next/image'

interface ImgProps extends React.HTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    width: number
    height: number
    priority?: boolean
}

const checkImage = (path: string) => {
    const checkImgHttp = (url: string) => {
        const http = new XMLHttpRequest()

        http.open('HEAD', url, false)
        http.send()

        return http.status !== 404
    }

    if (path.startsWith('http://') || path.startsWith('https://')) {
        return true
    }

    return checkImgHttp(path)
}

export const Img: React.FC<ImgProps> = ({ src, alt, width, height, priority, className }) => {
    const validImageSrc = checkImage(src) ? src : ''

    return (
        <Image
            src={validImageSrc}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={className}
        />
    )
}
