import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

export function CV() {
  return (
    <div className="text-white  m-10">
    <Timeline className="md:w-[50vw] mt-10 ">
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-white text-xl">Actuellement</Timeline.Time>
          <Timeline.Title className="text-white text-xl">Developpeur web</Timeline.Title>
          <Timeline.Body className="text-white text-lg" >
            En parallèle de mes études, je suis en recherche d'une première expérience en tant que développeur web, ou une alternance/formation dans le domaine de l'intelligence artificielle.
            </Timeline.Body>
        </Timeline.Content>
        
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-white text-xl">Aout 2022</Timeline.Time>
          <Timeline.Title className="text-white text-xl">Graduate developer web & mobile</Timeline.Title>
          <Timeline.Body className="text-white text-lg">
            J'ai commencé des études en développement web et mobile avec l'école STUDI. 
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content >
          <Timeline.Time className="text-white text-xl">2012 - 2023</Timeline.Time>
          <Timeline.Title className="text-white text-xl">Etudes et travail en injection plastique</Timeline.Title>
          <Timeline.Body className="text-white text-lg">
           Bac pro et BTS en alternance.Puis 6 ans d'expérience dans l'injection plastique. Technicien, chef d'équipe et technicien methode.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
  );
}
