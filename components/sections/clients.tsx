import GridContainer from "../wrappers/gridContainer";

const clients = [
    {logo: 'logo1'},
    {logo: 'logo2'},
    {logo: 'logo3'},
    {logo: 'logo1'},
    {logo: 'logo3'},
    {logo: 'logo2'},
    {logo: 'logo2'},
    {logo: 'logo1'},
    {logo: 'logo2'},
    {logo: 'logo3'},
    {logo: 'logo1'},
    {logo: 'logo3'},
]


export default function Clients() {
  return (
    <>
      <GridContainer>
        <h2 className="lg:col-span-12 md:col-span-8 col-span-4 font-firaSans font-bold lg:text-4xl-l text-2xl text-main-black-text">
            Клиенты
        </h2>
        <p className="lg:col-span-12 md:col-span-8 col-span-4 font-roboto font-normal text-base lg:text-xl text-main-black-text -mt-1 pb-4">Обучаем управлению проектами с 2011 года</p>
        {clients.map((item, index) => (
            <div key={index} className="lg:col-span-2 md:col-span-2 col-span-1 flex justify-center">
                <img src={`/images/clients/${item.logo}.svg`} alt={`${item.logo}`}/>
            </div>
        ))}
      </GridContainer>
    </>
  );
}
