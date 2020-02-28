import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

export const SubMenu = props => {
  return (
    <div className={`${props.submenuActive ? `block` : `hidden`} h-8 mr-2 w-8`}>
      {props.nodes.map(link => (
        <Link key={link.title} to={link.route}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

SubMenu.propTypes = {
  nodes: PropTypes.array,
  submenuActive: PropTypes.bool
};
