import React from "react";
import "./DataGender.css";

const DataGender = () => {
  return (
    <div className="grid">
      <div>
        <span className="Icon">Icon</span>
        <div className="informations">
          <h2>Men</h2>
          <div className="count">
            <h3>23908</h3>
          </div>
        </div>
      </div>
      <div>
        <span className="Icon">Icon</span>
        <div className="informations">
          <h2>Women</h2>
          <div className="count">
            <h3>23908</h3>
          </div>
        </div>
      </div>
      <div>
        <span className="Icon">Icon</span>
        <div className="informations">
          <h2>Total</h2>
          <div className="count">
            <h3>23908</h3>
          </div>
        </div>
      </div>
      <div>
        <span className="Icon">Icon</span>
        <div className="informations">
          <h2>Attendance</h2>
          <div className="count">
            <h3>23908</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGender;
