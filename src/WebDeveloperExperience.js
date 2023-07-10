import React from "react";
import ProjectItem from "./ProjectItem";
import "./styles.css";

const WebDeveloperExperience = () => {
  return (
    <div className="web-developer-experience">
      <h2>Expérience de développeur web</h2>
      <ProjectItem
        title="SOS sac à puce"
        description="Un projet concernant une association animale pour laquelle je devais réaliser un site vitrine composer de leur description, de leur contact, un formulaire pour devenir bénévole et pour contacter et enfin une seconde page pour rassembler les évènement réaliser par cette association "
        link="https://sosanimaux.netlify.app"
      />
      <ProjectItem
        title="Charles Cantin photographe"
        description="Un projet concernant un particulier qui souhaitais ouvrir son site personnel où l'on pourrait trouver des exemple de ces prestation par thème, ces tarifs et bien sur les moyens pour le contacter"
        link="https://photographievitrine.netlify.app"
      />
      <ProjectItem
        title="Le Quai Antique"
        description="Un projet pour un restauration qui voulait une application pour son restaurant avec une connexion pour les clients fidèle, une possibilité de reserver en precisant l'heure, le nombre de couverts et si il y avait des allergies et un exemple de menu. "
        link="https://github.com/Dyzas/ECF_GraduateDeveloppeur_juin2023"
      />
    </div>
  );
};

export default WebDeveloperExperience;
