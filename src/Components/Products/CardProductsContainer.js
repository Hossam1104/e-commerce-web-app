import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import ProductCard from "./ProductCard";

const CardProductsComponents = ({ title, btnTitle, pathText }) => {
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default CardProductsComponents;
