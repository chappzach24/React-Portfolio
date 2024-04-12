import React from "react";
import "./Portfolio.css";

// import weatherApp from "../components/photos/";
import theblogApp from "./photos/techBlog.png";
import weatherApp from "./photos/weatherapi.png";
import apiApp from "./photos/api.png";
import noteApp from "./photos/noteTaking.png";
import passwordApp from "./photos/random-pass.png";
import quizApp from "./photos/code-Quiz.png";
import githubSmall from "./photos/Logo.png"

const Portfolio = () => {
  const projects = [
    {
      name: "Weather App",
      imgAsset: weatherApp,
      repoUrl: "https://github.com/chappzach24/Weather-ServerSideAPI",
      appUrl: "https://chappzach24.github.io/Weather-ServerSideAPI/",
    },
    {
      name: "The Blog App",
      imgAsset: theblogApp,
      repoUrl: "https://github.com/chappzach24/TechBlog",
      appUrl: "https://blog-tech12-6a99815e0d63.herokuapp.com/",
    },
    {
      name: "API Site",
      imgAsset: apiApp,
      repoUrl: "https://github.com/woestyn101/chicken_V2.git",
      appUrl: "https://dashboard.heroku.com/apps/chicken-v2",
    },
    {
      name: "Note Taking App",
      imgAsset: noteApp,
      repoUrl: "https://github.com/chappzach24/NoteTaking?tab=readme-ov-file",
      appUrl: "https://note-taking1-52f9ea572e9c.herokuapp.com/",
    },
    {
      name: "Random-Password",
      imgAsset: passwordApp,
      repoUrl: "https://github.com/chappzach24/Random-Password",
      appUrl: "https://chappzach24.github.io/Random-Password/",
    },
    {
      name: "Quiz App",
      imgAsset: quizApp,
      repoUrl: "https://github.com/chappzach24/Code-Quiz-API",
      appUrl: "https://chappzach24.github.io/Code-Quiz-API/",
    },
  ];

  return (
    <div className="container">
      <h2 className="portfolio-heading text-center mt-5">Portfolio</h2>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card">
              <img
                className="card-img-top"
                src={project.imgAsset}
                alt={project.name}
              />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <a
                  href={project.appUrl}
                  className="btn btn-primary mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
                <a
                  href={project.repoUrl}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={githubSmall}
                    alt="GitHub Repository"
                    className="github-icon"
                  />{" "}
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
