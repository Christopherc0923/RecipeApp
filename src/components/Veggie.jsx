import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const calculatePageSize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1000) {
      return 3;
    } else {
      return 1;
    }
  };

  const [pageSize, setPageSize] = useState(calculatePageSize());

  const splideOptions = {
    perPage: pageSize,
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "5rem",
  };

  {
    /* Triggers the function to determine pagesize using useEffect*/
  }
  useEffect(() => {
    const handleResize = () => {
      const newPageSize = calculatePageSize();
      setPageSize(newPageSize);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [veggie, setVeggie] = useState([]);
  {
    /* Triggers the getVeggie function when the page loads using useEffect*/
  }
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    {
      /* Add variable that stores the recent API call, to reduce API request usage*/
    }
    const checkLocal = localStorage.getItem("veggie");

    {
      /* If the localstorage contains the recipes, then setVeggie to it. Else run the api request*/
    }
    if (checkLocal) {
      setVeggie(JSON.parse(checkLocal));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      console.log(data);
      setVeggie(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
    }
  };

  return (
    <div className="m-2">
      <Wrapper>
        <h2 className="text-center m-3">Veggie Recipes</h2>
        <Splide options={splideOptions}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide>
                <Card className="zoom-effect">
                  <Link to={"recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0 rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

export default Veggie;
