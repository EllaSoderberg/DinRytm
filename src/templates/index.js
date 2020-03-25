import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
//import Poppy from "../images/poppy.jpg";
import greenB from "../images/GreenPattern.png";
import { BackgroundImg } from "../components/backgroundimg";
import { TextboxRow } from "../components/textboxrow";
import { CenterText } from "../components/centertext";

class IndexPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            markdownRemark(fileAbsolutePath: { regex: "/(index)/" }) {
              frontmatter {
                image
                box1title
                box1text
                box1slug
                box2title
                box2text
                box2slug
                box3title
                box3text
                box3slug
                om
                Slogan
              }
            }
          }
        `}
        render={data => (
          <div>
            <BackgroundImg
              src={data.markdownRemark.frontmatter.image}
              height={110}
            />
            <Layout isIndex={true}>
              {console.log(data.markdownRemark)}
              <SEO
                keywords={[`Fertilitet`, `Din rytm`, `yoga`, `mediyoga`]}
                title="Home"
              />
              <CenterText text={data.markdownRemark.frontmatter.Slogan}/>
              <section className="block z-30 pb-20 bg-white">
                <div className="-mt-16 text-white">
                  <TextboxRow
                    boxData={[
                      {
                        title:
                        data.markdownRemark.frontmatter
                            .box1title,
                        slug:
                          data.markdownRemark.frontmatter
                            .box1slug,
                        text:
                          data.markdownRemark.frontmatter.box1text
                      },
                      {
                        title:
                          data.markdownRemark.frontmatter
                            .box2title,
                        slug:
                          data.markdownRemark.frontmatter
                            .box2slug,
                        text:
                          data.markdownRemark.frontmatter.box2text
                      },
                      {
                        title:
                          data.markdownRemark.frontmatter
                            .box3title,
                        slug:
                          data.markdownRemark.frontmatter
                            .box3slug,
                        text:
                          data.markdownRemark.frontmatter.box3text
                      }
                    ]}
                  />
                </div>
              </section>
              {/*Bottom section*/}
              <section>
                <div className="flex text-white">
                  <div className="w-full md:w-7/12 px-12 xs:px-16 py-10 bg-green-600">
                    <h3 className="text-5xl font-serif">Om Din rytm</h3>
                    <p className="text-sm p-3">
                      {data.markdownRemark.frontmatter.om}
                    </p>
                  </div>
                  <div className="md:w-5/12">
                    <div
                      className="relative bg-contain"
                      style={{
                        backgroundImage: "url(" + greenB + ")",
                        minHeight: 100 + "%"
                      }}
                    >
                      <span className="w-full h-full absolute opacity-25 bg-green-400"></span>
                    </div>
                  </div>
                </div>
              </section>
            </Layout>
          </div>
        )}
      />
    );
  }
}

export default IndexPage;
