import "./Detail.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { state: name } = useLocation();
  console.log(name);

  return (
    <div className="detailflag p-2">
      <div class="card w-50 m-auto">
        <div>
          <img src={name?.flags.svg} class="card-img-top" alt="..."></img>
        </div>

        <div class="card-body">
          <h5 class="card-title">{name?.name}</h5>
          <p class="card-text">{name?.altSpellings[3]}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {" "}
            <strong>Capital:</strong> {name?.capital}
          </li>
          <li class="list-group-item">
            {" "}
            <strong>Region:</strong> {name?.region}
          </li>
          <li class="list-group-item">
            {" "}
            <strong>Currencies:</strong> {name?.currencies[0].code}{" "}
            {name?.currencies[0].name}
          </li>
        </ul>
        <div class="card-body text-center display-6">
          <Link  to="/" class="card-link">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
