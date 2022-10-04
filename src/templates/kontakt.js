import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import PageContainer from "../components/PageContainer";
import SEO from "../components/seo";
import Form from "../components/form";

export default function Kontakt({ data }) {
  const info = data.markdownRemark.frontmatter;
  return (
    <div>
      <SEO
        keywords={[`Fertilitet`, `Din rytm`, `yoga`, `mediyoga`]}
        title="Kontakt"
      />
      <PageContainer>
        <div></div>
        <div className="font-bold text-3xl py-4">Kontakt:</div>
        <p className="pb-8 px-8">
          <b>Malin Söderberg</b>
          <br></br>
          PHD, Leg. barmorska
          <br></br>
          Psykoterapeut KBT/CFT
          <br></br>
          Handledare FAM, MediYogaterapeut
          <br></br>
          <br></br>
          Telefon: <a href={"tel:" + info.phone}>{info.phone}</a>
          <br></br>
          Mail: <a href={"mailto:" + info.email}>{info.email}</a>
          <br></br>
          <br></br>
          Address till mottagning: 
          <br></br>
          Långholmsgatan 20
          <br></br>
          117 33 Stockholm
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
