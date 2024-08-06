import { ISuccessModal } from "../interfaces"
import ModalLayout from "./ModalLayout";

const SuccessModal = ({
    successModal,
}: ISuccessModal) => {
    return (
        <ModalLayout {...successModal}>
            {/* @ts-ignore */}
            <div className={`z-50 bg-white max-w-[259px] mx-auto`}>
                <div className={`flex justify-end`}>
                    <button
                        //@ts-ignore
                        onClick={(e) => { successModal.close() }}
                        className={`flex justify-center items-center w-8 h-8 p-2 `}
                    >
                        <img

                            className={`cursor-pointer`} src={`/images/cross.svg`} alt="" />
                    </button>
                </div>
                <div className={`flex justify-center`}>
                    <img className={``} src={`/images/success.svg`} alt="" />
                </div>
                <div className={`text-center px-12`}>
                    <p className={`text-2xl`}>Спасибо!</p>
                    <p className={`text-sm mt-2 pb-5`}>Заявка была успешно отправлена.</p>
                </div>
            </div>
        </ModalLayout>
    )
}

export default SuccessModal;

        