import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PropTypes from "prop-types";

export default function Article({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="mt-32 flex justify-center">
        <div className="block flex flex-col w-full md:max-w-5xl mb-8">
          <div className="block h-64 md:h-xxl">
            <div
              className="h-full bg-center bg-cover flex"
              style={{
                backgroundImage: "url(" + post.frontmatter.image + ")"
              }}
            >
              <div className="text-white bg-green-layover-50 h-auto w-full m-4 p-4 self-end">
              
                <div className="text-3xl font-serif font-bold">
                  {post.frontmatter.title}
                </div>
                <div>{post.frontmatter.date}</div>
                <div className="absolute bg-green-600 w-full top-0 left-0 border-red-600 border-8"></div>
                
              </div>
            </div>
          </div>
          <div className="p-8 break-words" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD hh:mm")
        image
        category
      }
    }
  }
`;

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        image: PropTypes.string,
        category: PropTypes.string
      })
    })
  })
};
