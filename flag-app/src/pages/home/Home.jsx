import "./Home.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [selectcountry, setSelectcountry] = useState([]);

  const getApi = async () => {
    const url = `https://restcountries.com/v2/name/${name}`;
    const data = await axios(url);
    // console.log(data.data[0]);
    setName(data.data[0]);
  };

  const getAllname = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    const data = await axios(url);
    // console.log(data.data);
    setSelectcountry(data.data);
  };

  useEffect(() => {
    getApi();
    getAllname();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    getApi();
    
    setName("");
  };

  return (
    <div className="home ">
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="country.. "
          />

          <button className="btn btn-success m-2">search</button>
          <select
            className="p-1 sel"
            name="country"
            id="country"
            value={selectcountry?.name}
            onChange={(e) => setName(e.target.value)}
          >
            {selectcountry.map((item, idx) => {
              return (
                <option
                  onChange={(e) => setSelectcountry(e.target.value)}
                  key={idx}
                  value={item?.name?.common}
                >
                  {item?.name?.common}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="container bg-secondary text-center p-5 rounded-4 mt-3">
        <h4>please click on the flag for the details..</h4>
        <p>{name?.name}</p>
        <img
          onClick={() => navigate("/detail", { state: name })}
          src={name?.flags?.svg}
          alt=""
          width={"200px"}
        />
      </div>
    </div>
  );
};

export default Home;
