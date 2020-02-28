import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/form";
//import PinkPattern from "../images/PinkPattern.png";

function Kontakt() {
  return (
    <div>
      <Layout isIndex={false}>
        <SEO
          keywords={[`Fertilitet`, `din rytm`, `yoga`, `mediyoga`]}
          title="Tjanster"
        />
        <div className="mt-32 flex justify-center">
          <div className="block flex flex-col w-full md:max-w-4xl mb-8 h-full">
            <div className="font-bold text-3xl px-12 pb-8">Kontakt:</div>
            <p className="px-12 pb-8">
              <b>Malin Söderberg</b>
              <br></br>
              <br></br>
              Telefon: <a href="tel:+46766144118">076-614 41 18</a>
              <br></br>
              Mail: <a href="mailto:info@dinrytm.se">info@dinrytm.se</a>
              <br></br>
              <br></br>
              <b>
                Välkommen att höra av dig om du har frågor eller vill boka en
                tid.
              </b>
            </p>
            <Form></Form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Kontakt;
