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
            Hey, I'm Zachary Chapman—a programmer, gamer, and new parent. By
              day, I code solutions; by night, I conquer virtual worlds.
              Parenthood recently joined the adventure, adding chaos and joy.
              Join me as I share insights, experiences, and the delightful
              intersection of code, games, and parenting. Let's connect and
              explore together!
          </p>
          <p>
            Join me as I share insights, experiences, and the delightful intersection of code, games, and parenting. Let's connect and explore together!
          </p>
        </div>
      </div>
    </div>
  );
}
