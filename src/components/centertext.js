import React from "react";
import { Link } from "gatsby";

export const CenterText = () => {
  return (
    <div
      className="z-30 pt-32 max-w-screen flex justify-center text-white"
      style={{ minHeight: 110 + "vh" }}
    >
      <div className="flex flex-col text-center items-center justify-center -mt-24">
        <h3 className="w-1/2 text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
          Lär känna din kropp på ett nytt sätt
        </h3>
        <button className="py-3 px-8 mt-6 rounded capitalize text-lg bg-red-600 hover:bg-red-500">
          <Link to='/om'>om din rytm</Link>
        </button>
      </div>
    </div>
  );
};
