import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handleSubmit", handleSubmit);

    const header = { "Access-Control-Allow-Origin": "*" };

    axios.post(
      "https://65c3674c39055e7482c0ceea.mockapi.io/crud",
      {
        name: name,
        email: email,
      },
      header
    );

    setName("");
    setEmail("");

    history("/read");
  };

  return (
    <>
      <div className="mt-5 d-flex align-items-center justify-content-between">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-secondary ">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3 mt-5">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn mt-3 btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
