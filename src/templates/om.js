import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import PageContainer from "../components/PageContainer";
import SEO from "../components/seo";
import CompatibleImage from "../components/CompatibleImage";

export default function Om({ data }) {
  const text = data.markdownRemark.frontmatter;
  return (
    <div>
      <SEO
        keywords={[`Fertilitet`, `Din rytm`, `yoga`, `mediyoga`]}
        title="Forskning"
      />
      <PageContainer>
        <div className="block flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 p-6">
            <h1 className="font-serif text-4xl xs:text-6xl">Om Din rytm</h1>
            <p
              className="text-md sm:text-xl py-4"
              dangerouslySetInnerHTML={{ __html: text.about }}
            ></p>
          </div>
          <div className="max-w-xs flex justify-center md:w-1/3 self-center">
            <div className="w-xxl">
              <CompatibleImage imageInfo={text.image} />
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        about
        image {
          childImageSharp {
            fluid(maxWidth: 240, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

Om.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        about: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
      })
    })
  })
};
