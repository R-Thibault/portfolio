import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Footerbar } from "../components/Footer";
import Head from "next/head";
import { HelloMe } from "@/components/HelloMe";
import { Card } from "@/components/Card";
import { CV } from "../components/Timeline";
import { Skills } from "../components/Skills";

const skill = [
  {
    domain: "HTML",
    progress: 90,
  },
  {
    domain: "CSS",
    progress: 90,
  },
  {
    domain: "Javascript",
    progress: 70,
  },
  {
    domain: "React",
    progress: 60,
  },
  {
    domain: "Next",
    progress: 60,
  },
  {
    domain: "Tailwind",
    progress: 75,
  },
  {
    domain: "Php",
    progress: 65,
  },

];


const Cards = [
  {
    title: "Site pour photographe",
    description:
      "Création d'un site pour photographe avec Next.js et TailwindCSS. Grace a un CMS Headless (Contentful), le photographe peu gerer ses photos, ses albums, ses tarifs, etc...",
    image: "/photowebsitegallery.png",
    link: "https://photowebsite-studi.netlify.app/",
    git : "https://github.com/R-Thibault/Photowebsite-eval.git",
  },
  {
    title: "FrontEndMentor",
    description:
      "Plusieur challenge sur le site FrontEndMentor en HTML,CSS, JS",
    image: "/FrontEndMentor.png",
    link: "https://www.frontendmentor.io/profile/R-Thibault",
  },
  {
    title: "Mon portfolio",
    description:
      "Ce portfolio, crée avec Next.js et TailwindCSS. Il est hébergé sur Vercel.", 
    image: "/portfolio-screenshot.png",
    
    git : "https://github.com/R-Thibault/portfolio.git",
  },
];

export default function Home() {
  return (
    <div className="min-h-full flex flex-col  bg-abstract1 bg-fixed bg-no-repeat">
      <Head>
        <title>Thibault Rossa développeur web portfolio</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center min-h-screen space-y-4 grow z-20">
        <div className="md:h-screen h-full w-full flex flex-col-reverse md:flex-row items-center justify-around mx-auto">
          <div className="flex items-center z-20 space-y-2 md:basis-1/4">
            <HelloMe className="" />
          </div>
          <div className="p-2">
            <Image
            id="portrait"
              src="/photo-rev.jpg"
              width={600}
              height={600}
              alt="photo moi"
              className="z-40 md:my-5 rounded-full"
            />
          </div>
        </div>
        <div className="w-11/12">
        <div className=" flex items-center flex-col border-t-2">
          <h2 className="text-6xl font-bold m-10 text-white">
            Mes projets
          </h2>

          <div className="flex h-full w-full flex-wrap justify-evenly m-6 gap-5">
            {Cards.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </div>
        </div>
        <div className="flex flex-col min-h-screen items-center justify-evenly text-white border-t-2 mx-2">
        <h2 className="text-6xl font-bold m-10" id="info" >Mon parcours</h2>
        <p className="text-center text-xl w-[80vw] my-6">
          Je suis un développeur web junior et je suis passionné
          par le développement web. J'ai commencé à apprendre le développement
          web en autodidacte en 2021, j'ai ensuite sauté le pas et commencé une
          formation en 2022 pour devenir développeur web et web mobile.
          Actuellement, j'aimerai continué à apprendre, je souhaiterai poursuivre mes études en alternance dans le développement web.
        </p>
        
        <div className="flex flex-col lg:flex-row min-w-full min-h-full items-center justify-evenly  gap-10 text-white text-xl">
          <div className="flex flex-col lg:h-[24em] justify-evenly items-center">
            <h2 className="text-4xl font-bold my-2">
              Mes compétences
            </h2>
            <div className="flex flex-col h-full gap-6 w-full">
              
                <Skills />
              
            </div>
          </div>
          <CV/>
        </div>
        </div>
        </div>
      </main>

      <Footerbar />
    </div>
  );
}
