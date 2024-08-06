import Link from "next/link";
import React from "react";
import { IVacanсyProjectsCard } from "../interfaces";


const ProjectsCard = ({
    id,
    navTabs,
    qualification,
    price,
    form,
    color,
    title,
    description,
    startsTime,
    learningFormat,
}: IVacanсyProjectsCard) => {

    return (
        <Link href={`projects/${id}`}>
            <div style={{ backgroundColor: `${color}` }} className={`lg:px-5 lg:py-5 md:px-4 md:py-4 px-8 py-6 flex flex-col rounded-lg-l cursor-pointer`}>
                <p className="font-firaSans font-bold xl:text-2xl lg:text-lg-m text-lg-m text-white">
                    {title}
                </p>
                <div className="pt-8 pb-2.5 text-white lg:flex lg:justify-between">
                    {description}
                    <p className="font-firaSans font-normal text-base text-white self-center lg:pl-0 pl-10">

                    </p>
                </div>
                <div className={`flex mt-10`}>
                    <div className="py-2.5 flex items-start">
                        <img src="/images/cube.svg" alt="cube" className="-mt-1" />
                        <div className="flex flex-col text-left items-start justify-start pl-2">
                            <p className="font-firaSans font-semibold text-base-m text-white">
                                Начало обучение
                            </p>
                            <p className="font-firaSans font-normal text-base text-white">{startsTime}</p>
                        </div>
                    </div>
                    <div className="py-2.5 flex items-start">
                        <img src="/images/cube.svg" alt="cube" className="-mt-1" />
                        <div className="flex flex-col text-left items-start justify-start pl-2">
                            <p className="font-firaSans font-semibold text-base-m text-white">
                                Форма обучения
                            </p>
                            <p className="font-firaSans font-normal text-base text-white">{form}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default ProjectsCard;
