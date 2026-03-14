interface SubtitleProps {
    children: React.ReactNode
}

export const Subtitle = ({ children }: SubtitleProps) => {
    return (
        <h2 className="text-lg text-gray-400 opacity-50 uppercase tracking-widest mb-2">
            {children}
        </h2>
    )
}