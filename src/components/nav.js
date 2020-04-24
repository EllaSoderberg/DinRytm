import { Link } from "gatsby";
import React from "react";
import { Sidebar } from "./Sidebar";
import { SocialMedia } from "./SocialMedia";

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
    this.toggleExpansion = this.toggleExpansion.bind(this);
  }

  toggleExpansion() {
    const newState = this.state.isExpanded ? false : true;
    this.setState({ isExpanded: newState });
  }

  render() {
    let navData = [
      {
        route: `/`,
        title: `Hem`,
        nodes: []
      },
      {
        route: `/tjanster`,
        title: `Tjänster`,
        nodes: [
          {
            title: "Terapi",
            url: "/terapi"
          },
          {
            title: "Handledning",
            url: "/handledning"
          },
          {
            title: "Rådgivning",
            url: "/radgivning"
          }
        ]
      },
      {
        route: `/lasmer`,
        title: `Läs Mer`,
        nodes: []
      },
      {
        route: `/om`,
        title: `Om`,
        nodes: []
      },
      {
        route: `/kontakt`,
        title: `Kontakt`,
        nodes: []
      }
    ];

    return (
      <div className="">
        <Sidebar
          isExpanded={this.state.isExpanded}
          toggleExpansion={this.toggleExpansion}
          navData={navData}
        />
        <button
          className="block md:hidden px-6 py-4 text-white hover:cursor-pointer focus:outline-none"
          onClick={this.toggleExpansion}
        >
          <svg
            className="fill-current h-8 w-8 hover:text-green-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path>
            <title>Menu</title>
          </svg>
        </button>
        <div className="hidden md:block">
          <div className="flex font-bold text-l">
            {navData.map(link => (
              <Link
                className={
                  "md:inline-block md:ml-6 lg:ml-12 mt-1 no-underline text-white hover:text-green-100 active:text-green-600"
                }
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))}
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}
