import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Card } from "../components/card";
import { GreenButton } from "../components/greenbutton";
import { graphql, StaticQuery } from "gatsby";

class LasMer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aktuelltIsActive: true, forskningIsActive: true };
    this.toggleAktuellt = this.toggleAktuellt.bind(this);
    this.toggleForskning = this.toggleForskning.bind(this);
  }

  toggleAktuellt() {
    const newState = this.state.aktuelltIsActive ? false : true;
    this.setState({ aktuelltIsActive: newState });
  }

  toggleForskning() {
    const newState = this.state.forskningIsActive ? false : true;
    this.setState({ forskningIsActive: newState });
  }

  render() {
    return (
      <div>
        <Layout isIndex={false}>
          <SEO
            keywords={[`Fertilitet`, `Din rytm`, `yoga`, `mediyoga`]}
            title="Forskning"
          />
          <div className="mt-32 flex flex-col">
            <div className="text-5xl font-serif p-4 sm:px-12">Läs mer</div>
            <div className="block flex uppercase px-4 sm:px-12">
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
            <div className="block flex flex-wrap justify-around sm:p-12">
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
                            image
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
                render={data =>
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
          </div>
        </Layout>
      </div>
    );
  }
}

export default LasMer;
