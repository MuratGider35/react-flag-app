import "./Detail.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { state: name } = useLocation();
  return (
    <div className="detailflag">
      <h1 className="text-3xl font-bold underline">{name?.name}</h1>
      <h1>{name.region}</h1>
      <h1>{name.capital}</h1>
      <h3></h3>
    </div>
  );
};

export default Detail;


// countryDiv.innerHTML = `   <div class="card mx-auto m-3 shadow-lg" style="width: 18rem;">
// <img src="${svg}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">${common}</h5>
//   <p class="card-text">${region}</p>
// </div>
// <ul class="list-group list-group-flush">
//   <li class="list-group-item">
//     <i class="fas fa-lg fa-landmark"></i> ${capital}
//   </li>
//   <li class="list-group-item">
//     <i class="fas fa-lg fa-comments"></i> ${Object.values(languages)}
//   </li>
//   <li class="list-group-item">
//     <i class="fas fa-lg fa-money-bill-wave"></i>
//     ${Object.values(currencies).map((item) => Object.values(item) + " ")}
//  </li>
// </ul>

// </div>`;