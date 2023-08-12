import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SearchCusine() {
  const [search, setSearch] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearch(recipes.results);
    console.log(search);
  };

  // Needs to be the same as the route ex. ".input"
  useEffect(() => {
    getSearched(params.input);
    console.log(params);
  }, [params.input]);

  return (
    <Grid className="container">
      {search.map((item) => {
        return (
          <Card className="zoom-effect" key={item.id}>
            <Link
              className="text-decoration-none text-dark"
              to={"../../recipe/" + item.id}
            >
              <img src={item.image} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchCusine;
