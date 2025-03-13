import React from "react";
import "./styles.css";

function GradientSlide({ isShifted }) {
  return (
    <div
      className={`gradientSlide ${isShifted ? "shiftLeft" : ""}`}
      id="gradientSlide"
    >
      <img src="src/ice.png" alt="Logo" />
      <div>
        <h2 style={{ fontFamily: "Crutsen" }}>Socialite</h2>
      </div>
      <span className="membersText">Members</span>
      <span className="adminText">Admin</span>
    </div>
  );
}

export default GradientSlide;
