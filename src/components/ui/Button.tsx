type ButtonProps = {
    size?: 'sm' | 'md' | 'lg',
    children: React.ReactNode,
    href: string
}

export const Button = ({ size, children, href}: ButtonProps) => {
    
    let sizeClasses = "py-2 px-4 rounded mt-4"
    switch(size) {
        case 'sm':
            sizeClasses = "py-1 px-2 text-sm rounded mt-2"
            break
        case 'lg':
            sizeClasses = "py-3 px-6 rounded mt-6"
            break
        default:
            sizeClasses = "py-2 px-4 rounded mt-4"
    }

    return (
        <a href={href} className={`inline-flex text-center bg-blue-500 text-white ${sizeClasses} hover:bg-blue-600 transition-colors duration-300`}>
            {children}
        </a>
    )
}