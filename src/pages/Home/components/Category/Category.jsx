import React from "react";
import Container from "../../../../components/Container/Container";
import CategoryItem from "./CategoryItem";
import MoneyIcon from "../../../../assets/images/money-icon.png";
import GraphIcon from "../../../../assets/images/graph-icon.png";
import CardIcon from "../../../../assets/images/card-icon.png";
import Fade from "react-reveal/Fade";

const Category = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col sm:flex-row space-y-[48px] sm:space-y-0 space-x-0 sm:space-x-[30px]">
          <div className="flex-1">
            <Fade>
              <CategoryItem
                imgSrc={MoneyIcon}
                title="Personal Finances"
                description="Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account."
              />
            </Fade>
          </div>
          <div className="flex-1">
            <Fade>
              <CategoryItem
                imgSrc={GraphIcon}
                title="Banking & Coverage"
                description="With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."
              />
            </Fade>
          </div>
          <div className="flex-1">
            <Fade>
              <CategoryItem
                imgSrc={CardIcon}
                title="Consumer Payments"
                description="It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."
              />
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Category;
