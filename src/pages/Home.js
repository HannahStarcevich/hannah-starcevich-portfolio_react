import React from "react";

import CardContainer from "../components/CardContainer";
import MyIntro from "../components/MyIntro";
import Wrapper from "../components/Wrapper";

const Home = () => {
    return (
        <Wrapper>
             <MyIntro />
             <CardContainer />
        </Wrapper>
    );
  };
  
  export default Home;