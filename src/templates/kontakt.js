import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/form";

export default function Kontakt({ data }) {
  const info = data.markdownRemark.frontmatter;
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
              Telefon: <a href={"tel:" + info.phone}>{info.phone}</a>
              <br></br>
              Mail: <a href={"mailto:" + info.email}>{info.email}</a>
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

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        email
        phone
      }
    }
  }
`;

Kontakt.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        email: PropTypes.string,
        phone: PropTypes.string
      })
    })
  })
};
