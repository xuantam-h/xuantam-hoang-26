type ButtonProps = {
    size?: 'sm' | 'md' | 'lg',
    children: React.ReactNode,
    href: string
}

export const Button = ({ size, children, href}: ButtonProps) => {

    let sizeClasses = "mt-4"
    switch(size) {
        case 'sm':
            sizeClasses = "text-sm mt-2"
            break
        case 'lg':
            sizeClasses = "mt-6"
            break
        default:
            sizeClasses = "mt-4"
    }

    return (
        <a href={href} className={`btn-line inline-flex items-center text-center uppercase font-bold gap-2 duration-300 ${sizeClasses}`} data-testid="button">
            {children}
        </a>
    )
}