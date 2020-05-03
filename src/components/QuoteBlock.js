import React from "react";
import PropTypes from "prop-types";
import greenB from "../img/GreenPattern.png";

export const QuoteBlock = (props) => {
  return (
    <div>
    <div
          className="bg-contain w-full "
          style={{
            backgroundImage: "url(" + greenB + ")",
            minHeight: 100 + "%",
          }}
        >
      <div className="flex justify-around bg-green-layover-85">
      
        <div className="text-center font-serif text-2xl text-white italic px-10 py-20">
          &quot;{props.quote}&quot; <p className="text-lg"> - {props.author}</p>
        </div>
      </div>
      </div>

    </div>
  );
};

QuoteBlock.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};
