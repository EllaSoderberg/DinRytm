import { Link } from "gatsby";
import React from "react";
import { Sidebar } from "./sidebar";
import { SocialMedia } from "./socialmedia";

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
        nodes: [],
      },
      {
        route: `/tjanster`,
        title: `Tjänster`,
        nodes: [
          {
            title: "Kognitiv beteendeterapi",
            url: "/terapi",
          },
          {
            title: "Rådgivning",
            url: "/radgivning",
          },
          {
            title: "Handledning fertilitetsförståelse",
            url: "/handledning-fertilitetsförståelse",
          },
          {
            title: "Mediyoga",
            url: "/yoga",
          },
        ],
      },
      {
        route: `/lasmer`,
        title: `Läs Mer`,
        nodes: [],
      },
      {
        route: `/om`,
        title: `Om`,
        nodes: [],
      },
      {
        route: `/kontakt`,
        title: `Kontakt`,
        nodes: [],
      },
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
            {navData.map((link) => (
              <div className="dropdown relative" key={link.title}>
                <Link
                  className={
                    "dropbtn md:inline-block ml-4 mt-1 no-underline text-white hover:text-green-100 active:text-green-600"
                  }
                  key={link.title}
                  to={link.route}
                >
                  {link.title}
                </Link>
                <div className="dropdown-content hidden absolute z-0 ml-1 pt-2">
                  {link.nodes.map((sublink) => (
                    <Link
                      className="text-white text-sm block px-3 py-2 bg-green-400 hover:bg-green-300"
                      key={sublink.title}
                      to={link.route + sublink.url}
                    >
                      {sublink.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}
