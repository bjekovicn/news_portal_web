import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="container lg:px-24 py-6">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Dobrodošli</h2>
        <p className="text-lg">
          Dobrodošli na naš sajt, vaš pouzdan izvor informacija i analiza. Naša
          misija je da vam pružimo tačne, pravovremene i relevantne informacije
          koje se tiču opštine Sokolac, ali i šireg geopolitickog konteksta.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Ko smo mi?</h2>
        <p className="text-lg">
          Mi smo tim strastvenih novinara i analitičara posvećenih istraživanju
          i razumevanju trenutnih događaja. Naš cilj je da vam pomognemo da
          bolje razumete složene društvene, političke i ekonomske situacije koje
          oblikuju našu svakodnevnicu.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Šta radimo?</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Novinarstvo</strong>: Objavljujemo najnovije vesti i
            reportaže iz opštine Sokolac, pokrivajući sve aspekte lokalnog
            života.
          </li>
          <li>
            <strong>Analiza</strong>: Nudimo detaljne analize trenutnih
            situacija i događaja koji utiču na našu zajednicu.
          </li>
          <li>
            <strong>Komentari</strong>: Naši stručni komentatori pružaju uvid i
            mišljenja o širim geopolitičkim temama, pomažući vam da shvatite
            globalne trendove i njihove lokalne implikacije.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Naša vizija</h2>
        <p className="text-lg">
          Verujemo da kvalitetno novinarstvo može doprineti boljem društvu. Naša
          vizija je da budemo vodeći izvor informacija i analize za opštinu
          Sokolac, kao i pouzdan vodič kroz složeni svet geopolitike. Težimo
          transparentnosti, objektivnosti i integritetu u svim našim radovima.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Kontaktirajte nas</h2>
        <p className="text-lg">
          Uvek smo otvoreni za vaše povratne informacije, sugestije i pitanja.
          Kontaktirajte nas putem naše kontakt stranice, društvenih mreža ili
          nam pošaljite email na{" "}
          <a href="mailto:redakcija@korakpokorak.net" className="text-blue-500">
            redakcija@korakpokorak.net
          </a>
        </p>
      </section>

      <p className="text-lg mt-8">
        Hvala što nas pratite i verujete nam da vam pružamo najvažnije i
        najtačnije informacije.
      </p>
    </div>
  );
};

export default AboutUsPage;
