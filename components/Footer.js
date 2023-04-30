import { Footer } from "flowbite-react";
import Image from "next/image";

export function Footerbar() {
  return (
    <>
      <Footer container={true} className="rounded-none h-12 z-20">
        <Footer.Copyright href="#" by="" year={2022} />
        <Footer.LinkGroup>
          <Footer.Link href="https://github.com/R-Thibault"><Image 
            src="/github-mark.png" 
            alt="Github"
            width={30}
            height={30}
          
            /></Footer.Link>
          <Footer.Link href="https://www.linkedin.com/in/thibault-rossa/"> <Image 
            src="/linkedin.png"
            alt="Linkedin"
            width={30}
            height={30}
            /></Footer.Link>
        </Footer.LinkGroup>
        <Footer.LinkGroup>
        <Footer.Link href="/">Accueil</Footer.Link>
          <Footer.Link href="/contact">Contact</Footer.Link>
          <Footer.Link href="/policy">Privacy Policy</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </>
  );
}
