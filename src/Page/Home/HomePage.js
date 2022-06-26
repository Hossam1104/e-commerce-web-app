import React from "react";
import NavBarLogin from "../../Components/Utility/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsComponents from "../../Components/Products/CardProductsComponents";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
      <CardProductsComponents
        title="الاكثر مبيعا"
        btnTitle="المزيد"
        pathText="/products"
      />
      <CardProductsComponents
        title="احدث الازياء"
        btnTitle="المزيد"
        pathText="/products"
      />
    </div>
  );
};

export default HomePage;
