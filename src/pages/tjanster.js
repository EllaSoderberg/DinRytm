import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Card } from "../components/card";
import { graphql, StaticQuery } from "gatsby";

class Tjanster extends React.Component {
  render() {
    return (
      <div>
        <Layout isIndex={false}>
          <SEO
            keywords={[`Fertilitet`, `Din rytm`, `yoga`, `mediyoga`]}
            title="Tjänster"
          />
          <div className="mt-32 flex flex-col justify-center">
            <div className="text-5xl font-serif p-4 sm:px-12">Tjänster</div>
            <div className="block flex uppercase px-4 sm:px-12 justify-center">
              <div className="block flex flex-wrap justify-around sm:p-12">
                <StaticQuery
                  query={graphql`
                    query {
                      allMarkdownRemark(
                        filter: { fields: { slug: { regex: "/(tjanster)/" } } }
                        sort: {fields: frontmatter___order}
                      ) {
                        edges {
                          node {
                            id
                            frontmatter {
                              title
                              image
                            }
                            fields {
                              slug
                            }
                          }
                        }
                      }
                    }
                  `}
                  render={data =>
                    data.allMarkdownRemark.edges.map(({ node }) => (
                      <Card
                        key={node.id}
                        img={node.frontmatter.image}
                        title={node.frontmatter.title}
                        slug={node.fields.slug}
                      ></Card>
                    ))
                  }
                />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Tjanster;
