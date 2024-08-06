import { useContext, useEffect, useState } from "react"
import Button from "../../components/atoms/button"
import NavTab from "../../components/atoms/navTab"
import SwitchFormTab from "../../components/atoms/switchFormTab"
import ProjectsCard from "../../components/cards/projectsCard"
import { ProjectsContext } from "../../components/context/projects"
import { IVacanсyProjectsCard } from "../../components/interfaces"
import FeedBack from "../../components/sections/feedback"
import GridContainer from "../../components/wrappers/gridContainer"

const navTabs = [
    {
        tab: "Обучения",
        filter: "learning",
    },
    {
        tab: "Мероприятия",
        filter: "events",
    },
]

const learningFormat = [
    {
        tab: "Онлайн",
        filter: "online",
    },
    {
        tab: "Офлайн",
        filter: "ofline",
    },
    {
        tab: "Электронное обучение",
        filter: "e-learning",
    },
]

const qualification = [
    {
        tab: 'Повышение квалификации',
        filter: 'training',
    },
    {
        tab: 'Профпереподготовка',
        filter: 'professionalRetraining',
    },
]

const price = [
    {
        tab: 'Платно',
        filter: 'paid',
    },
    {
        tab: 'Бесплатно',
        filter: 'isFree',
    },
]

export default function Projects() {

    const { projectsList } = useContext(ProjectsContext)
    //button for showAll
    const [showMore, setShowMore] = useState(false)
    const [openFilters, setOpenFilters] = useState(false)

    const [valueSearch, setValueSearch] = useState("")
    const handleInputValueSearch = (e: any) => {
        setValueSearch(e.target.value);
    }


    const [activeNavTab, setActiveNavTab] = useState(0)
    const [activeLearningTab, setActiveLearningTab] = useState(0)
    const [activeQualificationTab, setActiveQualificationTab] = useState(0)
    const [activePriceTab, setActivePriceTab] = useState(0)
    const [filteredData, setFilteredData] = useState<IVacanсyProjectsCard[]>([])

    //filtering array of data
    useEffect(() => {
        let arr: IVacanсyProjectsCard[] = projectsList
        let temp: IVacanсyProjectsCard[] = projectsList
        if (navTabs[activeNavTab].filter !== '') {
            arr = temp.filter(item => item.navTabs === navTabs[activeNavTab].filter)
        }
        if (learningFormat[activeLearningTab].filter !== '') {
            arr = temp.filter(item => item.learningFormat === learningFormat[activeLearningTab].filter)
        }
        if (qualification[activeQualificationTab].filter !== '') {
            arr = temp.filter(item => item.qualification === qualification[activeQualificationTab].filter)
        }
        if (price[activePriceTab].filter !== '') {
            arr = temp.filter(item => item.price === price[activePriceTab].filter)
        }
        if (navTabs[activeNavTab].filter !== '' && learningFormat[activeLearningTab].filter !== '' && qualification[activeQualificationTab].filter !== '' && price[activePriceTab].filter !== '') {
            arr = temp.filter((item) => item.navTabs === navTabs[activeNavTab].filter).filter((item) => item.learningFormat === learningFormat[activeLearningTab].filter).filter((item) => item.qualification === qualification[activeQualificationTab].filter).filter((item) => item.price === price[activePriceTab].filter)
        }
        setFilteredData(arr)
    }, [activeNavTab, activeLearningTab, activeQualificationTab, activePriceTab, projectsList])

    useEffect(() => {
        if (filteredData.length < 3) setShowMore(true);
        else setShowMore(false)
    }, [filteredData])

    return (
        <>
            <GridContainer>
                <p id="catalog" className="lg:col-span-12 mt-10 md:col-span-8 col-span-4 font-firaSans font-bold lg:text-4xl-l text-2xl text-main-black-text relative">
                    Каталог всех проектов
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
                <div className={`${openFilters ? 'flex' : 'hidden'} fixed top-0 h-full bg-white flex-col lg:hidden right-0 md:w-1/2 w-full p-4`}>
                    <div className="flex justify-end"
                        onClick={() => setOpenFilters(false)}>
                        <img
                            src="/images/crossMobile.svg"
                            alt="cross"
                            className=""
                        />
                    </div>
                    <div>
                        <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                            Форма обучения
                        </p>
                        {learningFormat.map((item, index) => (
                            <SwitchFormTab active={index === activeLearningTab} onClick={() => { setActiveLearningTab(index) }} key={index}>
                                {item.tab}
                            </SwitchFormTab>
                        )
                        )}
                    </div>
                    <div className="md:hidden">
                        <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                            Вид подготовки
                        </p>
                        {navTabs.map((item, index) => (
                            <SwitchFormTab active={index === activeNavTab} onClick={() => { setActiveNavTab(index) }} key={index}>
                                {item.tab}
                            </SwitchFormTab>
                        )
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
                            <NavTab active={index === activeNavTab} onClick={() => setActiveNavTab(index)} key={index} className={`w-56`}>
                                {item.tab}
                            </NavTab>)}
                    </div>
                    <div className="p-8.5 bg-border-light-gray grid-cols-2 gap-4 md:grid hidden">
                        {/* filtering data */}
                        {filteredData.map((item, index) => (
                            <>
                                <ProjectsCard key={index} {...item} />
                            </>
                        ))}
                    </div>
                    {/* mobile */}
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        {/* filtering data */}
                        {filteredData.filter(
                            item => item.title.includes(valueSearch)
                                || item.form.includes(valueSearch)
                                || item.startsTime.includes(valueSearch)
                                || item.qualification.includes(valueSearch)
                        )
                            .map((item, index) => {
                                if (showMore) {
                                    return (
                                        <>
                                            <ProjectsCard key={index} {...item} />
                                        </>
                                    )
                                } else {
                                    if (index < 3) {
                                        return (
                                            <>
                                                <ProjectsCard key={index} {...item} />
                                            </>
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
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                                Формат обучения
                            </p>
                            {learningFormat.map((item, index) => (
                                <SwitchFormTab active={index === activeLearningTab} onClick={() => { setActiveLearningTab(index) }} key={index}>
                                    {item.tab}
                                </SwitchFormTab>
                            )
                            )}
                        </div>
                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                                Форма обучения
                            </p>
                            {qualification.map((item, index) => (
                                <SwitchFormTab active={index === activeQualificationTab} onClick={() => { setActiveQualificationTab(index) }} key={index}>
                                    {item.tab}
                                </SwitchFormTab>
                            )
                            )}
                        </div>
                        <div>
                            <p className="font-firaSans font-bold text-main-black-text text-lg-m pt-6">
                                Цена обучения
                            </p>
                            {price.map((item, index) => (
                                <SwitchFormTab active={index === activePriceTab} onClick={() => { setActivePriceTab(index) }} key={index}>
                                    {item.tab}
                                </SwitchFormTab>
                            )
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