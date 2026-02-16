interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({children}: ContainerProps) => {
    return (
        <div className="bg-red-900 max-w-7xl mx-auto px-4 bg-black py-8">
            {children}
        </div>
    )
}