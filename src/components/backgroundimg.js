import React from "react";
import PropTypes from "prop-types";

export const BackgroundImg = (props) => {
    return(
        <div 
        className="z-0 top-0 absolute inset-x w-full h-full bg-center bg-repeat" 
        style={{backgroundImage: 'url(' + props.src + ')', minHeight: props.height + 'vh'}}>
            <span className="w-full h-full absolute opacity-25 bg-green-600"></span>
        </div>
    );
}

BackgroundImg.propTypes = {
    src: PropTypes.string,
    height: PropTypes.number
};
