import GridContainer from "../wrappers/gridContainer";
import Question from "../cards/question";

const questions = [
    {
        question: 'Будут ли курсы полезны для новичков в сфере?',
        answer: 'Материалы курса были полезны с нескольких позиций. С точки зрения возможностей применения ряда перспективных подходов в образовательной и научно-исследовательской деятельности современного педагога. Это позволило найти актуальные и конкурентоспособные решения. '
    },
    {
        question: 'Какой график обучения? Можно ли совмещать учёбу с работой?',
        answer: ''
    },
    {
        question: 'Где можно ознакомиться с преподавательским составом?',
        answer: ''
    },
    {
        question: 'Действуют ли программы рассрочки на обучение?',
        answer: ''
    },
    {
        question: 'Где узнать расписание занятий?',
        answer: ''
    },
]


export default function FAQ() {
  return (
    <>
      <GridContainer>
        <h2 className="lg:col-span-12 md:col-span-8 col-span-4 font-firaSans font-bold lg:text-4xl-l text-2xl text-main-black-text pb-4">
            Часто задаваемые вопросы
        </h2>
        {questions.map((item, index) => (
            <Question
            key={index}
            question={item.question}
            answer={item.answer} />
        ))}
      </GridContainer>
    </>
  );
}