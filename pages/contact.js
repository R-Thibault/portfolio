
import { Header } from "../components/Header";
import { Footerbar } from "../components/Footer";
import Head from "next/head";
import { Contact } from "../components/Contact";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-abstract1 bg-fixed bg-no-repeat">
      <Head>
        <title>Thibault Rossa développeur web portfolio | A propos de moi</title>
      </Head>

      <Header />

      <main className="h-screen flex text-white">
        <div className="flex flex-col items-center justify-evenly">
        <Contact/>
        </div>
      </main>

      <Footerbar />
    </div>
  );
}
