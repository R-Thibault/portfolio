import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Footerbar } from "../components/Footer";
import Head from "next/head";
import { HelloMe } from "@/components/HelloMe";
import { Card } from "@/components/Card";
import { useState } from "react";

const Cards = [
  {
    title: "Site pour photographe",
    description:
      "Création d'un site pour photographe avec Next.js et TailwindCSS. Grace a un CMS Headless (Contentful), le photographe peu gerer ses photos, ses albums, ses tarifs, etc...",
    image: "/photowebsitegallery.png",
    link: "https://www.google.com",
  },
  {
    title: "FrontEndMentor",
    description:
      "Plusieur challenge sur le site FrontEndMentor en HTML,CSS, JS",
    image: "/FrontEndMentor.png",
    link: "https://www.frontendmentor.io/profile/R-Thibault",
  },
  {
    title: "Site de gestion de favoris",
    description:
      "Site, personnel dans un premiere temps, pour gerer ses favoris, par catégorie, par projets, par tags, etc...",
    image: "/ComingSoon.jpg",
    link: null,
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
        <div className="h-screen w-full flex flex-col-reverse md:flex-row items-center justify-around gap-10">
          <div className="flex items-center z-20 space-y-2 basis-1/2">
            <HelloMe className="" />
          </div>
          <div className="flex justify-center basis-1/2">
            <Image
              src="/photo2.png"
              width={600}
              height={700}
              alt="photo moi"
              className="z-40 mt-10"
            />
          </div>
        </div>
        <div className=" w-full h-full flex items-center flex-col">
          <h2>
            <span className="text-4xl font-bold">Mes projets</span>
          </h2>

          <div className="flex h-full w-full flex-wrap justify-evenly m-6 ">
            {Cards.map((card, idx) => (
              <Card key={idx} {...card} 
              
                />
            ))}
          </div>
        </div>
      </main>

      <Footerbar />
    </div>
  );
}
