import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

export function CV() {
  return (
    <div className="text-white m-10">
      <Timeline className="md:w-[50vw] mt-10">
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className="text-white text-xl">
              Actuellement
            </Timeline.Time>
            <Timeline.Title className="text-white text-xl">
              Développeur Web
            </Timeline.Title>
            <Timeline.Body className="text-white text-lg">
              Je poursuis actuellement mon apprentissage en autodidacte du
              langage Go (Golang) et suis en recherche active de nouvelles
              opportunités professionnelles.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className="text-white text-xl">
              Août 2023 - Septembre 2024
            </Timeline.Time>
            <Timeline.Title className="text-white text-xl">
              Licence Concepteur Développeur d'Applications (CDA)
            </Timeline.Title>
            <Timeline.Body className="text-white text-lg">
              J'ai suivi une licence CDA en alternance, que j'ai obtenue avec
              succès, consolidant mes compétences en conception et développement
              d'applications.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className="text-white text-xl">
              Août 2022
            </Timeline.Time>
            <Timeline.Title className="text-white text-xl">
              Graduate Développeur Web & Mobile
            </Timeline.Title>
            <Timeline.Body className="text-white text-lg">
              J'ai débuté un parcours de formation en développement web et
              mobile avec l'école STUDI, tout en poursuivant un apprentissage en
              autodidacte pour élargir mes compétences.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className="text-white text-xl">
              2012 - 2023
            </Timeline.Time>
            <Timeline.Title className="text-white text-xl">
              Études et expérience en injection plastique
            </Timeline.Title>
            <Timeline.Body className="text-white text-lg">
              J'ai obtenu un Bac Pro et un BTS en alternance dans le domaine de
              l'injection plastique, puis acquis 6 ans d'expérience en tant que
              technicien, chef d'équipe, et technicien méthodes.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
