import PropTypes from "prop-types";
import React from "react";

import { Header } from "./header";

class Layout extends React.Component {
  render() {
    return (
      <div className="z-30 flex flex-col min-h-screen">
        <Header isIndex={this.props.isIndex} />
        <main className="flex flex-col md:justify-center mx-auto w-full">
          {this.props.children}
        </main>
        <footer className="bg-green-400">
          <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm  text-white">
            <p>
              Utvecklad av {` `}
              <a
                className="font-bold no-underline"
                href="https://github.com/EllaSoderberg"
              >
                Ella Söderberg
              </a>
            </p>
            <p>
              Designad av {` `}
              <a className="font-bold no-underline" href="#">
                Maja Lundquist
              </a>
              {` `} & {` `}
              <a className="font-bold no-underline" href="#">
                ....
              </a>
            </p>
            <p>
              Se denna sida på {` `}
              <a
                className="font-bold no-underline"
                href="https://github.com/EllaSoderberg"
              >
                GitHub
              </a>
            </p>
          </nav>
        </footer>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool
};

export default Layout;
