import "./Detail.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { state: name } = useLocation();
  return(
    <div>
      <p>{name?.name}</p>
    </div>
  )
  
};

export default Detail;
