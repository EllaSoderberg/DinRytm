import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PropTypes from "prop-types";

export default function Tjanst({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="mt-24 lg:mt-32 flex justify-center ">
        <div className="flex flex-col w-full md:max-w-5xl">
          <div className="block h-64 xs:h-xxl">
            <div
              className="h-full bg-center bg-cover flex"
              style={{
                backgroundImage: "url(" + post.frontmatter.image + ")"
              }}
            >
              <div className="text-white bg-green-layover-50 h-auto w-full m-4 p-4 self-end">
                <div className="text-3xl sm:text-5xl font-serif">
                  {post.frontmatter.title}
                </div>
                <div className="text-md sm:text-xl ml-4">
                  En kort beskrivning utav tjänsten, cirka tre rader. En kort
                  beskrivning utav tjänsten, cirka tre rader. En kort
                  beskrivning utav tjänsten, cirka tre rader. En kort
                  beskrivning utav tjänsten, cirka tre rader. En kort
                  beskrivning utav tjänsten, cirka tre rader. En kort
                  beskrivning utav tjänsten, cirka tre rader.
                </div>
                <div className="absolute bg-green-600 w-full top-0 left-0 border-red-600 border-8"></div>
              </div>
            </div>
          </div>

          <div
            className="p-8 break-words text-md sm:text-xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
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
        image
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
        image: PropTypes.string,
      })
    })
  })
};
