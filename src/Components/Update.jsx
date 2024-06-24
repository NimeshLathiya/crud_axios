import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, ] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("id", id);
    axios
      .put(`https://66196b97125e9bb9f299f3f3.mockapi.io/crudapps/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      });
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      <h2 className="mt-5">Update</h2>
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
        <Link to="/read">
          <button type="submit" className="btn mt-3 me-3 btn-primary">
            Back
          </button>
        </Link>
        <button
          onClick={handleUpdate}
          type="submit"
          className="btn mt-3 btn-success"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
