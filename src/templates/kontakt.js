import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import PageContainer from "../components/PageContainer";
import SEO from "../components/SEO";
import Form from "../components/Form";

export default function Kontakt({ data }) {
  const info = data.markdownRemark.frontmatter;
  return (
    <div>
      <SEO
        keywords={[`Fertilitet`, `Din rytm`, `yoga`, `mediyoga`]}
        title="Tjanster"
      />
      <PageContainer>
        <div></div>
        <div className="font-bold text-3xl py-4 px-8">Kontakt:</div>
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
            Välkommen att höra av dig om du har frågor eller vill boka en tid.
          </b>
        </p>
        <Form></Form>
      </PageContainer>
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
