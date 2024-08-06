interface IButton {
    children: any,
    onClick?: (arg:any) => void,
    className?: string,
}

const Button = ({
    children,
    className,
    onClick,
}: IButton) => {
    return (
        <button className={`py-3 px-9.5 max-w-max rounded bg-main-blue hover:bg-gradient-to-l hover:from-button-hover-color1 hover:to-button-hover-color2 active:shadow-button-active cursor-pointer
        ${className}`}
            onClick={onClick}>
                <p className="text-white font-roboto font-normal text-base ">
                    {children}
                </p>
        </button>
    )
}
export default Button
