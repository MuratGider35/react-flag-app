import "./Home.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  // const [select, setSelect] = useState("");

  const getApi = async () => {
    const url = `https://restcountries.com/v2/name/${name}`;
    const data = await axios(url);
    console.log(data.data[0]);
    setName(data.data[0]);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    
      <div className="home">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => getApi()}>search</button>

        <div>
          <h1>başkent</h1>
        <p>{name.capital}</p>
        </div>
      </div>

    
   
  );
};

export default Home;
