import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar container--600 flex-row justify-sb align-c">
      <h3>O.A.T.F.</h3>

      <FontAwesomeIcon icon={faHome} />

      <span>Other Icons</span>
    </div>
  );
}
