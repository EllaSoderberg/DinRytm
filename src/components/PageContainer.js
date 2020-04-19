import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";

class PageContainer extends React.Component {
  render() {
    return (
        <Layout isIndex={false}>
        <div className="mt-24 lg:mt-32 flex justify-center lg:p-4">
          <div className="flex flex-col w-full md:max-w-4xl">
            {this.props.children}
          </div>
        </div>
      </Layout>
    );
  }
}

PageContainer.propTypes = {
    children: PropTypes.node,
};

export default PageContainer;
