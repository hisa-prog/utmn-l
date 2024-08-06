import router from "next/router";
import { useState } from "react";

const subFooter = [
  {
    text: 'Документы о квалификации',
    link: '/documents.pdf',
  },
  {
    text: 'Лицензия',
    link: '/license.pdf',
  },
  {
    text: 'Договор оферты',
    link: '/offer.pdf',
  },
]

const headerItems = [
  {
    link: '/projects',
    text: 'проекты',
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

const Footer = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <>
      <div className={`relative`}>
        <div>
          <div className="px-4 md:px-8 lg:px-16 pb-4 lg:pb-0 bg-main-blue h-auto lg:h-[119px] items-center justify-between flex flex-col lg:flex-row">
            <div className={`h-full w-full flex items-center lg:justify-start justify-center p-4`}>
              <a className={`cursor-pointer`} onClick={() => {
                router.push(`/`)
              }}>
                <img src='/images/logo.svg' alt='utmnLogo' className="w-28" />
              </a>
            </div>
            <div>
              <div className="flex flex-col lg:flex-row items-center justify-end font-firaSans font-bold text-white text-base mb-4 lg:mb-0">
                {headerItems.map((item, index) => (
                  <a className="flex cursor-pointer pb-4 lg:pb-0 last:pb-0 lg:pr-4 last:pr-0"
                    href={item.link}
                    key={index}
                  >
                    <span className="uppercase flex">
                      {item.text}
                    </span>
                  </a>
                ))}

              </div>
              <div className={`flex flex-col lg:flex-row items-center`}>
                {subFooter.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target='_blank'
                    rel='noreferrer'
                    className={`text-sky-blue pb-4 lg:pb-0 last:pb-0 lg:pr-4 w-max last:pr-0`}
                  >
                    {item.text}
                  </a>
                ))}
                <a
                  onClick={() => {
                    // setIsShown(!isShown)
                    alert('Оплата производится Заказчиком на условиях предварительной оплаты в безналичном порядке на основании выставленного счета от Исполнителя путем 100 % перечисления денежных средств в течение 5 (пяти) рабочих дней с момента заключения договора, если иной срок оплаты не согласован между сторонами.')
                  }}
                  className={`text-sky-blue cursor-pointer`}>
                  Оплата
                </a>
              </div>
            </div>
          </div>
          {/* <div className="h-[62px] bg-main-blue md:hidden block"></div> */}
        </div>
        <div className={`${isShown ? 'block' : 'hidden'} absolute left-1/3 bottom-96 right-1/3 rounded p-4  bg-[#CCE8F2]`}>
          <div className={`flex justify-end`}>
            <div
              onClick={() => setIsShown(!isShown)}
              className={`relative flex justify-center items-center cursor-pointer`}>
              <div className={`h-[1px] w-4 bg-black absolute rotate-45`} />
              <div className={`h-[1px] w-4 bg-black absolute -rotate-45`} />
            </div>
          </div>
          <p className={`text-black`} >Оплата производится Заказчиком на условиях предварительной оплаты в безналичном порядке на основании выставленного счета от Исполнителя путем 100 % перечисления денежных средств в течение 5 (пяти) рабочих дней с момента заключения договора, если иной срок оплаты не согласован между сторонами.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
