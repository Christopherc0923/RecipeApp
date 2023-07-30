import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("ingredients");

  let params = useParams();

  const fetchDetails = async () => {
    console.log(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detail = await data.json();
    setDetails(detail);
  };

  useEffect(() => {
    fetchDetails(params.name);
    console.log(params);
  }, [params.name]);

  const StyleButton = {
    padding: "1rem 2rem",
    color: "#313131",
    background: "white",
    border: "2px solid black",
    marginRight: "2rem",
    fontWeight: "600",
  };

  return (
    <div>
      <Wrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} />
        </div>
        <Info>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
            style={StyleButton}
          >
            Instructions
          </button>
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
            style={StyleButton}
          >
            Ingredients
          </button>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </Info>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
  }
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
