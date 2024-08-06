import router from "next/router";
import React, { useState } from "react";

const headerItems = [
    {
        link: '/projects',
        text: 'ПРОекты',
    },
    {
        link: '/programs',
        text: 'программы',
    },
    {
        link: '/#team',
        text: 'КОМАНДА',
    },
    {
        link: '/#reviews',
        text: 'ОТЗЫВЫ',
    },
    {
        link: '/#contacts',
        text: 'КОНТАКТЫ',
    },
]

const Header = () => {
    const [isShown, setIsShown] = useState(false)

    return (
        <>
            <div className="sticky top-0 z-50 bg-main-blue py-4">
                <div className={`justify-between items-center max-w-8xl mx-auto hidden lg:flex px-4 md:px-8 lg:px-16`}>
                    <a className={`w-full h-full cursor-pointer`} onClick={() => {
                        router.push(`/`)
                    }}>
                        <img src='/images/logo.svg' alt='utmnLogo' className="max-w-[120px] mb-4" />
                    </a>
                    <div className="flex font-firaSans font-bold text-white text-base">
                        {headerItems.map((item, index) => (
                            <a className="flex cursor-pointer"
                                href={item.link}
                                key={index}
                            >
                                <span className="uppercase py-[15px] pl-[15px] pr-3 flex">
                                    {item.text}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={`lg:hidden relative`}>
                    <div className={`px-4 md:px-8 flex justify-end`}>
                        <button
                            onClick={() => {
                                setIsShown(!isShown)
                            }}
                            className={``}
                        >
                            <img className={``} src='/images/burger.svg' alt='burger' />
                        </button>
                    </div>
                    <div className={`${isShown ? 'block' : 'hidden'} z-50 -mt-4 absolute top-0 right-0 w-full h-screen bg-main-blue`}>
                        <div className={`px-4 md:px-8 flex justify-end py-4`}>
                            <button
                                onClick={() => {
                                    setIsShown(!isShown)
                                }}
                                className={``}
                            >
                                <img className={``} src='/images/close.svg' alt='close' />
                            </button>
                        </div>
                        <div className={`flex justify-center`}>
                            <a className={``} href='/#'>
                                <img src='/images/logo.svg' alt='utmnLogo' className="max-w-[120px] mb-4" />
                            </a>
                        </div>
                        <div className={`flex flex-col items-center justify-center mt-10 space-y-4 `}>
                            {headerItems.map((item, index) => (
                                <a
                                    onClick={() => setIsShown(!isShown)}
                                    className="flex cursor-pointer font-firaSans font-bold text-white text-base"
                                    href={item.link}
                                    key={index}
                                >
                                    <span className="uppercase py-[15px] pl-[15px] pr-3 flex">
                                        {item.text}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header