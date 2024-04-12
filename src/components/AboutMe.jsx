import './AboutMe.css';
import babyPic from './photos/baby_pic.jpg';

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-header">
        <h2>About Me</h2>
      </div>
      <div className="about-me-content">
        <div className="avatar">
          <img src={babyPic} alt="Zachary Chapman" />
        </div>
        <div className="bio">
          <p>
            Hey, I'm <span className="name">Zachary Chapman</span>—a passionate web developer. I love turning ideas into reality through code and constantly expanding my skills to stay up-to-date with the latest technologies.
          </p>
          <p>
            By day, I craft elegant solutions to complex problems; by night, I immerse myself in virtual adventures, conquering challenges and discovering new horizons. Parenthood recently joined the adventure, adding an extra dose of chaos and joy to my journey.
          </p>
          <p>
            Join me as I share insights, experiences, and the delightful intersection of code, games, and parenting. Let's connect and explore together!
          </p>
        </div>
      </div>
    </div>
  );
}
