import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import spiralingStairs from "../img/SpiralingStairs.jpg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="z-0 top-0 left-0 block h-screen w-full">
        <div
          title="Trappor ned i avgrunden"
          className="bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: "url(" + spiralingStairs + ")", height: 100 + '%' }}
          >
            <h2 className="bg-white text-2xl font-bold my-8 p-3">
              Ojdå, sidan hittades inte!
            </h2>
          </div>
        
      </div>
    </Layout>
  );
}

export default NotFoundPage;