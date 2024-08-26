import React from 'react';
import './AboutMe.css';
import babyPic from './photos/baby_pic.jpg';

export default function AboutMe() {
  return (
    <div className="about-me container my-5 p-4 shadow-lg rounded bg-white">
      <div className="about-me-header mb-4 text-center">
        <h2 className="fw-bold">About Me</h2>
      </div>
      <div className="row about-me-content">
        <div className="col-md-4 text-center avatar">
          <img src={babyPic} alt="Zachary Chapman" className="rounded-circle img-fluid border border-dark p-2" />
        </div>
        <div className="col-md-8 bio">
          <p>
            Greetings, fellow adventurers! I'm Zachary Chapman, a passionate explorer navigating the thrilling realms of programming, gaming, and the exhilarating journey of parenthood. By day, I harness the power of code to craft ingenious solutions that bridge the gap between imagination and reality. By night, I venture into digital landscapes, wielding my controller as a sword, ready to conquer virtual worlds and uncover hidden treasures.
          </p>
          <p>
            Recently, parenthood has joined this epic odyssey, infusing it with a delightful blend of chaos and joy. The once serene landscapes of my life are now bustling with the laughter and cries of a new generation, adding an entirely new dimension to my adventures. Yet, amidst the whirlwind of diapers and late-night feedings, I've discovered a profound intersection between my passions for coding, gaming, and nurturing.
          </p>
        </div>
      </div>
    </div>
  );
}
