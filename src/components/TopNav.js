import { useState } from "react";

export const TopNav = (props) => {
  const [pokeName, setPokeName] = useState("");

  const validateInput = (value) => {
    if (value === "") {
      props.callback(value);
    } else {
      setPokeName(value);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <ul style={{ color: "white", marginRight: "20px" }}>
        <span className="material-icons">face</span>
      </ul>
      <ul className="pokeForm">
        <input
          type="text"
          placeholder="Nombre Pokemon"
          className="form-control"
          onChange={(e) => validateInput(e.target.value.toLowerCase())}
        />
        <button
          className="btn btn-primary"
          onClick={() => props.callback(pokeName)}
        >
          Buscar
        </button>
      </ul>
    </nav>
  );
};
