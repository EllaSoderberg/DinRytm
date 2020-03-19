import React from "react";
import PropTypes from "prop-types";

export const GreenButton = (props) => {
  return (
    <div
      className={`${
        props.isActive ? `bg-green-500 text-white` : `bg-white text-green-600`
      }  hover:bg-green-300 hover:cursor-pointer font-bold rounded-full px-4 py-1 border-2 border-green-300 m-2`}
    >
      {props.children}
    </div>
  );
};

GreenButton.propTypes = {
  isActive: PropTypes.boolean,
  children: PropTypes.string
};
