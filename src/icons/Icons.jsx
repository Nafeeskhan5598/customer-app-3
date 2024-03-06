// Icons.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Icons = ({ name }) => {

  const iconStyles = {
    padding: "1rem",
    fontSize: "xx-large",
    color: "white",
  };

  switch (name) {
    case "telegram":
      return <FontAwesomeIcon icon={faTelegram} style={iconStyles} />;
    case "facebook":
      return <FontAwesomeIcon icon={faFacebook} style={iconStyles} />;
    case "instagram":
      return <FontAwesomeIcon icon={faInstagram} style={iconStyles} />;
    case "twitter":
      return <FontAwesomeIcon icon={faTwitter} style={iconStyles} />;
    default:
      return null;
  }
};

export default Icons;
