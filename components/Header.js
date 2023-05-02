import { Navbar } from "flowbite-react";
import Image from "next/image";

export function Header() {
  return (
    <>
      <Navbar className="min-w-full h-14 bg-inherit text-center" fluid={true}>
        <Navbar.Brand className="">
          <span className="self-center whitespace-nowrap text-2xl font-bold text-amber-500 uppercase">
            Port
          </span>
          <span className="self-center whitespace-nowrap text-2xl font-bold texte text-white uppercase">
            Folio
          </span>
          <span className="self-center whitespace-nowrap text-2xl font-bold text-orange-500">
            .
          </span>
        </Navbar.Brand>
        <Navbar.Toggle color="black"/>
        
        <Navbar.Collapse className="self-center">
          <Navbar.Link href="/" className="text-white hover:text-xl hover:text-amber-500">
            Accueil
          </Navbar.Link>
          <Navbar.Link href="/contact" className="text-white  hover:text-xl">Contact</Navbar.Link>
          </Navbar.Collapse>
          <Navbar.Brand className="gap-5">
          <a href="https://github.com/R-Thibault">
            <Image 
            src="/github-mark.png" 
            alt="Github"
            width={30}
            height={30}
            className=" hover:h-8 hover:w-8"
            />
          </a>
          <a href="https://www.linkedin.com/in/thibault-rossa/">
            <Image 
            src="/linkedin.png"
            alt="Linkedin"
            width={30}
            height={30}
            className=" hover:h-8 hover:w-8"
            />
          </a>
          </Navbar.Brand>
      </Navbar>
    </>
  );
}
