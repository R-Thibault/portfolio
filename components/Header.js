import { Navbar } from "flowbite-react";
import Image from "next/image";

export function Header() {
  return (
    <>
      <Navbar className="min-w-full h-12 " fluid={true}>
        <Navbar.Brand className="">
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white uppercase">
            Port
          </span>
          <span className="self-center whitespace-nowrap text-xl font-bold texte dark:text-white uppercase">
            Folio
          </span>
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            .
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        
        <Navbar.Collapse className="">
          <Navbar.Link href="/" className="">
            Accueil
          </Navbar.Link>
          <Navbar.Link href="/contact" className="">Contact</Navbar.Link>
          </Navbar.Collapse>
          <Navbar.Brand className="gap-5">
          
            <Image 
            src="/github-mark.png" 
            alt="Github"
            width={30}
            height={30}
          
            />
            <Image 
            src="/linkedin.png"
            alt="Linkedin"
            width={30}
            height={30}
            />
          </Navbar.Brand>
      </Navbar>
    </>
  );
}
