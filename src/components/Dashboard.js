import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  let navigate = useNavigate();
  let data = {
    dt: "kaushal",
  };
  return (
    <>
      <h1 className="text-center">Dashboard page</h1>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          onClick={() => {
            navigate("/Logout", { state: data });
          }}
          className="btn btn-primary "
        >
          Logout{" "}
        </button>
      </div>
    </>
  );
};
