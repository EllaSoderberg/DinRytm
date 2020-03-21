import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export const Card = props => {
  let isVisible = true;
  if (!props.aktuelltIsActive && props.category === "aktuellt") {
    isVisible = false;
  }
  if (!props.forskningIsActive && props.category === "forskning") {
    isVisible = false;
  }
  return (
    <div className={`${isVisible ? `` : `hidden`} block w-64 bg-green-600 my-6 mx-4 flex flex-col hover:bg-red-600 hover:cursor-pointer rounded-lg`}>
    <Link to={props.slug}>
      <div
        className="block h-40 bg-center bg-cover rounded-t-lg"
        style={{
          backgroundImage: "url(" + props.img + ")"
        }}
      ></div>
      <div className="block p-2 px-4 text-white">
        <div className="text-sm uppercase">{props.category}</div>
        <div className="font-serif text-md">{props.title}</div>
        <div>
          {props.exc}
          <b>Läs mer</b>
        </div>
      </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  exc: PropTypes.string,
  slug: PropTypes.string,
  aktuelltIsActive: PropTypes.bool,
  forskningIsActive: PropTypes.bool
};
