import { Navbar } from "flowbite-react";

export function Header() {
  return (
    <>
      <Navbar className="min-w-full h-12" fluid={true}>
        <Navbar.Brand href="https://flowbite.com/">
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
        <Navbar.Collapse>
          <Navbar.Link href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
}
