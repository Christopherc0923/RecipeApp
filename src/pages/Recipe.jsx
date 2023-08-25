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

    instructions: {
      background:
        activeTab === "instructions"
          ? "linear-gradient(to right, #f27121, #e94057)"
          : "#FFFFFF",
    },
    ingredients: {
      background:
        activeTab === "ingredients"
          ? "linear-gradient(to right, #f27121, #e94057)"
          : "#FFFFFF",
    },
  };

  return (
    <div>
      <Wrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} />
        </div>
        <Info>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <button
              className="ingredients"
              onClick={() => setActiveTab("ingredients")}
              style={Object.assign({}, StyleButton, StyleButton.ingredients)}
            >
              Instructions
            </button>
            <button
              className="instructions"
              onClick={() => setActiveTab("instructions")}
              style={Object.assign({}, StyleButton, StyleButton.instructions)}
            >
              Ingredients
            </button>
          </div>
          <div className="" style={{ margin: "2rem" }}>
            <h3
              dangerouslySetInnerHTML={{ __html: details.summary }}
              style={{
                display: activeTab === "instructions" ? "block" : "none",
                fontFamily: "sans-serif",
                fontSize: "1.5rem",
              }}
            ></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: details.instructions }}
              style={{
                display: activeTab === "ingredients" ? "block" : "none",
                fontFamily: "sans-serif",
                fontSize: "1.5rem",
              }}
            ></h3>
          </div>
        </Info>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin: 20px auto;
  min-height: 100vh;
  justify-items: center; /* Center items horizontally */
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  text-indent: 50px;

  img {
    max-width: 100%; /* This allows the image to scale down while maintaining aspect ratio */
  }

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

const Info = styled.div``;

export default Recipe;
