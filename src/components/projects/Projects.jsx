import React from "react";
import "./projects.css";

import one from "../../assets/projectimages/1.jpg";
import two from "../../assets/projectimages/2.jpg";
import three from "../../assets/projectimages/3.jpg";
import four from "../../assets/projectimages/4.jpg";
import five from "../../assets/projectimages/5.jpg";
import six from "../../assets/projectimages/6.jpg";
import seven from "../../assets/projectimages/7.jpg";
import eight from "../../assets/projectimages/8.jpg";
import nine from "../../assets/projectimages/9.jpg";

import Tagbox from "../tagger/Tagbox";

const data = [
  {
    id: 1,
    image: one,
    title: "Managerial Optimizer",
    github: "https://github.com/sairohitp",
    demosite: "https://github.com/sairohitp",
  },
  {
    id: 2,
    image: two,
    title: "Finance Dashboard",
    github: "https://github.com/sairohitp",
    demosite: "https://github.com/sairohitp",
  },
  {
    id: 3,
    image: three,
    title: "Lime Media",
    github: "https://github.com/sairohitp",
    demosite: "https://github.com/sairohitp",
  },
  {
    id: 4,
    image: four,
    title: "eBOOK App UX",
    github: "https://github.com/sairohitp",
    demosite: "https://github.com/sairohitp",
  },
  {
    id: 5,
    image: five,
    title: "Radio Station",
    github: "https://github.com/sairohitp",
    demosite: "https://github.com/sairohitp",
  },
  {
    id: 6,
    image: six,
    title: "Bank Panel",
    github: "https://github.com/sairohitp",
    demosite: "https://github.com/sairohitp",
  },
  {
    id: 7,
    image: seven,
    title: "Optics Website",
    github: "https://github.com/sairohitp",
    demosite: "https://github.com/sairohitp",
  },
  {
    id: 8,
    image: eight,
    title: "Collaborator Foyer",
    github: "https://github.com/sairohitp",
    demosite: "https://github.com/sairohitp",
  },
  {
    id: 9,
    image: nine,
    title: "Matrics Dashboard",
    github: "https://github.com/sairohitp",
    demosite: "https://github.com/sairohitp",
  },
];

const Projects = () => {
  return (
    <div className="divbox" id="projects">
      <Tagbox subtop="Functional &amp; Completed" heading="Projects" />
      <div className="projectgrid">
        {data.map(({ id, image, title, github, demosite }) => {
          return (
            <div className="projectile" key={id}>
              <img src={image} className="projectimg" alt={title} />
              <div className="classicprojectflex projectDetailsContainer">
                <div>
                  <h4>{title}</h4>
                </div>
                <div className="classicprojectflex">
                  <div>
                    <a href={github}>
                      <button>
                        <i className="fa projectfa fa-github"></i>
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href={demosite}>
                      <button>
                        <i className="fa projectfa fa-arrow-up-right-from-square"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
