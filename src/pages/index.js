import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Poppy from "../images/poppy.jpg";
import greenB from "../images/GreenPattern.png";
import { BackgroundImg } from "../components/backgroundimg";
import { TextboxRow } from "../components/textboxrow";
import { CenterText } from "../components/centertext";

class IndexPage extends React.Component {
  render() {
    let boxData = [
      {
        title: "Samtal och terapi",
        slug: "/tjanster/samtalochterapi",
        text:
          "Hos Din rytm lär du dig förstå och lyssna in din kropp och ditt sinne på nya sätt. Värme, empati och respekt präglar verksamheten."
      },
      {
        title: "MediYoga",
        slug: "/tjanster/mediyoga",
        text:
          "Stärk din hälsa och utveckla ditt självledarskap genom individuell terapi och träning. Hitta din rytm i livet!"
      },
      {
        title: "Fertilitetsförståelse",
        slug: "/tjanster/fertilitetsforstaelse",
        text:
          "Lär dig att förstå din kropp och fertilitet genom att observera och tolka din menscykel."
      }
    ];
    return (
      <div>
        <BackgroundImg src={Poppy} height={110} />
        <Layout isIndex={true}>
          <SEO
            keywords={[`Fertilitet`, `din rytm`, `yoga`, `mediyoga`]}
            title="Home"
          />
          <CenterText />
          <section className="block z-30 pb-20 bg-white">
            <div className="-mt-16 text-white">
              <TextboxRow boxData={boxData} />
            </div>
          </section>
          {/*Bottom section*/}
          <section>
            <div className="flex text-white">
              <div className="w-full md:w-7/12 px-12 xs:px-16 py-10 bg-green-600">
                <h3 className="text-5xl capitalize font-serif">om din rytm</h3>
                <p className="text-sm p-3">
                  Hos Din Rytm lär du dig att förstå och lyssna in din kropp och
                  ditt sinne. Min erfarenhet är att kognitiv beteende terapi,
                  mindfulness, mediyoga och fertilitetsförståelse är fantastiska
                  tekniker, var och en för sig eller i kombination. En kontakt
                  kan se ut på olika sätt och vara lång eller kort beroende på
                  vad du söker för. Jag har bred kunskap från flera områden
                  såsom psykisk hälsa, reproduktiv hälsa och omvårdnad, sex- och
                  samlevnad, existentiella frågor kring fertilitet,
                  fertilitetsförståelse (Fertility Awareness), menscykelhälsa
                  och hälsa i klimakteriet.
                </p>
              </div>
              <div className="md:w-5/12">
                <div
                  className="relative bg-contain"
                  style={{
                    backgroundImage: "url(" + greenB + ")",
                    minHeight: 100 + "%"
                  }}
                >
                  <span className="w-full h-full absolute opacity-25 bg-green-400"></span>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    );
  }
}

export default IndexPage;
