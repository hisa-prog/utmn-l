interface Props {
    children: any,
    onClick?:()=>void;
    active: boolean,
    className?: string
}

const SwitchFormTab = ({
    children,
    onClick,
    active = false,
    className = '',
}:Props) => {
    return (
        <div
            onClick={onClick} 
            className="flex items-center pt-4 cursor-pointer">
                <div className={`${active ? 'border-4 border-main-blue' : 'border border-main-black-text'} rounded-full min-w-3.2 h-3.2`}></div>
                <p className="font-roboto text-base text-main-black-text pl-2">
                    {children}
                </p>
        </div>
    )
}
export default SwitchFormTab;
