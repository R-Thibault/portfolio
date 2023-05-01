import { Header } from "../components/Header";
import { Footerbar } from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-abstract1 bg-fixed bg-no-repeat">
      <Head>
        <title>
          Thibault Rossa développeur web portfolio | Politique de
          confidentialité
        </title>
      </Head>

      <Header />

      <main className=" text-white">
        <div className="flex flex-col items-center justify-center min-h-screen w-5/12 space-y-2 mx-auto">
          <h1 className="text-4xl font-bold ">Politique de confidentialité</h1>
          <p>
            Nous prenons très au sérieux la confidentialité de vos informations
            personnelles. Cette politique de confidentialité décrit comment nous
            collectons, utilisons et protégeons vos informations lorsque vous
            utilisez notre site web.
          </p>

          <h2 className="text-xl font-bold ">
            Collecte d'informations personnelles
          </h2>
          <p>
            Nous collectons des informations personnelles lorsque vous
            remplissez notre formulaire de contact. Les informations que nous
            collectons peuvent inclure votre nom, votre adresse e-mail et toute
            autre information que vous choisissez de nous fournir.
          </p>

          <h2 className="text-xl font-bold ">
            Utilisation des informations personnelles
          </h2>
          <p>
            Nous utilisons les informations personnelles que vous nous
            fournissez uniquement pour répondre à vos demandes de renseignements
            et pour vous fournir des informations sur nos services. Nous ne
            partageons pas vos informations personnelles avec des tiers sans
            votre consentement explicite.
          </p>

          <h2 className="text-xl font-bold ">
            Protection des informations personnelles
          </h2>
          <p>
            Nous prenons des mesures de sécurité raisonnables pour protéger vos
            informations personnelles contre la perte, l'utilisation abusive et
            l'accès non autorisé, la divulgation, l'altération et la
            destruction. Nous ne conservons vos informations personnelles que
            pendant la durée nécessaire pour répondre à vos demandes de
            renseignements et pour vous fournir des informations sur nos
            services.
          </p>

          <h2 className="text-xl font-bold ">
            Modifications de la politique de confidentialité
          </h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Nous vous encourageons à consulter
            régulièrement cette page pour prendre connaissance des éventuelles
            modifications.
          </p>

          <h2 className="text-xl font-bold ">Contactez-nous</h2>
          <p>
            Si vous avez des questions ou des préoccupations concernant notre
            politique de confidentialité, n'hésitez pas à nous contacter en
            utilisant le formulaire de contact sur notre site web.
          </p>

          <h2 className="text-xl font-bold ">Droit d'accès</h2>
          <p>
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978
            (art. 34), vous disposez d'un droit d'accès, de modification, de
            rectification et de suppression des données qui vous concernent.
            Pour exercer ce droit, vous pouvez me contacter par mail à l'adresse
            thibault-rossa@gmail.com. Conformément à la réglementation en
            vigueur, votre demande doit être signée et accompagnée de la
            photocopie d'un titre d'identité portant votre signature et préciser
            l'adresse à laquelle doit vous parvenir la réponse. Une réponse vous
            sera alors adressée dans un délai de 2 mois suivant la réception de
            la demande.
          </p>
          <h2 className="text-xl font-bold ">Sécurité </h2>
          <p>
            La sécurité de vos Données personnelles est très importante pour
            moi. Les données personnelles recueillies sur le site
           www.thibault-rossa.com sont traitées selon des protocoles sécurisés qui
            limitent considérablement les risques d'interception ou de
            récupération par des tiers. Toutefois, en raison de la nature
            ouverte du réseau internet, je ne peux pas exclure les actes de
            piratage, ou l'accès non autorisé des tiers. En continuant à
            utiliser mon Site, vous acceptez ces risques. Dans la limite de ce
            qui est autorisé par les lois en vigueur je décline toute
            responsabilité en cas de dommage direct ou indirect, des pertes,
            coûts, que ce soit contractuelle, délictuelle, y compris par
            négligence, que vous pourriez subir en cas d'accès non autorisé, de
            perte ou d'altération de vos données personnelles.
          </p>
        </div>
      </main>

      <Footerbar />
    </div>
  );
}
