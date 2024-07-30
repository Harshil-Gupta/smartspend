import "./HomePage.css";
import React from "react";
import Signup from "../../components/Signup/Signup";
import InvestmentChoice from "../../components/InvestmentChoice/InvestmentChoice";

const HomePage = () => {
  return (
    <div className="HomePage">
      <InvestmentChoice />
    </div>
  );
};

export default HomePage;