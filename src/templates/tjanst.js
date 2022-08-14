import React from "react";
import { graphql } from "gatsby";
import PageContainer from "../components/PageContainer";
import PropTypes from "prop-types";
import { QuoteBlock } from "../components/QuoteBlock";


export default function Tjanst({ data }) {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const post = data.markdownRemark;
  return (
    <PageContainer>
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
          <div className="text-white h-auto w-full ml-4 p-4 self-end">
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
        <QuoteBlock
        quote={
          post.frontmatter.quote
        }
        author={post.frontmatter.quoteauthor}
      />
    </PageContainer>
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
        quote
        quoteauthor
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
        quote: PropTypes.string,
        quoteauthor: PropTypes.string,
      }),
    }),
  }),
};
