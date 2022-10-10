import React from "react";
import "../Photo/Photo.css";
function Photo() {
  return (
    <div className="photo">
      <img
        src={"images/IMG_2500.jpg"}
        className="img-circled"
        width="500px"
        height="600px"
        padding="1px"
        marginBottom="20px"
        alt=""
      />
    </div>
  );
}
export default Photo;
