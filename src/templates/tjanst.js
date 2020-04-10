import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PropTypes from "prop-types";

export default function Tjanst({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="mt-24 lg:mt-32 flex justify-center ">
        <div className="flex flex-col w-full md:max-w-4xl">
          <div className="block h-64 xs:h-xxl">
            <div
              className="h-full bg-center bg-cover flex"
              style={{
                backgroundImage:
                  "url(" +
                  `${
                    !!post.frontmatter.image.childImageSharp
                      ? post.frontmatter.image.childImageSharp.fluid.src
                      : post.frontmatter.image
                  }` +
                  ")",
              }}
            >
              <div className="text-white bg-green-layover-50 h-auto w-full m-4 p-4 self-end">
                <div className="text-3xl sm:text-5xl font-serif">
                  {post.frontmatter.title}
                </div>
                <div className="text-md sm:text-xl ml-4">
                  {post.frontmatter.ingress}
                </div>
                <div className="absolute bg-green-600 w-full top-0 left-0 border-red-600 border-8"></div>
              </div>
            </div>
          </div>

          <div
            className="p-8 break-words text-sm"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ingress
      }
    }
  }
`;

Tjanst.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        ingress: PropTypes.string,
      }),
    }),
  }),
};
