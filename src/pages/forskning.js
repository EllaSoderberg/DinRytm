import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Forskning() {
  return (
    <div>
      <Layout isIndex={false}>
        <SEO
          keywords={[`Fertilitet`, `din rytm`, `yoga`, `mediyoga`]}
          title="Forskning"
        />
        <div className="mt-32 flex justify-center">
          <div className="block flex flex-col w-full md:max-w-4xl mb-8">
            <div className="bg-red-600 text-white flex flex-col p-10">
              <h1 className="font-bold text-3xl">FORSKNING</h1>
              <p>
                Fertility awareness baserade metoder (FABM) och dess
                effektivitet som preventivmetod Fördelen med att lära sig
                observera kroppens fysiska tecken och symtom under menscykelns
                hormonella skiftningar ger en unik kunskap om fertila och
                infertila dagar samt förståelse för fertiliteten över tid.
                Effektiviteten av FABM bygger på att identifiera det fertila
                fönstret och genom ett aktivt val blir det möjligt att undvika
                eller uppnå graviditet. Som för alla preventivmetoder gäller
                även för FABM att användaren får adekvat undervisning av en
                utbildad handledare samt att reglerna följs. Därtill är
                användarens motivation och följsamhet till metoden avgörande för
                metodens effektivitet.
                <br></br>
                <br></br>
                Manhart, M.D., et al. (2013). Fertility awareness-based methods
                of family planning: A review of effectiveness for avoiding
                pregnancy using SORT. Osteopathic Family Physician, Vol.5(1), pp
                2-8. Link retrieved Jan 30, 2018
                <a href="https://doi.org/10.1016/j.osfp.2012.09.002">https://doi.org/10.1016/j.osfp.2012.09.002</a>
              </p>
              <h3 className="font-bold text-xl pt-4">MediYoga & Mindfulness</h3>
              Elizabeth Blackburn, Nobelpristagare 2009 för upptäckten av
              Telomerer, ändarna på kromoserna, och deras roll i vårt åldrande,
              är medförfattare till en artikel där man tittat på meditation och
              dess effekter på telomererna. Enligt preliminära fynd verkar det
              som att meditation faktiskt minskar slitaget på kromosomändarna
              och därmed kanske bromsar vårt åldrande.
              <br></br>
              <br></br>
              Intervju med Elizabeth i Svenska dagbladet:
              <br></br>
              <a href="http://www.svd.se/traning-och-lugn-haller-cellerna-unga_8368084">
                http://www.svd.se/traning-och-lugn-haller-cellerna-unga_8368084
              </a>
              <h3 className="font-bold text-xl pt-4">
                Fruktsamhet och barnafödande – upplevelser, tankar och attityder
                bland kvinnor som inte fött barn.
              </h3>
              Fruktsamhet och barnafödande – upplevelser, tankar och attityder
              bland kvinnor som inte fött barn. I min avhandling belyses
              existentiella och sociokulturella frågeställningar om fruktsamhet
              och barnafödande i det moderna samhället.
              <br></br>
              <br></br>
              <a href="http://publications.ki.se/xmlui/handle/10616/41502">
                http://publications.ki.se/xmlui/handle/10616/41502
              </a>
              <br></br>
              Nedan finns de vetenskapliga publikationer som avhandlingen
              sammanfattar.
              <br></br>
              Söderberg, M., Lundgren, I., Olsson, P., & Christensson, K.
              (2011). A Burden and a Blessing—Young Swedish Women’s Experience
              of Fertility. A Study Among Women Lacking Experience of Pregnancy
              and Parenthood. Health Care for Women International, Volume 32
              Issue 5, 402. doi:10.1080/07399332.2010.530725
              <br></br>
              Söderberg, M., Christensson, K & Lundgren, I. (2012). Childbearing
              – A project for future life – Swedish wmoen’s thoughts on
              childbearing lacking experience of giving birth and parenthood.
              Int J Qualitative Stud Health Well-being.
              http://dx.doi.org/10.3402/qhw.v7i0.17318
              <br></br>
              Söderberg M, Lundgren I, Christensson, K, Hildingsson I. (2013).
              Attitudes toward fertility and childbearing scale: an assessment
              of a new instrument for women who are not yet mothers in Sweden.
              BMC Pregnancy and Childbirth,
              13:197.http://www.biomedcentral.com/1471-2393/13/197
              <br></br>
              Söderberg M, Christensson K, Lundgren I, Hildingsson I. (2015).
              Womens’ attitudes towards fertility and childbearing – a study
              based on a national sample of Swedish women validating the
              Attitudes to Fertility and Childbearing Scale (AFCS). Sexual and
              Reproductive Health Care. http://10.1016/j.srhc.2015.01.002.
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Forskning;
