import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from "react-router-dom";

export const Login = () => {
  let location = useLocation();

  return (
    <>
      <h1 className="text-center">Login page </h1>
      <h1 className="text-center">{location.state.st} </h1>
    </>
  );
};
