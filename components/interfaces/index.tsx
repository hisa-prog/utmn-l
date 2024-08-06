export interface IVacanсyProjectsCard {
    id: string;
    navTabs: string;
    qualification: string;
    price: string;
    form: string;
    color: string;
    title: string;
    image: string;
    description: string;
    sections: Array<{ img: string, text: string }>;
    text: string;
    whoIsUseful: Array<{ text: string }>;
    program: Array<{ data: string, title: string, description: string }>;
    youLearn: Array<{ text: string }>;
    team: Array<{ img: string, name: string, jobTitle: string }>;
    individualParticipation: string;
    teamParticipation: string;
    startsTime: string;
    endTime: string;
    learningFormat: string;
}

export interface IVacanсyProgramsCard {
    id: string;
    type: string;
    recruiting: boolean;
    form: string;
    title: string;
    image: any;
    description: string;
    sections: Array<{ img: string, text: string }>;
    text: string;
    whoIsUseful: Array<{ text: string }>;
    program: Array<{ data: string, title: string, description: string }>;
    youLearn: Array<{ text: string }>;
    team: Array<{ img: string, name: string, jobTitle: string }>;
    individualParticipation: string;
    teamParticipation: string;
    startsTime: string;
    endTime: string;
    cost: string;
    duration: string;
    name: string;
    mail: string;
    num: string;
    color: string;
    training: string;
    education: string;
    form1: string;
    form2: string;
}

export interface IModal {
    className?: string
    isOpen: boolean
    open: () => void
    close: () => void
    customClasses?: boolean
    children: any,
    onSideClick?: () => void
}

export interface ISuccessModal {
    successModal: any;
}

export interface IFailModal {
    failModal: any;
}
export interface ILoadModal {
    loadModal: any;
}