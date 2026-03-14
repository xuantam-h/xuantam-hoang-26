interface TitleProps {
    subtitle: string;
    title: string;
}

export const Title = ({ subtitle, title }: TitleProps) => {
    return (
        <div className="title">
            <p className="text-lg text-gray-400 opacity-50 uppercase tracking-widest mb-2">
                {subtitle}
            </p>
            <h2 className="md:text-6xl font-bold mb-8">
                {title}
            </h2>
        </div>
    )
}