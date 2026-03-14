interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({children}: ContainerProps) => {
    return (
        <div className="container max-w-6xl mx-auto px-6">
            {children}
        </div>
    )
}