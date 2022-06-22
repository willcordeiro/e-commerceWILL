import React from "react";
import "./title.css";
const Title = ({ children }) => {
  return (
    <>
      <div className="sectionTitleDiv">
        {" "}
        <h1 className="sectionTitle">{children}</h1>
      </div>
    </>
  );
};

export default Title;
