import GridContainer from "../wrappers/gridContainer";

const interviews = [
  {
    content: "Материалы курса были полезны с нескольких позиций. С точки зрения возможностей применения ряда перспективных подходов в образовательной и научно-исследовательской деятельности современного педагога. Это позволило найти актуальные и конкурентоспособные решения. ",
    name: "Трухина Ирина Игоревна",
    specification: "Студентка ТюмГУ",
    image: "1",
  },
  {
    content: "Благодаря курсу сформировалось более четкое видение масштабов продукта, очертился круг заказчиков, определились точки роста и дальнейшего развития. В процессе обучения нами было запущено 2 проекта по оценке компетенций, подготовке индивидуальных траекторий развития и обучения медицинских работников с высшим и средним образованием. ",
    name: "Тихонов Александр Олегович",
    specification: "Студент ТюмГУ",
    image: "2",
  },
  {
    content: "На курс пришли с конкретной проектной идеей о внедрении современных образовательных продуктов на региональном уровне. На выходе получили детализацию идеи, перспективные направления реализации в формате двух курсов (один из них - в партнёрстве) для разных уровней и целевых аудиторий как на региональном, так и всероссийском уровне. ",
    name: "Новицкий Артем Александрович",
    specification: "Студент ТюмГУ",
    image: "3",
  },
];

export default function Interview() {
  return (
    <>
      <GridContainer id='reviews'>
        <h2 className="lg:col-span-12 pt-24 md:col-span-8 col-span-4 font-firaSans font-bold lg:text-4xl-l text-2xl text-main-black-text pb-4">
            Отзывы
        </h2>
        {interviews.map((item,index) => (
          <div key={index} className="flex lg:flex-row flex-col lg:col-span-12 md:col-span-8 col-span-4 pb-6">
            <img src={`/images/interview/${item.image}.webp`} alt='event'  className="rounded-lg-l md:w-1/2"/>
            <div className="lg:pl-6 flex lg:flex-col flex-col-reverse">
                <p className="font-roboto font-normal lg:text-xl text-base text-main-black-text">{item.content}</p>
                <div className="py-4">
                  <p className="pb-0.5 font-roboto font-medium text-xl text-main-black-text">{item.name}</p>
                  <p className="font-roboto font-medium text-xl text-main-black-text/40">{item.specification}</p>
                </div>
            </div>
        </div>
        ))}
      </GridContainer>
    </>
  );
}