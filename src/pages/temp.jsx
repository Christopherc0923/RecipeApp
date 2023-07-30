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

return (
  <Wrapper>
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} />
    </div>
    <Info>
      <Button>Instructions</Button>
      <Button>Ingredients</Button>
    </Info>
  </Wrapper>
);

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

const Button = styled.button`{
    padding: 1rem 2rem;
    color: #313131
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
  }
  `;

const Info = styled.div`
   {
    margin-left: 10rem;
  }
`;
