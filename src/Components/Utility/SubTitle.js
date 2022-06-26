import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btnTitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-tile">{title}</div>
      {btnTitle ? (
        <a to={`${pathText}`} style={{ textDecoration: "none" }}>
          <div className="shopping-now">{btnTitle}</div>
        </a>
      ) : null}
    </div>
  );
};

export default SubTitle;
