import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export const Button = (props) => {
    return(
        <button className="py-3 px-8 mt-6 rounded-full text-lg bg-red-600 hover:bg-red-500">
          <Link to={props.to}>{props.children}</Link>
        </button>
    )
} 

Button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.string
  };