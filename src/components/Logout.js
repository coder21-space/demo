import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  let location = useLocation();
  let navigate = useNavigate();

  return (
    <>
      <h1 className="text-center">logout page</h1>
      <h1 className="text-center">{location.state.dt} logout succesfully!! </h1>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          onClick={() => navigate("/", { replace: true })}
          className="btn btn-primary"
        >
          {" "}
          Go back{" "}
        </button>
      </div>
    </>
  );
};
