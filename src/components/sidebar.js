import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { SocialMedia } from "./socialmedia";

export const Sidebar = props => {
  return (
    <div>
      <div
        className={`${
          props.isExpanded ? `translate-x-0` : `-translate-x-64`
        } z-50 fixed h-screen text-white top-0 left-0  w-64 bg-green-400 transition transform ease-in-out duration-500`}
      >
        <div
          className="h-6 w-6 m-4 float-right fill-current text-white hover:cursor-pointer hover:text-green-100"
          onClick={props.toggleExpansion}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.696 365.696">
            <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
          </svg>
        </div>
        <div className="relative flex flex-col h-full w-full font-bold overflow-scroll">
          {props.navData.map(link => (
            <div key={link.title}>
            <Link
              className="text-white text-l px-4 py-2 hover:bg-green-300 block"
              
              to={link.route}
            >
              {link.title}
            </Link>
            {link.nodes.map((sublink) => (
                    <Link
                      className="text-white text-sm block px-8 py-2 hover:bg-green-300"
                      key={sublink.title}
                      to={link.route + sublink.url}
                    >
                    {sublink.title}
                    </Link>
                  ))}
                  </div>
          ))}
          <SocialMedia />
        </div>
      </div>
      <div
        className={`${
          props.isExpanded ? `` : `hidden`
        } absolute fixed top-0 left-0 w-screen h-screen bg-black opacity-25`}
        onClick={props.toggleExpansion}
      ></div>
    </div>
  );
};

Sidebar.propTypes = {
  isExpanded: PropTypes.bool,
  toggleExpansion: PropTypes.func,
  navData: PropTypes.array
};
