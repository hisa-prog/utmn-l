interface IQuestion {
    className?: string,
    question: string,
    answer: string
}
import { useState } from "react"

const Question = ({
    className,
    question,
    answer
}: IQuestion) => {
    const [isShow, setIsShow] = useState(false)
    return (
        <> 
            <div className={`rounded-2xl-xl bg-main-gray px-6 py-6.5 lg:col-span-10 md:col-span-8 col-span-4 ${className}`}>
                <div className="flex justify-between items-center">
                    <p className="font-roboto font-normal lg:text-xl text-base">{question}</p>
                    <div onClick={() => {setIsShow(!isShow)}} className="cursor-pointer">
                        <img src={`/images/${isShow ? 'hideAnswer' : 'showAnswer'}.svg`} alt={isShow ? 'hideAnswer' : 'showAnswer'}
                        className="md:max-w-30px max-w-24px lg:ml-0 ml-1.5"/>
                    </div>
                </div>
                <p className={`${isShow ? 'flex' : 'hidden'} pt-8 font-roboto font-normal lg:text-base text-sm`}>
                    {answer}
                </p>
            </div>
            
        </>
    )
}
export default Question