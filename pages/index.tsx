import type { NextPage } from "next";
import ProjectsCatalog from "../components/sections/projectsCatalog";
import MainTitle from "../components/sections/mainTitle";
import News from "../components/sections/news";
import Interview from "../components/sections/Interview";
import Clients from "../components/sections/clients";
import FAQ from "../components/sections/faq";
import FeedBack from "../components/sections/feedback";
import ProgramsCatalog from "../components/sections/programsCatalog";
import Team from "../components/sections/team";

const Home: NextPage = () => {
  return (
    <>
      <MainTitle />
      <ProjectsCatalog />
      <ProgramsCatalog />
      <News />
      <Interview />
      <Team />
      <Clients />
      <FAQ />
      <FeedBack />
    </>
  )
}

export default Home
