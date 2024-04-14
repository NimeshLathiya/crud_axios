import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [datas, setDatas] = useState([]);
  const [tabledark, setTabledark] = useState("");

  let res = async () => {
    let apiData = await axios.get(
      "https://66196b97125e9bb9f299f3f3.mockapi.io/crudapps"
    );
    setDatas(apiData.data);
    console.log(apiData.data);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://66196b97125e9bb9f299f3f3.mockapi.io/crudapps/${id}`)
      .then(() => {
        res();
      });
    console.log(handleDelete);
  };

  const setLocalStorage = (id, name, email) => {
    console.log(id, name, email);
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  //   const handleSwitch = () => {
  //     if (tabledark === "table-dark") setTabledark("");
  //     else setTabledark("table-dark");
  //   };

  useEffect(() => {
    res();
  }, []);

  return (
    <div>
      <div className="form-check form-switch mt-5">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={() => {
            if (tabledark === "table-dark") setTabledark("");
            else setTabledark("table-dark");
          }}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {tabledark ? "Light Mode" : "Dark Mode"}
        </label>
      </div>

      <div className="mt-5 d-flex align-items-center justify-content-between ">
        <h3>Read</h3>
        <Link to="/">
          <button className="btn btn-secondary ">Create</button>
        </Link>
      </div>
      <table className={`table mt-3 ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {datas.map((user) => (
          <tbody key={user.id}>
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to="/update">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      setLocalStorage(user.id, user.name, user.email)
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Read;
