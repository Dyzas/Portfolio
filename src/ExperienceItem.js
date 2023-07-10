import React from "react";

const ExperienceItem = ({ title, description, images }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {images.map((image, index) => (
        <img
          src={image}
          alt={`Image ${index + 1}`}
          className="chef-experience-image"
          key={index}
        />
      ))}
    </div>
  );
};

export default ExperienceItem;
