import React from "react";
import { Link } from "react-router-dom";

import profileImage from "../images/about-me/HeadShot.jpg";

const ProfileSection = () => (
  <div className="profile">
    <img src={profileImage} alt="Profile" />
    <div className="profile__info">
      <h1>
        Hi. It's <span className="profile__name">Phil</span>!
      </h1>
      <h2>
        I <Link to="/design">Design</Link>, <Link to="/code">Code</Link>, &{" "}
        <Link to="/make">Make</Link> Stuff
      </h2>
      <p>
        Here is a little paragraph about myself, I'm not 100% what to put in
        here yet, but if you are reading this, feel free to send me a message
        about why you think im hirable. it would probably be around four to five
        lines, so which is the length of this little snippet. Thanks for your
        input!
      </p>
    </div>
  </div>
);

const ResumeSection = () => (
  <div className="resume">My Resume Will Go Here</div>
);

const About = () => (
  <section className="about-me">
    <ProfileSection />
    <ResumeSection />
  </section>
);

export default About;
