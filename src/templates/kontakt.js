import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/form";
//import PinkPattern from "../images/PinkPattern.png";

function Kontakt() {
  return (
    <div>
      <Layout isIndex={false}>
        <SEO
          keywords={[`Fertilitet`, `Din rytm`, `yoga`, `mediyoga`]}
          title="Tjanster"
        />
        <div className="mt-32 flex justify-center">
          <div className="block flex flex-col w-full max-w-2xl mb-8 h-full px-4">
            <div className="font-bold text-3xl px-8 pb-8">Kontakt:</div>
            <p className="pb-8 px-8">
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

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        ingress
      }
    }
  }
`;

Kontakt.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string
      })
    })
  })
};