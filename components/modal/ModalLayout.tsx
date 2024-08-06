import { useState } from "react";
import { IModal } from "../interfaces";


const ModalLayout = ({
    className,
    isOpen,
    close,
    children,
    customClasses = false,
    onSideClick,
}: IModal) => {
    return (
        <div className={`w-full h-full z-10 absolute lg:top-0 md:top-20 top-96 lg:mt-0 mt-56 left-0 flex items-center justify-center  
        ${isOpen ? "bg-overlay-gray " : "hidden"} ${className}`} 
        onClick={onSideClick ? onSideClick : close}>
            <div className="lg:h-max h-5/6 w-max" onClick={(e)=>{e.stopPropagation();}}>
                {children}
            </div>
        </div>
    )
}
export default ModalLayout;

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    return { isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }
}