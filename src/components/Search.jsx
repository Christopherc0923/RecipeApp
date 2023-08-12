import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form");
    console.log(input);
    navigate("/searchcuisine/" + input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submitHandler(e);
    }
  };

  return (
    <FormStyle className="container p-3" onSubmit={submitHandler}>
      <div className="container w-75">
        <FaSearch></FaSearch>

        <input
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.div`
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 1rem 4rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }

  svg {
    position: absolute;
    color: white;
    top: 35%;
    left: 2.5%;
    tranform: translate(100%, -50%);
    z-index: 10;
  }

  div {
    position: relative;
    width: 100%;
  }
`;

export default Search;
