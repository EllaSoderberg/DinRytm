import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import enePhoto from "../images/GreenBg.jpg";
import greenB from "../images/GreenPattern.png";
import { BackgroundImg } from "../components/backgroundimg";
import { TextboxRow } from "../components/textboxrow";
import { CenterText } from "../components/centertext";

class IndexPage extends React.Component {
  render() {
    let boxData = [
      {
        title: "kroppskännedom",
        text:
          "Lär dig att förstå din kropp och öka medvetenheten om fruktsamheten genom att observera och tolka din menscykel."
      },
      {
        title: "vill du bli gravid?",
        text:
          "Planerar du/ni för en graviditet? Lär dig hur du kan förbättra din hälsa och öka förståelsen för din/er fruktsamhet."
      },
      {
        title: "mediyoga som terapi",
        text:
          "Stärk din hälsa och utveckla ditt självledarskap genom individuell terapi och träning. Hitta din rytm i livet."
      }
    ];
    return (
      <div>
        <BackgroundImg src={enePhoto} height={110} />
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
                  ditt sinne på ett nytt sätt. Vi har bred kunskap inom
                  reproduktiv hälsa, omvårdnad, sex- och samlevnad,
                  fertilitetsförståelse (Fertility Awareness), menscykelhälsa,
                  klimakteriet, holistisk hälsa, miljö/livsstil, självledarskap
                  etc. och kan erbjuda samtal/rådgivning, handledning,
                  yogaklasser och Mediyogaterapi.
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
