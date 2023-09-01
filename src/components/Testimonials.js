import React from "react";
import "./Testimonials.css";
import user1 from "./imgs/user1.jpeg";
import user2 from "./imgs/user2.jpeg";
import user3 from "./imgs/user3.jpeg";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              Et error exercitationem ea aspernatur nam? Laboriosam accusamus
              eligendi placeat expedita sequi sapiente tempora explicabo vel
              molestias veniam assumenda cumque amet
            </p>
            <p className="user">User1</p>
            <p>Director of something</p>
          </div>
          <div className="card">
            <img src={user2} alt="user2" />
            <p>
              Et error exercitationem ea aspernatur nam? Laboriosam accusamus
              eligendi placeat expedita sequi sapiente tempora explicabo vel
              molestias veniam assumenda cumque amet
            </p>
            <p className="user">User2</p>
            <p>Director of something</p>
          </div>
          <div className="card">
            <img src={user3} alt="user3" />
            <p>
              Et error exercitationem ea aspernatur nam? Laboriosam accusamus
              eligendi placeat expedita sequi sapiente tempora explicabo vel
              molestias veniam assumenda cumque amet
            </p>
            <p className="user">User3</p>
            <p>Director of something</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
