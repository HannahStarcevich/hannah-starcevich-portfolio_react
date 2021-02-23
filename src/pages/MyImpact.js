import React from "react";

import CardContainer from "../components/CardContainer";
import MyImpactIntro from "../components/MyImpactIntro";
import Wrapper from "../components/Wrapper";

const MyImpact = () => {
    return (
        <Wrapper>
             <MyImpactIntro />
             <CardContainer />
        </Wrapper>
    );
  };
  
  export default MyImpact;