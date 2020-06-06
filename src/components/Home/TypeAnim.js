import React from "react";
import Typical from "react-typical";
import { black } from "color-name";

const TypeAnim = () => {
  return (
    <>
      <span className="typical-font Iam-font">I am a</span>
      <Typical
        className="typical-font"
        steps={["recent BCIT grad.", 500, "software developer.", 500, "problem solver.", 500, "music lover.", 500]}
        loop={Infinity}
        wrapper="span"
      />
    </>
  );
};

export default TypeAnim;
