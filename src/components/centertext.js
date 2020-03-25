import React from "react";
import { Button } from "./button";
import PropTypes from "prop-types";

export const CenterText = (props) => {
  return (
    <div
      className="z-30 pt-32 max-w-screen flex justify-center text-white"
      style={{ minHeight: 110 + "vh" }}
    >
      <div className="flex flex-col text-center items-center justify-center -mt-24">
        <h3 className="w-1/2 text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
          {props.text}
        </h3>
        <Button to="/om">Om Din rytm</Button>
      </div>
    </div>
  );
};


CenterText.propTypes = {
  text: PropTypes.string,
};
