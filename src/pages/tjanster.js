import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Tjanst } from "../components/tjanst";
//import PinkPattern from "../images/PinkPattern.png";


function Tjanster() {
  return (
    <div>
    {/*<div className="bg-repeat bg-center" style={{backgroundImage: 'url(' + PinkPattern + ')', backgroundSize: "300px 300px"}}>*/}
      <Layout isIndex={false}>
        <SEO
          keywords={[`Fertilitet`, `din rytm`, `yoga`, `mediyoga`]}
          title="Tjanster"
        />
        <div className="mt-32 flex justify-center">
        <div className="block flex flex-col w-full md:max-w-4xl mb-8"> 
          <Tjanst></Tjanst>
          <Tjanst></Tjanst>
          <Tjanst></Tjanst>
        </div>
        </div> 
      </Layout>
    </div>
  )
}

export default Tjanster;
