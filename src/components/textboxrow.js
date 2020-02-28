import React from "react";
import { Textbox } from "./textbox";
import PropTypes from "prop-types";


export const TextboxRow = (props) => {
  return (
    <section className="px-16 flex flex-col md:flex-row">
      {props.boxData.map(data => (
        <Textbox key={data.title} title={data.title} text={data.text} />
      ))}
    </section>
  );
};

TextboxRow.propTypes = {
  boxData: PropTypes.array
};


