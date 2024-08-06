import GridContainer from "../wrappers/gridContainer";
import Button from "../atoms/button";
import { useEffect, useState } from "react";

const events = [
  {
    title: "SAS (Школа перспективных исследований)",
    eventImage: "1",
    date: "15 Января",
  },
  {
    title: "SAS (Школа перспективных исследований)",
    eventImage: "1",
    date: "15 Января",
  },
  {
    title: "SAS (Школа перспективных исследований)",
    eventImage: "1",
    date: "15 Января",
  },
  {
    title: "SAS (Школа перспективных исследований)",
    eventImage: "1",
    date: "15 Января",
  },
];

const navTabs = [
  {
    tab: "Заказывайте обучение персонала",
    filter: "Companys",
  },
  {
    tab: "Повышайте квалификацию",
    filter: "Employees",
  },
  {
    tab: "Внедряйте новые формы обучения",
    filter: "Universities",
  },
  {
    tab: "Программа «под ключ»",
    filter: "Clients",
  },
];

const tabButtons = [
  {
    tab: "Компаниям",
    filter: "companys",
    img: '/images/businessman.webp',
  },
  {
    tab: "Сотрудникам",
    filter: "companys",
    img: '/images/girl.webp',
  },
  {
    tab: "Университетам",
    filter: "Universities",
    img: '/images/stedents.webp',
  },
  {
    tab: "Индивидуальным <br/> клиентам",
    filter: "Clients",
    img: '/images/girl.webp',
  },
];

export default function MainTitle() {
  const [activeNavTab, setActiveNavTab] = useState(0);

  const load = () => {
    setActiveNavTab((prev: any) => {
      if (prev != 4) return prev + 1;
      else if ((prev = 4)) return (prev = 0);
    });
  };
  useEffect(() => {
    if (activeNavTab === 4) setActiveNavTab(0);
    else setTimeout(load, 4000); //4000
  }, [activeNavTab]);



  return (
    <>
      <GridContainer>
        <div id="main" className="lg:col-span-10 md:col-span-8 col-span-4 md:max-h-437px md:bg-main-dirty-white md:rounded-t-2xl md:rounded-br-2xl relative mt-10">
          <div className="xl:max-w-lg lg:max-w-sm  max-w-343 md:pl-8 lg:pt-18.5 md:pt-12 lg:pb-24.5 md:pb-18.5 pb-10 flex flex-col">
            <h1 className="font-roboto font-medium tracking-main uppercase xl:text-sm text-xs-m lg:max-w-lg max-w-4xs text-main-black-text/40">
              Центр дополнительного образования ТюмГУ
            </h1>
            <div className="flex flex-col py-6">
              {navTabs.map((item, index) =>
                index === activeNavTab ? (
                  <p key={index} className="transition-all duration-300 font-firaSans font-extrabold md:font-bold text-main-black-text xl:text-5xl-l text-4xl-sm md:text-3xl pb-2">
                    {item.tab}
                  </p>
                ) : (
                  ""
                )
              )}
              <p className="font-roboto font-normal text-main-black-text xl:text-xl text-base">
                Курсы и тренинги для вашего развития{" "}
              </p>
            </div>
            <a href="#catalog">
              <Button>Выбрать курс</Button>
            </a>
          </div>
          <img
            src="/images/ellipse.svg"
            alt="ellipse"
            className="absolute top-0 right-0 lg:block hidden"
          />
          <img
            src="/images/ellipseTablet.svg"
            alt="ellipse"
            className="absolute top-0 right-0 md:block hidden"
          />
          <div className="md:absolute lg:top-6 md:top-16 lg:-right-37.5 md:-right-6 rounded-2xl bg-vacancy-blue w-[342px] h-[238px] lg:h-[366px]  lg:w-[527px] md:max-h-366px max-h-60">
            {/* Слайдер */}
            {
              tabButtons.map((item, index) => (
                <img
                  key={index}
                  src={`${item.img}`}
                  alt="girl"
                  className={`
                  ${index === activeNavTab
                      ? 'block'
                      : 'hidden'
                    }
                  absolute bottom-0 left-0 xl:max-h-366px lg:max-h-350px max-h-60`}
                />
              ))
            }
            <div
              className={`${activeNavTab != 4 && "fill-action"} w-full`}
            ></div>
          </div>
          <div className="flex flex-col absolute lg:top-16 md:top-16 top-72 lg:-right-48 md:-right-10 -right-3 items-end" >
            {tabButtons.map((item, index) => (
              <div
                key={index}
                className={`${index === activeNavTab
                  ? "lg:p-4 p-3 bg-main-blue"
                  : "lg:py-4 py-2.5 lg:px-6 px-5 shadow-white-button bg-white"
                  } text-right rounded-lg transition-all duration-300 ease-in lg:mt-3 mt-2.5`}
              >
                <p
                  className={`
                 ${index === activeNavTab
                      ? "text-white lg:text-xl-l text-base-m lg:mx-8 mx-4 lg:font-normal font-medium"
                      : "text-main-blue lg:text-base-m  text-sm  lg:mx-2.5 mx-1 "
                    } 
                  font-firaSans font-normal `}
                  dangerouslySetInnerHTML={{ __html: item.tab }}
                >
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* events */}
        <div className="lg:col-span-12 md:col-span-8 col-span-4 pt-10">
          <p className="font-roboto font-medium tracking-main uppercase lg:text-sm text-xs-m text-main-black-text/40">
            Ближайшие мероприятия
          </p>
        </div>
        {events.map((item, index) => (
          <div
            key={index}
            className="lg:col-span-3 col-span-4 rounded-xl border border-border-light-blue bg-inherit"
          >
            <div className="pt-4 pb-3 px-3">
              <div className="flex justify-between">
                <p className="font-firaSans font-semibold text-base-m text-main-black-text lg:w-1/2 w-36">
                  {item.title}
                </p>
                <a className="rounded-sm">
                  <img
                    src={`/images/events/${item.eventImage}.webp`}
                    alt="event"
                    className="w-36 xl:w-24 lg:w-20"
                  />
                </a>
              </div>
              <div className="flex justify-between items-center pt-2">
                <p className="font-roboto font-medium tracking-main uppercase text-base text-main-black-text/40">
                  {item.date}
                </p>
                <img
                  src="/images/arrowEvent.svg"
                  alt="arrow"
                  className="p-1.5 cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </GridContainer>
      <img
        src="/images/purpleBubble.svg"
        alt="bubble"
        className="absolute left-0 lg:-bottom-40 md:-bottom-0 -z-10 md:block hidden"
      />
      <img
        src="/images/blueBubble.svg"
        alt="bubble"
        className="absolute right-0 lg:-bottom-60 -bottom-80 -z-10 md:block hidden"
      />
      <img
        src="/images/ellipseBlueMobile.svg"
        alt="bubble"
        className="absolute top-52 right-0 -z-10 md:hidden block"
      />

    </>
  );
}
