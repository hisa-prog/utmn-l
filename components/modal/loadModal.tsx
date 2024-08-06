import { ILoadModal } from "../interfaces"
import ModalLayout from "./ModalLayout";

const LoadModal = ({
    loadModal,
}: ILoadModal) => {
    return (
        <ModalLayout {...loadModal}>
            {/* @ts-ignore */}
            <div className={`z-50 bg-white mx-auto max-w-[259px]`}>
                <div className={`flex justify-end`}>
                    <button
                        //@ts-ignore
                        onClick={(e) => { loadModal.close() }}
                        className={`flex justify-center items-center w-8 h-8 p-2 `}
                    >
                        <img

                            className={`cursor-pointer`} src={`/images/cross.svg`} alt="" />
                    </button>
                </div>
                <div className={`flex justify-center`}>
                    <img className={`animate-spin`} src={`/images/loading.png`} alt="" />
                </div>
                <div className={`text-center px-[30px]`}>
                    <p className={`text-2xl`}>Ожидайте</p>
                    <p className={`text-sm mt-2 pb-5`}>Отправляем данные...</p>
                </div>
            </div>
        </ModalLayout>
    )
}

export default LoadModal;