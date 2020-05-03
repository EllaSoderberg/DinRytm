import React from "react";
import { Textbox } from "./Textbox";
import PropTypes from "prop-types";


export const TextboxRow = (props) => {
  return (
    <section className="px-8 xs:px-16 flex flex-col lg:flex-row">
      {props.boxData.map(data => (
        <Textbox key={data.title} title={data.title} text={data.text} slug={data.slug}/>
      ))}
    </section>
  );
};

TextboxRow.propTypes = {
  boxData: PropTypes.array
};


