import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import SocialButton from "./SocialButton";
import WebDeveloperExperience from "./WebDeveloperExperience";
import ChefExperience from "./ChefExperience";
import "./styles.css";
import profileImage from "./moi.jpg";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="App">
      <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Maxime Lefebvre
      </h1>
      {isHovered && (
        <img src={profileImage} alt="Profile" className="profile-image" />
      )}
      <div className="social-buttons">
        <SocialButton
          icon={faFacebook}
          url="https://www.facebook.com/maxime.lefebvre.7564/"
        />
        <SocialButton
          icon={faLinkedin}
          url="https://www.linkedin.com/in/maxime-lefebvre-97a974133/"
        />
        <SocialButton icon={faGithub} url="https://github.com/Dyzas" />
        <SocialButton
          icon={faInstagram}
          url="https://www.instagram.com/maximelef84/"
        />
      </div>
      <div className="description">
        <h2>A propos de moi</h2>
        <p>
          Ambitieux, déterminé, adaptable sont des mots qui me caractérisent. Je
          suis un ancien chef de cuisine en reconversion professionnelle vers le
          développement web. Fort de mes expériences passées, je ne lâche rien
          face à l'effort et à l'inconnu.
        </p>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("webDeveloper")}>
          Développeur Web
        </button>
        <button onClick={() => handleButtonClick("chef")}>
          Chef de Cuisine
        </button>
      </div>
      {currentPage === "webDeveloper" && <WebDeveloperExperience />}
      {currentPage === "chef" && <ChefExperience />}
    </div>
  );
};

export default Portfolio;
