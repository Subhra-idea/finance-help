import React from "react";
import "./About.css";
import john from "./imgs/john-doe.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={john} alt="john" />
        <div className="col-2">
          <h2>About</h2>
          <p>
            orem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
            facere libero deleniti. Et error exercitationem ea aspernatur nam?
            Laboriosam accusamus eligendi placeat expedita sequi sapiente
            tempora explicabo vel molestias veniam assumenda cumque amet eaque
            magnam illum esse culpa reiciendis iste omnis tempore animi minima
          </p>
          <p>
            Et error exercitationem ea aspernatur nam? Laboriosam accusamus
            eligendi placeat expedita sequi sapiente tempora explicabo vel
            molestias veniam assumenda cumque amet eaque
          </p>
          <button className="button">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
