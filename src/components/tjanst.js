import React from "react";
import { Content } from "./content";

export class Tjanst extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    const newState = !this.state.isOpen ? true : false;
    this.setState({ isOpen: newState });
  }

  render() {
    let expandIcon;
    let content;
    if (!this.state.isOpen) {
      expandIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
      );
      content = <div className=""></div>;
    } else if (this.state.isOpen) {
      expandIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      );
      content = <Content></Content>;
    }
    return (
      <div className="w-full flex flex-col my-4">
        <div onClick={this.toggleState} className="bg-red-600 flex justify-between text-white hover:cursor-pointer">
          <h1 className="font-bold font-serif text-2xl p-6 px-8">Mediyoga</h1>
          <div
            className="fill-current w-10 h-0 m-6"
          >
            {expandIcon}
          </div>
        </div>
        <div className="transform transition ease-in duration-500">{content}</div>
        
      </div>
    );
  }
}
