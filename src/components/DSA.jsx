import React from "react";
import { Outlet, Link } from "react-router-dom";

const DSA = () => {
  return (
    <div>
      <h1>DSA Learning Paths</h1>
      <nav>
        <ul>
          <li><Link to="beginner">Beginner</Link></li>
          <li><Link to="intermediate">Intermediate</Link></li>
          <li><Link to="advance">Advance</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* This renders the child route components */}
    </div>
  );
};

export default DSA;
