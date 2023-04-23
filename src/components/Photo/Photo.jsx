import React from "react";
import "../Photo/Photo.css";
function Photo() {
  return (
    <div className="photo">
      <img
        src={"images/IMG_4122.jpg"}
        className="img-circled"
        width="5000px"
        height="500px"
        padding="1px"
        marginBottom="20px"
        alt=""
      />
    </div>
  );
}
export default Photo;
