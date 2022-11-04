import "./Home.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
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

  return (
    <div className="home">
      <div className="text-center">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button className="btn btn-danger m-2" onClick={() => getApi()}>
          search
        </button>
        <select className="p-1"
          name="country"
          id="country"
          onChange={(e) => getAllname(e.target.value)}
        >
          {selectcountry.map((item, idx) => {
            return (
              <option key={idx} value={item?.name?.common}>
                {item?.name?.common}
              </option>
            );
          })}
        </select>
      </div>

      <div className="container bg-secondary text-center p-5 rounded-4">
        <h4>please click on the flag for the details..</h4>
        <p>{name?.name}</p>
        <img src={name?.flags?.svg} alt="" width={"200px"} />
      </div>
    </div>
  );
};

export default Home;
