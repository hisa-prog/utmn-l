import GridContainer from "../wrappers/gridContainer";
import Button from "../atoms/button";

const news = [
  {
    title: "Новая программа обучения для студентов ТюмГУ",
    date: "15 Января, 2022 г.",
    image: "1",
  },
  {
    title: "Новая программа обучения для студентов ТюмГУ",
    date: "15 Января, 2022 г.",
    image: "1",
  },
  {
    title: "Новая программа обучения для студентов ТюмГУ",
    date: "15 Января, 2022 г.",
    image: "1",
  },
  {
    title: "Новая программа обучения для студентов ТюмГУ",
    date: "15 Января, 2022 г.",
    image: "1",
  },
];

export default function News() {
  return (
    <>
      <GridContainer>
        <h2 className="lg:col-span-12 md:col-span-8 col-span-4 font-firaSans font-bold lg:text-4xl-l text-2xl text-main-black-text pb-4">
            Новости
        </h2>
        {news.map((item, index) => (
            <div key={index} className={`${index > 2 && 'hidden md:block lg:hidden'} col-span-4`}>
                <a className="rounded-sm">
                    <img src={`/images/news/${item.image}.webp`} alt='event'  className="w-full"/>
                </a>
                <p className="font-roboto font-normal text-base text-main-black-text/40 pt-2.5">{item.date}</p>
                <p className="font-firaSans font-medium text-xl text-main-black-text xl:w-4/5 md:w-full w-4/5 pt-2.5">{item.title}</p>
            </div>
           ))}
           <Button className="xl:col-span-2 md:col-span-4 col-span-3 mt-4 lg:px-9.5 px-20">Читать все</Button>
      </GridContainer>
      <div className="relative">
        <img src='/images/purpleBubbleFull.svg' alt='bubble'  className="absolute left-1/2 -bottom-4 -z-10 lg:block hidden"/>
        <img src='/images/bigBlueBubble.svg' alt='bubble'  className="absolute right-0 -bottom-4 -z-10 lg:block hidden"/>
      </div>
    </>
  );
}
