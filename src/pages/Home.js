import { passwordgen } from "../images"
import React, { useEffect, useState } from "react";
import portfolioData from "../utils/portfolio.json";

import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import MyIntro from "../components/MyIntro";
import Wrapper from "../components/Wrapper";

const Home = () => {

    const [portfolio, setPortfolio] =useState(portfolioData)
  console.log(portfolio)

    return (
        <Wrapper>
             <MyIntro />
             <CardContainer>
                 {portfolio.map( (project) => <Card title={project.title} description={project.description} site={project.site} github={project.github} image={project.image}/>)}
             </CardContainer>
        </Wrapper>
    );
  };
  
  export default Home;