import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Malin from "../images/MalinS.jpg";

function Om() {
  return (
    <div>
      <Layout isIndex={false}>
        <SEO
          keywords={[`Fertilitet`, `Din rytm`, `yoga`, `mediyoga`]}
          title="Forskning"
        />
        <div className="mt-32 flex justify-center">
          <div className="block w-full md:w-2/3 mb-8">
          <div className="px-4 mb-8">
          <h1 className="font-serif text-6xl">Om Din rytm</h1>
          <p className="text-xl px-8">
                Din rytm grundades av mig, Malin Söderberg, 2014 efter många år
                som kliniskt verksam sjuksköterska och barnmorska, samt en
                forskarexamen inom reproduktiv hälsa. Avhandlingsarbetet
                behandlade existentiella frågor kring fertilitet och
                barnafödande vilket var en anledning till att Din rytm kom till.
                <br />
                <br />
                Arbetet med hela människan i sitt sammanhang har alltid varit
                viktigt för mig. För att kunna erbjuda ett helhetsperspektiv i
                mitt arbete har jag därför fortbildat mig inom kognitiv
                psykoterapi, mediyoga och holistisk hälsa.
                <br />
                <br />
                Jag har arbetat kliniskt under många år bland annat inom födande
                och eftervård, på preventivmedelsmottagning, RFSU-klinik,
                ungdomsmottagning och hälsocentral. Efter min disputation 2013
                arbetade jag några år som universitetslärare och senare som
                samordnare av Mödrahälsovården i Stockholms läns landsting på halvtid, samtidigt
                som jag började bygga upp min egen verksamhet.
                <br />
                <br />
                Värme, empati och respekt är viktiga delar i arbetet.
              </p>
          </div>
          <div className="w-full border-b-4 border-dotted border-green-500"></div>
          <div className="block flex flex-col sm:flex-row">
            <div className="flex-1">
              <img
                className="py-2 px-16 xs:py-8 xs:px-24 sm:pr-0 sm:pl-8"
                src={Malin}
              ></img>
            </div>
            <div className="flex-1 px-10 sm:mt-6">
              <h1 className="font-serif text-6xl ">Om Mig</h1>
              <p className="text-xl">
                Din rytm grundades av mig, Malin Söderberg, 2014 efter många år
                som kliniskt verksam sjuksköterska och barnmorska, samt en
                forskarexamen inom reproduktiv hälsa. Avhandlingsarbetet
                behandlade existentiella frågor kring fertilitet och
                barnafödande vilket var en anledning till att Din rytm kom till.
                <br />
                <br />
                Arbetet med hela människan i sitt sammanhang har alltid varit
                viktigt för mig. För att kunna erbjuda ett helhetsperspektiv i
                mitt arbete har jag därför fortbildat mig inom kognitiv
                psykoterapi, mediyoga och holistisk hälsa.
                <br />
                <br />
                Jag har arbetat kliniskt under många år bland annat inom födande
                och eftervård, på preventivmedelsmottagning, RFSU-klinik,
                ungdomsmottagning och hälsocentral. Efter min disputation 2013
                arbetade jag några år som universitetslärare och senare som
                samordnare av Mödrahälsovården i Stockholms läns landsting på halvtid, samtidigt
                som jag började bygga upp min egen verksamhet.
                <br />
                <br />
                Värme, empati och respekt är viktiga delar i arbetet.
              </p>
            </div>
          </div>
        </div>
        </div>
      </Layout>
    </div>
  );
}

export default Om;
