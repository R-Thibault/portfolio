import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Footerbar } from "../components/Footer";
import Head from "next/head";
import { CV } from "../components/Timeline";
import { Skills } from "../components/Skills";

const skill = [
  {
    domain: "HTML",
    progress: 80,
  },
  {
    domain: "CSS",
    progress: 70,
  },
  {
    domain: "Javascript",
    progress: 65,
  },
  {
    domain: "React",
    progress: 60,
  },
  {
    domain: "Next",
    progress: 50,
  },
  {
    domain: "Tailwind",
    progress: 65,
  },
  {
    domain: "Php",
    progress: 65,
  },

];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-abstract1 bg-fixed bg-no-repeat">
      <Head>
        <title>Thibault Rossa développeur web portfolio | About</title>
      </Head>

      <Header />

      <main className="flex min-h-screen w-full flex-col items-center justify-evenly text-white">
        <h1 className="text-6xl font-bold mt-10">Mon parcours</h1>
        <p className="text-center text-lg w-[80vw]">
          Je suis un développeur web junior, j'ai 33 ans et je suis passionné
          par le développement web. J'ai commencé à apprendre le développement
          web en autodidacte en 2021, j'ai ensuite sauté le pas et commencé une
          formation en 2022 pour devenir développeur web et web mobile.
          Actuellement, j'aimerai continué à apprendre, je souhaiterai poursuivre mes études en alternance dans le développement web.
        </p>
        
        <div className="flex flex-col lg:flex-row min-w-full min-h-full items-center justify-evenly  gap-10 text-white">
          <div className="flex flex-col h-60 lg:h-[24em] justify-evenly items-center">
            <h2>
              <span className="text-4xl font-bold">Mes compétences</span>
            </h2>
            <div className="flex lg:flex-col flex-wrap min-h-full items-center justify-evenly gap-1">
              {skill.map((Skill) => (
                <Skills key={Skill.domain} {...Skill} />
              ))}
            </div>
          </div>
          <CV/>
        </div>
      </main>

      <Footerbar />
    </div>
  );
}
