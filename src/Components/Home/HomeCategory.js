import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";

import Clothe from "../../images/clothe.png";
import Cat2 from "../../images/cat2.png";
import Laptop from "../../images/labtop.png";
import Sale from "../../images/sale.png";
import Pic from "../../images/pic.png";

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title="التصنيفات" btnTitle="المزيد" />
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="اجهزة منزلية" img={Clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={Cat2} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={Laptop} background="#0034FF" />
        <CategoryCard title="اجهزة منزلية" img={Sale} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={Clothe} background="#FF6262" />
        <CategoryCard title="اجهزة منزلية" img={Pic} background="#F4DBA4" />
      </Row>
    </Container>
  );
};

export default HomeCategory;
