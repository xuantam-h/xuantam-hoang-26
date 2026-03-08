type ButtonProps = {
    size?: 'sm' | 'md' | 'lg',
    style: 'primary' | 'secondary',
    children: React.ReactNode,
    href: string,
    target?: string
}

export const Button = ({ size, style, children, target, href}: ButtonProps) => {
    const defaultClass = "btn inline-flex items-center text-center uppercase font-bold gap-2 duration-300"
    let sizeClasses

    switch(size) {
        case 'sm':
            sizeClasses = "text-sm mt-2"
            break
        case 'lg':
            sizeClasses = "text-lg mt-6"
            break
        default:
            sizeClasses = "mt-4"
    }

    let styleClasses
    switch(style) {
        case 'primary':
            styleClasses = "btn-primary text-white hover:bg-blue-600"
            break
        case 'secondary':
            styleClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300"
            break
        default:
            styleClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }

    const classes = `${defaultClass} ${sizeClasses} ${styleClasses}`

    return (
        <a href={href} className={classes} target={target} data-testid="button">
            {children}
        </a>
    )
}