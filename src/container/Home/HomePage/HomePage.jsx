import React from "react";
import HeroBlock from "../HeroBlock/HeroBlock";
import ProdcuctItems from "../ProductItems/ProductItems";
import PromoBlock from "../PromoBlock/PromoBlock";
import Advantages from "../Advantages/Advantages";

const HomePage = () => {
  return (
    <div>
      <HeroBlock />
      <Advantages />
      <ProdcuctItems />
      <PromoBlock />
    </div>
  );
};

export default HomePage;
