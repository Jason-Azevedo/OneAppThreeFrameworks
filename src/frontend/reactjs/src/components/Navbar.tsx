import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar container--600 flex-row justify-sb align-c">
      <h3 className="title--18 color-primary">O.A.T.F.</h3>

      <Link to={"/"}>
        <FontAwesomeIcon icon={faHome} className="icon--18" />
      </Link>

      {/* Display this menu if the user signed in */}
      <div className="flex-row justify-sb align-c gap--24">
        <FontAwesomeIcon icon={faBell} className="icon--18" />

        {/* Display user profile picture if the uploaded one */}
        <FontAwesomeIcon icon={faUser} className="icon--18" />
      </div>
    </div>
  );
}
