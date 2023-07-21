import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Recipe() {
  const [details, setDetails] = useState({});

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

  return <div>{params.name}</div>;
}

export default Recipe;
