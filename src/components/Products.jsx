import axios from "axios";
import React, { useEffect, useState } from "react";
import ApiProductsDetails from "./ApiProductsDetails";
import ProductsCateogory from "./ProductsCateogory";
import { useSelector } from "react-redux";

const Products = () => {
  const [shopItems, setShopItems] = useState([]);
  const selectedCategory = useSelector((state) => state.cate.selectedCategory);

  const getProductsFromApi = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setShopItems(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const filteredShopItems = shopItems.filter((item) => {
    return selectedCategory === "all" || item.category === selectedCategory;
  });

  useEffect(() => {
    getProductsFromApi();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-center "></div>
      <ProductsCateogory />
      <ApiProductsDetails shopItems={filteredShopItems} />
    </div>
  );
};

export default Products;
