import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Tjanst } from "../components/tjanst";

function Tjanster() {
  return (
    <div>
      <Layout isIndex={false}>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="Home"
        />
        <Tjanst></Tjanst>
        <div className="block h-56 w-full text-black text-6xl"> HEJ</div>
      </Layout>
    </div>
  );
}

export default Tjanster;
