import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

const SocialButton = ({ icon, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SocialButton;
