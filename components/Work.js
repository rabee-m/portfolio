import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Skills = ({ title, cards }) => {
  return (
    <div id="skills" className="bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary text-center fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              link={value.link}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = ({ title, cards }) => {
  return (
    <div id="projects" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light text-center fw-bold">Projects</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <SpecialCard
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({ title, start_date, description, icons }) => {
  return (
    <div
      className="card py-3 px-3 mx-sm-4 my-4 card-work"
      style={{ width: "20rem" }}
    >
      <h4 className="text-primary">{title}</h4>
      <p className="text-dark">{description}</p>
	  <p className="text-dark">{start_date}</p>
      <div className="text-end">
        {icons &&
          icons.map((value, index) => (
            <Link key={index} href={value.link}>
              <a target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="icon-style mx-1"
                  icon={value.icon}
                  size="2x"
                />
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export const SpecialCard = ({ title, description, icons }) => {
  return (
    <a target="_blank" rel="noreferrer">
      {icons &&
        icons.map((value, index) => (
          <Link key={index} href={value.link}>
            <div
              className="card py-3 px-3 mx-sm-4 my-4 card-work"
              style={{ width: "20rem", cursor: "pointer"}}
            >
              <h4 className="text-primary">{title}</h4>
              <p className="text-dark">{description}</p>
              <div className="text-end">
                <FontAwesomeIcon
                  className="icon-style mx-1"
                  icon={value.icon}
                  size="2x"
                />
              </div>
            </div>
          </Link>
        ))}
    </a>
  );
};