import GridContainer from "../wrappers/gridContainer"

const team = [
    {
        img: 'team/latishes.webp',
        name: 'Латышев Андрей Сергеевич',
        text: 'Проректор ТюмГУ ',
        mail: 'a.s.latyshev@utmn.ru',
    },
    {
        img: 'team/vasileva.webp',
        name: 'Васильева Владилена Олеговна',
        text: 'Руководитель проекта «Открытый UTMN» ',
        mail: 'v.o.vasileva@utmn.ru',
    },
    {
        img: 'team/man.svg',
        name: 'Яковлев Александр Александрович',
        text: 'Директор ЦДО ТюмГУ',
        mail: 'a.a.yakovlev@utmn.ru',
    },
    {
        img: 'team/sirina.webp',
        name: 'Сирина Елена Михайловна',
        text: 'Руководитель направления ЦДО ТюмГУ ',
        mail: 'e.m.sirina@utmn.ru',
    },
    {
        img: 'team/tumenskaja.webp',
        name: 'Тюменцева Ксения Владимировна',
        text: 'Руководитель направления ЦДО ТюмГУ',
        mail: 'k.v.tyumenceva@utmn.ru',
    },
    {
        img: 'team/sutkina.webp',
        name: 'Сюткина Юлия Вадимовна',
        text: 'Помощник проректора ',
        mail: 'y.v.syutkina@utmn.ru',
    },
    {
        img: 'team/druganova.webp',
        name: 'Друганова Оксана Валерьевна',
        text: 'Главный менеджер ЦДО ТюмГУ ',
        mail: 'o.v.druganova@utmn.ru',
    },
    {
        img: 'team/shilenko.webp',
        name: 'Шиленко Ирина Андреевна',
        text: 'Главный менеджер Центра развития взрослых',
        mail: 'i.a.shilenko@utmn.ru',
    },
]

export default function Team() {
    return (
        <>
            <GridContainer id='team'>
                <h2 className="lg:col-span-12 pt-24 md:col-span-8 col-span-4 font-firaSans font-bold lg:text-4xl-l text-2xl text-main-black-text pb-4">
                    Наша команда
                </h2>
                {team.map((item, index) => (
                    <div className={`col-span-4 lg:col-span-3 flex flex-col`} key={index}>
                        <img className={`rounded`} src={item.img} alt='team' />
                        <p className={`text-xl font-bold mt-2`}>{item.name}</p>
                        <p className={`opacity-60 mt-1`}>{item.text}</p>
                        <a href={`mailto:${item.mail}`} target="_blank" rel="noopener noreferrer" className={`text-main-blue mt-2`}>{item.mail}</a>
                    </div>
                ))}
            </GridContainer>
        </>
    )
}