import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export const Textbox = props => {
  return (
    <Link
      to={props.slug}
      className="z-40 flex-1 md:w-1/4 w-full p-10 my-4 md:mx-8 bg-red-600 break-words text-center rounded-sm shadow-xl"
    >
      <h3 className="text-l pb-2 font-bold uppercase">{props.title}</h3>
      <p className="text-sm">{props.text}</p>
    </Link>
  );
};

Textbox.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  slug: PropTypes.string
};
