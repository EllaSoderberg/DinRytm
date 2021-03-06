import React from "react";

import PageContainer from "../components/PageContainer";
import SEO from "../components/seo";
import { Card } from "../components/card";
import { GreenButton } from "../components/greenbutton";
import { graphql, StaticQuery } from "gatsby";

class LasMer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aktuelltIsActive: true, forskningIsActive: false };
    this.toggleAktuellt = this.toggleAktuellt.bind(this);
    this.toggleForskning = this.toggleForskning.bind(this);
  }

  toggleAktuellt() {
    this.setState({ aktuelltIsActive: true });
    this.setState({ forskningIsActive: false });
  }

  toggleForskning() {
    this.setState({ aktuelltIsActive: false });
    this.setState({ forskningIsActive: true });
  }

  render() {
    return (
      <div>
          <SEO
            keywords={[`graviditet`, `oro`, `fertilitetsoro`,`fertilitetsråd`, `justissemetoden`,`terapi`, `handledning`, `menscykel`, `oregelbunden`, `mens`, `ägglossning`, `pmds`, `depression`, `ångest`, `ivf`, `pms`, `sekret`, `mensvärk`, `justisse`, `preventivmedel`, `menssmärtor`, `pcos`, `p-piller`, `hormonspiral`, `hormonfri`, `preventivmetod`]}
            title="Läs mer"
          />
          <PageContainer>
            <div className="text-5xl font-serif p-4 ">Läs mer</div>
            <div className="block flex uppercase px-4">
              <div onClick={this.toggleAktuellt}>
                <GreenButton isActive={this.state.aktuelltIsActive}>
                  Aktuellt
                </GreenButton>
              </div>
              <div onClick={this.toggleForskning}>
                <GreenButton isActive={this.state.forskningIsActive}>
                  Forskning
                </GreenButton>
              </div>
            </div>
            <div className="block flex flex-wrap justify-around">
              <StaticQuery
                query={graphql`
                  query {
                    allMarkdownRemark(
                      filter: { fields: { slug: { regex: "/(lasmer)/" } } }
                      sort: { fields: frontmatter___date, order: DESC }
                    ) {
                      edges {
                        node {
                          frontmatter {
                            title
                            date
                            image {
                              childImageSharp {
                                fluid(maxWidth: 250, quality: 90) {
                                  ...GatsbyImageSharpFluid
                                }
                              }
                            }
                            category
                          }
                          excerpt(pruneLength: 100, format: PLAIN)
                          fields {
                            slug
                          }
                        }
                      }
                    }
                  }
                `}
                render={(data) =>
                  data.allMarkdownRemark.edges.map(({ node }) => (
                    <Card
                      key={node.title}
                      img={node.frontmatter.image}
                      title={node.frontmatter.title}
                      date={node.frontmatter.date}
                      category={node.frontmatter.category}
                      exc={node.excerpt}
                      slug={node.fields.slug}
                      aktuelltIsActive={this.state.aktuelltIsActive}
                      forskningIsActive={this.state.forskningIsActive}
                    ></Card>
                  ))
                }
              />
            </div>
            </PageContainer>
      </div>
    );
  }
}

export default LasMer;
