import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-header">
        <h2>About Me</h2>
      </div>
      <div className="about-me-content">
        <div className="avatar">
          <img src="your_photo_or_avatar_url" alt="Zachary Chapman" />
        </div>
        <div className="bio">
          <p>
            Hi, I'm <span className="name">Zachary Chapman</span>, a passionate web developer with <span className="experience">[X]</span> years of experience in building web applications. I love turning ideas into reality through code and constantly expanding my skills to stay up-to-date with the latest technologies.
          </p>
          <p>
            In my journey as a developer, I've worked with technologies like HTML, CSS, JavaScript, React, Node.js, and more. I enjoy collaborating with teams and solving complex problems to deliver high-quality solutions.
          </p>
          <p>
            Outside of coding, I enjoy <span className="interests">[hobbies or interests related to your personality]</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
