import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Om({ data }) {
  const text = data.markdownRemark.frontmatter;
  return (
    <Layout isIndex={false}>
      <SEO
        keywords={[`Fertilitet`, `Din rytm`, `yoga`, `mediyoga`]}
        title="Forskning"
      />

      <div className="mt-32 mb-8 flex justify-center">
        <div className="block w-full md:max-w-6xl mb-8 flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 p-6">
            <h1 className="font-serif text-4xl xs:text-6xl">Om Din rytm</h1>
            <p
              className="text-md sm:text-xl py-4"
              dangerouslySetInnerHTML={{ __html: text.about }}
            ></p>
            <h1 className="font-serif text-4xl xs:text-6xl mt-6">Om Mig</h1>
            <p
              className="text-md sm:text-xl py-4"
              dangerouslySetInnerHTML={{ __html: text.aboutme }}
            ></p>
          </div>
          <div className="w-full flex justify-center md:w-1/3 self-center" >
            <img className="max-w-xs" src={text.image}></img>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        aboutme
        about
        image
      }
    }
  }
`;

Om.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        aboutme: PropTypes.string,
        about: PropTypes.string,
        image: PropTypes.string
      })
    })
  })
};
