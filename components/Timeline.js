import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

export function CV() {
  return (
    <div className="text-white">
    <Timeline className="w-[50vw] mt-10 ">
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-white">Actuellement</Timeline.Time>
          <Timeline.Title className="text-white">Developpeur web</Timeline.Title>
          <Timeline.Body className="text-white" >
            En parallele de mes études, je suis en recherche d'une première expérience en tant que développeur web, ou une alternance/formation dans le domaine de l'intelligence artificielle.
            </Timeline.Body>
        </Timeline.Content>
        
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-white">Aout 2022</Timeline.Time>
          <Timeline.Title className="text-white">Graduate developer web & mobile</Timeline.Title>
          <Timeline.Body className="text-white">
            J'ai commencé des études en développement web et mobile avec l'école STUDI. 
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content >
          <Timeline.Time className="text-white">2012 - 2023</Timeline.Time>
          <Timeline.Title className="text-white">Etudes et travail en injection plastique</Timeline.Title>
          <Timeline.Body className="text-white">
           Bac pro et BTS en alternace.Puis 6 ans d'expérience dans l'injection plastique. Technicien, chef d'équipe et technicien methode.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
  );
}
