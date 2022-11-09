import "./Detail.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { state: name } = useLocation();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{name?.name}</h1>
    </div>
  );
};

export default Detail;
