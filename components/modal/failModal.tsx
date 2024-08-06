import { IFailModal } from "../interfaces"
import ModalLayout from "./ModalLayout";

const FailModal = ({
    failModal,
}: IFailModal) => {
    return (
        <ModalLayout {...failModal}>
            {/* @ts-ignore */}
            <div className={`z-50 bg-white mx-auto max-w-[259px]`}>
                <div className={`flex justify-end`}>
                    <button
                        //@ts-ignore
                        onClick={(e) => { failModal.close() }}
                        className={`flex justify-center items-center w-8 h-8 p-2 `}
                    >
                        <img

                            className={`cursor-pointer`} src={`/images/cross.svg`} alt="" />
                    </button>
                </div>
                <div className={`flex justify-center`}>
                    <img className={``} src={`/images/fail.svg`} alt="" />
                </div>
                <div className={`text-center px-[30px]`}>
                    <p className={`text-2xl`}>Ошибка!</p>
                    <p className={`text-sm mt-2 pb-5`}>Не удалось отправить заявку. Повторите попытку.</p>
                </div>
            </div>
        </ModalLayout>
    )
}

export default FailModal;
