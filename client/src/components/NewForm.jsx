import React, { useState } from "react";
import "./NewForm.css";

const NewForm = () => {
  const handlerSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length === 0) {
      console.log("Name is empty...");
    }
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handlerName = (event) => {
    setName(event.target.value);
  };
  const handlerAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="card">
        <form onSubmit={handlerSubmit}>
          <div className="group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handlerName}
              placeholder="Enter your name"
              className="input"
            />
          </div>
          <div className="group">
            <label htmlFor="age" onChange={handlerAge}>
              Age
            </label>
            <input
              type="number"
              placeholder="Enter your age"
              name="age"
              value={age}
              id="age"
              className="input"
            />
          </div>
          <div className="group">
            <button className="button" type="submit">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewForm;
