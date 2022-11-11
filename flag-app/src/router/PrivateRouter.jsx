import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContexProvider";
const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  return <div>{currentUser ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
