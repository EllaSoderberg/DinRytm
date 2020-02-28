import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Malin from "../images/MalinS.jpg";

function Om() {
  return (
    <div>
      <Layout isIndex={false}>
        <SEO
          keywords={[`Fertilitet`, `din rytm`, `yoga`, `mediyoga`]}
          title="Forskning"
        />
        <div className="mt-32 flex justify-center">
          <div className="block flex flex-col sm:flex-row w-full md:w-2/3 mb-8">
            <div className="flex-1">
            <img className="p-8 px-24 sm:pr-0 sm:pl-8" src={ Malin }></img>
            </div>
            <div className="flex-1 px-10">
              <h1 className="font-serif text-5xl ">Om Mig</h1>
              <p>
                Din Rytm grundades av mig, Malin Söderberg, 2014. 
                <br></br>
                <br></br>
                Jag är
                utbildad barnmorska och forskare med särskilt intresse för
                hållbarhet inom hälsa och miljö. Jag har de senaste åren
                specialiserat mig inom Holistisk Reproduktiv hälsa och MediYoga
                dels för egen utveckling och dels för att kunna erbjuda individ
                och företag möjlighet att integrera närvaro, acceptans, glädje
                och lust i vardagen.
                <br></br>
                <br></br>
                 Min önskan är att menstruerare (och
                partners) ska få möjlighet att lära sig mer om sin egen kropp
                och dess cykliska språk för ökad självtillit och möjlighet att
                förstå sin fertila förmåga samt övervaka sin gynekologiska och
                sexuella hälsa. I mitt arbete vänder jag mig till alla som vill
                veta mer om fruktsamhet och hälsa, oberoende av om du vill bilda
                familj eller ej. 
                <br></br>
                <br></br>
                Jag har arbetat inom födande och eftervård, på
                preventivmedelsmottagning, RFSU-klinik och ungdomsmottagning.
                Parallellt med det kliniska arbetet har jag bedrivit
                forskarstudier inom ämnet reproduktiv omvårdnad och disputerade
                i maj 2013 med avhandlingen; Fruktsamhet och barnafödande:
                upplevelser, tankar och attityder bland kvinnor som inte fött
                barn.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Om;
