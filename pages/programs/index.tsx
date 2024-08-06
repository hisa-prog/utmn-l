import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/atoms/button";
import NavTab from "../../components/atoms/navTab";
import SwitchFormTab from "../../components/atoms/switchFormTab";
import SwitchSquareTab from "../../components/atoms/switchSquareTab";
import ProgramsCard from "../../components/cards/programsCard";
import { ProgramsContext } from "../../components/context/programs";
import { IVacanсyProgramsCard } from "../../components/interfaces";
import FeedBack from "../../components/sections/feedback";
import GridContainer from "../../components/wrappers/gridContainer";

const navTabs = [
    {
        tab: "Повышение квалификации",
        filter: "qualification",
    },
    {
        tab: "Профессиональная переподготовка",
        filter: "retraining",
    },
    {
        tab: "Дополнительные общеобразовательные программы",
        filter: "course",
    },
];

const switchTrainingTabs = [
    {
        tab: "Экономика",
        filter: "economy"
    },
    {
        tab: "Право",
        filter: "right"
    },
    {
        tab: "Психология",
        filter: "psychology"
    },
    {
        tab: "Управление",
        filter: "control"
    },
]

const switchEducationTabs = [
    {
        tab: "Обучение",
        filter: "education"
    },
    {
        tab: "Мероприятие",
        filter: "event"
    }
]

const switchTabs = [
    {
        tab: "Офлайн",
        filter: "offline",
    },
    {
        tab: "Онлайн",
        filter: "online",
    },
    {
        tab: "Электронное обучение",
        filter: "digital",
    },
];

const switchFormsTabs = [
    {
        tab: "Платно",
        filter: "pay",
    },
    {
        tab: "Бесплатно",
        filter: "free",
    },
];
const switchForms2Tabs = [
    {
        tab: "Повышение квалификации",
        filter: "up",
    },
    {
        tab: "Профпереподготовка",
        filter: "change",
    },
];


export default function Programs() {
    const { programsList } = useContext(ProgramsContext)
    //button for showAll
    const [showMore, setShowMore] = useState(false)
    const [openFilters, setOpenFilters] = useState(false)

    const [valueSearch, setValueSearch] = useState("")
    const handleInputValueSearch = (e: any) => {
        setValueSearch(e.target.value);
    };


    const [activeNavTab, setActiveNavTab] = useState(0);
    const [activeTrainingTab, setActiveTrainingTab] = useState(0);
    const [activeEducationTab, setActiveEducationTab] = useState(0);
    const [activeSwitchTab, setActiveSwitchTab] = useState(0);
    const [activeSwitchFormsTab, setActiveSwitchFormsTab] = useState(0);
    const [activeSwitchForms2Tab, setActiveSwitchForms2Tab] = useState(0);
    const [filteredData, setFilteredData] = useState<IVacanсyProgramsCard[]>([]);

    //filtering array of data
    useEffect(() => {
        let arr: IVacanсyProgramsCard[] = programsList
        let temp: IVacanсyProgramsCard[] = programsList

        if (navTabs[activeNavTab].filter !== '') {
            arr = temp.filter(item => item.type === navTabs[activeNavTab].filter)
        }
        if (switchTabs[activeSwitchTab].filter !== '') {
            arr = temp.filter(item => item.form === switchTabs[activeSwitchTab].filter)
        }
        if (switchTrainingTabs[activeTrainingTab].filter !== '') {
            arr = temp.filter(item => item.training === switchTrainingTabs[activeTrainingTab].filter)
        }
        if (switchEducationTabs[activeEducationTab].filter !== '') {
            arr = temp.filter(item => item.education === switchEducationTabs[activeEducationTab].filter)
        }
        if (switchFormsTabs[activeSwitchFormsTab].filter !== '') {
            arr = temp.filter(item => item.form1 === switchFormsTabs[activeSwitchFormsTab].filter)
        }
        if (switchForms2Tabs[activeSwitchForms2Tab].filter !== '') {
            arr = temp.filter(item => item.form2 === switchForms2Tabs[activeSwitchForms2Tab].filter)
        }

        if (navTabs[activeNavTab].filter !== '' 
        && switchTabs[activeSwitchTab].filter !== '' 
        && switchTrainingTabs[activeTrainingTab].filter !== '' 
        && switchEducationTabs[activeEducationTab].filter !== ''
        && switchFormsTabs[activeSwitchFormsTab].filter !== ''
        && switchForms2Tabs[activeSwitchForms2Tab].filter !== '') {
            arr = temp.filter(item => item.type === navTabs[activeNavTab].filter).filter(item => item.form === switchTabs[activeSwitchTab].filter).filter(item => item.training === switchTrainingTabs[activeTrainingTab].filter).filter(item => item.education === switchEducationTabs[activeEducationTab].filter).filter(item => item.form1 === switchFormsTabs[activeSwitchFormsTab].filter).filter(item => item.form2 === switchForms2Tabs[activeSwitchForms2Tab].filter)
        }
        setFilteredData(arr)
    }, [activeNavTab, activeSwitchTab, activeTrainingTab, activeEducationTab, activeSwitchFormsTab, activeSwitchForms2Tab, programsList])

    useEffect(() => {
        if (filteredData.length < 3) setShowMore(true);
        else setShowMore(false)
    }, [filteredData])


    return (
        <>
            <GridContainer>
                <p id="catalog" className="lg:col-span-12 mt-10 md:col-span-8 col-span-4 font-firaSans font-bold lg:text-4xl-l text-2xl text-main-black-text relative">
                    Каталог всех программ
                </p>
                {/* block with mobile search and menu */}
                <div className="md:col-span-7 col-span-3 lg:hidden block">
                    <div className="bg-white flex border border-border-light-gray rounded">
                        <img
                            src="/images/bx-search.svg"
                            alt="search"
                            className="my-4 ml-4 mr-2"
                        />
                        <input
                            value={valueSearch}
                            type="text"
                            className="bg-transparent focus:outline-none text-base my-4 mr-4 md:w-full w-48.2 text-main-black-text/40"
                            placeholder={"Поиск"}
                            onChange={handleInputValueSearch}
                        />
                    </div>
                </div>
                <div className="col-span-1 lg:hidden flex items-center justify-end"
                    onClick={() => setOpenFilters(true)}>
                    <img
                        src="/images/iconFilter.svg"
                        alt="search"
                        className=""
                    />
                </div>
                {/* mobile menu */}
                <div className={`${openFilters ? 'flex' : 'hidden'} z-10 fixed top-12 h-full bg-white flex-col lg:hidden right-0 md:w-1/2 w-full p-4 overflow-y-auto pb-10`}>
                    <div className="flex justify-end"
                        onClick={() => setOpenFilters(false)}>
                        <img
                            src="/images/crossMobile.svg"
                            alt="cross"
                            className=""
                        />
                    </div>


                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6 mb-4">
                                Направление подготовки
                            </p>
                            {switchTrainingTabs.map((item, index) => <SwitchSquareTab active={index === activeTrainingTab} onClick={() => {setActiveTrainingTab(index)}} 
                            key={index} className={'mb-2 last:mb-0'}>
                                {item.tab}
                            </SwitchSquareTab>)}
                        </div>
                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6 mb-4">
                                Тип обучения
                            </p>
                            {switchEducationTabs.map((item, index) => <SwitchSquareTab active={index === activeEducationTab} onClick={() => {setActiveEducationTab(index)}} 
                            key={index} className={'mb-2 last:mb-0'}>
                                {item.tab}
                            </SwitchSquareTab>)}
                        </div>
                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                                Форма обучения
                            </p>
                            {switchTabs.map((item, index) => <SwitchFormTab active={index === activeSwitchTab} onClick={() => { setActiveSwitchTab(index) }} key={index}>
                                {item.tab}
                            </SwitchFormTab>
                            )}
                        </div>
                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                                Форма обучения
                            </p>
                            {switchForms2Tabs.map((item, index) => <SwitchFormTab active={index === activeSwitchFormsTab} onClick={() => { setActiveSwitchFormsTab(index) }} key={index}>
                                {item.tab}
                            </SwitchFormTab>
                            )}
                        </div>
                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                                Форма обучения
                            </p>
                            {switchFormsTabs.map((item, index) => <SwitchFormTab active={index === activeSwitchForms2Tab} onClick={() => { setActiveSwitchForms2Tab(index) }} key={index}>
                                {item.tab}
                            </SwitchFormTab>
                            )}
                        </div>
                    <div className="md:hidden">
                        <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                            Вид подготовки
                        </p>
                        {navTabs.map((item, index) =>
                            <SwitchFormTab
                                active={index === activeNavTab}
                                onClick={() => { setActiveNavTab(index) }}
                                key={index}
                                className={``}>
                                {item.tab}
                            </SwitchFormTab>
                        )}
                    </div>
                    <div className="flex justify-center p-8 md:hidden">
                        <Button onClick={() => setOpenFilters(false)} className="px-9 py-3">
                            Применить фильтры
                        </Button>
                    </div>
                </div>
                {/* 1 block */}
                <div className="lg:col-span-9 md:col-span-8 col-span-4 flex flex-col lg:mt-8.5 mt-2">
                    <div className="md:flex hidden lg:-mr-0 md:-mr-4 space-x-4">
                        {navTabs.map((item, index) =>
                            <NavTab active={index === activeNavTab} onClick={() => setActiveNavTab(index)} key={index}>
                                {item.tab}
                            </NavTab>)}
                    </div>
                    <div className="p-8.5 bg-border-light-gray grid-cols-2 gap-4 md:grid hidden">
                        {/* filtering data */}
                        {filteredData.filter(item => item.title.includes(valueSearch) || item.cost.includes(valueSearch) || item.startsTime.includes(valueSearch) || item.duration.includes(valueSearch)).map((item, index) => (
                            <ProgramsCard key={index} {...item} />
                        ))}
                    </div>
                    {/* mobile */}
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        {/* filtering data */}
                        {filteredData.filter(
                            item => item.title.includes(valueSearch)
                                || item.cost.includes(valueSearch)
                                || item.startsTime.includes(valueSearch)
                                || item.duration.includes(valueSearch)
                        )
                            .map((item, index) => {
                                if (showMore) {
                                    return (
                                        <ProgramsCard key={index} {...item} />
                                    )
                                } else {
                                    if (index < 3) {
                                        return (
                                            <ProgramsCard key={index} {...item} />
                                        )
                                    }
                                }
                                // 
                            })}
                    </div>
                </div>
                {/* 2 block */}
                <div className="col-span-3 mt-32.5 pl-4.8 lg:flex flex-col hidden">
                    <div className="bg-white flex border border-border-light-gray rounded">
                        <img
                            src="/images/bx-search.svg"
                            alt="search"
                            className="my-4 ml-4 mr-2"
                        />
                        <input
                            value={valueSearch}
                            type="text"
                            className="bg-transparent focus:outline-none text-base my-4 mr-4 w-48.2 text-main-black-text/40"
                            placeholder={"Поиск"}
                            onChange={handleInputValueSearch}
                        />
                    </div>
                    <div className="pl-7 pt-11">
                    <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6 mb-4">
                                Направление подготовки
                            </p>
                            {switchTrainingTabs.map((item, index) => <SwitchSquareTab active={index === activeTrainingTab} onClick={() => {setActiveTrainingTab(index)}} 
                            key={index} className={'mb-2 last:mb-0'}>
                                {item.tab}
                            </SwitchSquareTab>)}
                        </div>
                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6 mb-4">
                                Тип обучения
                            </p>
                            {switchEducationTabs.map((item, index) => <SwitchSquareTab active={index === activeEducationTab} onClick={() => {setActiveEducationTab(index)}} 
                            key={index} className={'mb-2 last:mb-0'}>
                                {item.tab}
                            </SwitchSquareTab>)}
                        </div>
                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                                Форма обучения
                            </p>
                            {switchTabs.map((item, index) => <SwitchFormTab active={index === activeSwitchTab} onClick={() => { setActiveSwitchTab(index) }} key={index}>
                                {item.tab}
                            </SwitchFormTab>
                            )}
                        </div>
                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                                Форма обучения
                            </p>
                            {switchForms2Tabs.map((item, index) => <SwitchFormTab active={index === activeSwitchFormsTab} onClick={() => { setActiveSwitchFormsTab(index) }} key={index}>
                                {item.tab}
                            </SwitchFormTab>
                            )}
                        </div>
                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                                Форма обучения
                            </p>
                            {switchFormsTabs.map((item, index) => <SwitchFormTab active={index === activeSwitchForms2Tab} onClick={() => { setActiveSwitchForms2Tab(index) }} key={index}>
                                {item.tab}
                            </SwitchFormTab>
                            )}
                        </div>
                    </div>
                </div>
                <div className={`${showMore && 'hidden'} col-span-4 flex justify-center pt-2 md:hidden`}>
                    <Button onClick={() => setShowMore(true)} className="px-8">
                        Показать больше
                    </Button>
                </div>
            </GridContainer>
            <FeedBack />
        </>
    );
}