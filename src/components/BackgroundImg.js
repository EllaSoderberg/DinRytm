import React from "react";
import PropTypes from "prop-types";

export const BackgroundImg = (props) => {
    return(
        <div 
        className="z-0 top-0 absolute inset-x w-full h-full bg-center bg-cover" 
        style={{backgroundImage: 'url(' + props.src + ')', minHeight: props.height + 'vh'}}>
            <span className="w-full h-full absolute opacity-50 bg-green-500"></span>
        </div>
    );
}

BackgroundImg.propTypes = {
    src: PropTypes.string,
    height: PropTypes.number
};
