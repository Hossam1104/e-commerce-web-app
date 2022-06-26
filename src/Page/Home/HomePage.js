import React from "react";
import NavBarLogin from "../../Components/Utility/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import Footer from "../../Components/Utility/Footer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavBarLogin />

      <Slider />

      <HomeCategory />

      <CardProductsContainer
        title="الاكثر مبيعا"
        btnTitle="المزيد"
        pathText="/products"
      />

      <DiscountSection />

      <CardProductsContainer
        title="احدث الازياء"
        btnTitle="المزيد"
        pathText="/products"
      />

      <BrandFeatured title="اشهر الماركات" btnTitle="المزيد" />

      <Footer />
    </div>
  );
};

export default HomePage;
