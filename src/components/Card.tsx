type Props = {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Card = ({
    children,
    className,
    ...otherProps
}: Props) => {
    return (
        <div className={`flex flex-col items-center justify-center w-full h-full p-4 text-center border border-gray-200 rounded-lg shadow-sm ${className}`} {...otherProps}>
                {children}
        </div>
    )
}
