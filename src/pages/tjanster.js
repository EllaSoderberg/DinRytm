import React from "react";

import PageContainer from "../components/PageContainer";
import SEO from "../components/SEO";
import { Card } from "../components/Card";
import { graphql, StaticQuery } from "gatsby";

class Tjanster extends React.Component {
  render() {
    return (
      <div>
        <SEO
          keywords={[`graviditet`, `oro`, `fertilitetsoro`,`fertilitetsråd`, `justissemetoden`,`terapi`, `handledning`, `menscykel`, `oregelbunden`, `mens`, `ägglossning`, `pmds`, `depression`, `ångest`, `ivf`, `pms`, `sekret`, `mensvärk`, `justisse`, `preventivmedel`, `menssmärtor`, `pcos`, `p-piller`, `hormonspiral`, `hormonfri`, `preventivmetod`]}
          title="Tjänster"
        />
        <PageContainer>
          <div className="text-5xl font-serif p-4">Tjänster</div>
          <div className="block flex uppercase px-4 justify-center">
            <div className="block flex flex-wrap justify-around">
              <StaticQuery
                query={graphql`
                  query {
                    allMarkdownRemark(
                      filter: { frontmatter: { template: { eq: "tjanst" } } }
                      sort: { fields: frontmatter___order }
                    ) {
                      edges {
                        node {
                          id
                          frontmatter {
                            title
                            image {
                              childImageSharp {
                                fluid(maxWidth: 300, quality: 100) {
                                  ...GatsbyImageSharpFluid
                                }
                              }
                            }
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
        </PageContainer>
      </div>
    );
  }
}

export default Tjanster;
