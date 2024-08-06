import Link from "next/link";
import React from "react";
import { IVacanсyProgramsCard } from "../interfaces";


const ProgramsCard = ({
  id,
  title,
  cost,
  startsTime,
  duration,
  image,
  name,
  mail,
  num,
  color
}: IVacanсyProgramsCard) => {


  // function numWithSpace(item: number) {
  //   if (item != undefined)
  //     return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  // }

  return (
    <Link href={`programs/${id}`}>
    <div style={{ backgroundColor: `${color}`}} className={`lg:px-5 lg:py-5 md:px-4 md:py-4 px-8 py-6  flex flex-col rounded-lg-l cursor-pointer`}>
      <div className="flex justify-between">
        <p className="xl:max-w-2xs md:max-w-184px max-w-220px font-firaSans font-bold xl:text-2xl lg:text-lg-m text-lg-m text-white">
          {title}
        </p>
        <p className="font-firaSans font-bold lg:text-lg-m text-base-m text-white">{cost} ₽</p>
      </div>
      <div className="pt-8 pb-2.5 border-b border-white lg:flex lg:justify-between">
        <div className="flex items-center">
          <img src="/images/cube.svg" alt="cube" className="" />
          <p className="font-firaSans font-semibold text-base-m text-white pl-2">
            Начало обучения
          </p>
        </div>
        <p className="font-firaSans font-normal text-base text-white self-center lg:pl-0 pl-10">
          {startsTime}
        </p>
      </div>
      <div className="py-2.5 border-b border-white lg:flex lg:justify-between">
        <div className="flex items-center">
          <img src="/images/cube.svg" alt="cube" className="" />
          <p className="font-firaSans font-semibold text-base-m text-white pl-2">
            Длительность
          </p>
        </div>
        <p className="font-firaSans font-normal text-base text-white self-center lg:pl-0 pl-10">
          {duration}
        </p>
      </div>
      <div className="pt-6 flex">
        <img src={`/images/vacancys/${image}.webp`} alt="person" className="rounded" />
        <div className="flex flex-col pl-4">
          <p className="font-firaSans font-semibold text-base-m text-white">
            {name}
          </p>
          <p className="font-roboto font-normal text-base text-white">
            {mail}
          </p>
          <p className="font-roboto font-normal text-base text-white">
            {num}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};
export default ProgramsCard;
