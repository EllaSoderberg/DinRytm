import React from "react";
//import { Link } from "gatsby";
//import PropTypes from "prop-types";
import Stones from "../images/Stones.jpg";

export const Card = () => {
    return(
        <div className="block w-64 bg-green-600 my-6 mx-4 flex flex-col hover:bg-red-600 rounded-lg">
        <div
        className="block h-40 bg-center bg-cover rounded-lg"
        style={{
          backgroundImage: "url(" + Stones + ")"
        }}
      ></div>
        <div className="block p-2 text-white">
        <div className="text-sm uppercase">Aktuellt</div>
        <div className="font-serif text-xl">Den viktiga andningen</div>
        <div className="h-20">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div>
        </div>
        </div>
    )
} 
