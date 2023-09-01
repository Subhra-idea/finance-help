import React from "react";
import "./Demo.css";
const Demo = () => {
  return (
    <div className="demo" id="demo">
      <div className="container">
        <div className="col-1">
          <p>More than 100 planners</p>
          <p>tenetur ipsam doloremque harum ullam</p>
          <p>
            dem, beatae ut nostrum fugiat quisquam architecto? Nobis, totam
            impedit praesentium ut at reiciendis sed. Possimus, aut quia dolor
            nesciunt fuga maxime. Quasi maxime consectetur molestias eaque
            veritatis ab nihil, tempora deserunt? Veritatis, facilis minima.
            Voluptatem doloremque inventore accusantium omnis natus dolor odio
            aperiam reprehenderit recusandae id! Eaque{" "}
          </p>
          <button className="button"> Get Your Free Financial Analysis</button>
        </div>
        <div className="col-2">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY" allow="transparent" allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Demo;
