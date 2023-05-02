import { Navbar } from "flowbite-react";
import Image from "next/image";

export function Header() {
  return (
    <>
      <Navbar className="min-w-full h-14 bg-transparent text-center" fluid={true}>
        <Navbar.Brand className="">
          <span className="self-center whitespace-nowrap text-2xl font-bold text-amber-500 uppercase">
            Port
          </span>
          <span className="self-center whitespace-nowrap text-2xl font-bold texte text-black uppercase">
            Folio
          </span>
          <span className="self-center whitespace-nowrap text-2xl font-bold text-orange-500">
            .
          </span>
        </Navbar.Brand>
        <Navbar.Toggle color="black"/>
        
        <Navbar.Collapse className="self-center">
          <Navbar.Link href="/" className="text-black hover:text-xl hover:text-amber-500">
            Accueil
          </Navbar.Link>
          <Navbar.Link href="/contact" className="text-black  hover:text-xl">Contact</Navbar.Link>
          </Navbar.Collapse>
          <div className="flex gap-5">
          <div>
            <a href="https://github.com/R-Thibault" target="_blank">
          <Image 
            src="/github-mark.png" 
            alt="Github"
            width={30}
            height={30}
            className=" hover:h-8 hover:w-8"
            />
            </a>
          </div>
            
          <div>
            <a href="https://www.linkedin.com/in/thibault-roux-9b1b3b1b9/" target="_blank">
          <Image 
            src="/linkedin.png"
            alt="Linkedin"
            width={30}
            height={30}
            className=" hover:h-8 hover:w-8"
            />
            </a>
          </div>
          
            
          
          
          </div>
          
      </Navbar>
    </>
  );
}
