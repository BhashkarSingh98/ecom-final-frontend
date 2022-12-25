import { useEffect, useState } from "react";
import styled from "styled-components";
//import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import Navbar from "./Navbar";
import Announcement from "./Announcement";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-left: 90px;
  margin-bottom: 40px;

`;

const Women = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? ` https://enchanting-ray-vest.cyclic.app/api/products?category=${cat}`
            :  "https://enchanting-ray-vest.cyclic.app/api/products"
           
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
    <Announcement/>
    <Navbar/>
    <Announcement/>

    <Title>WOMEN</Title>

    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
        .filter((elem) => elem.gender === "female")
        .slice(0, 16)
        .map((item) => <Product item={item} key={item.id} />)}
    </Container>
        </>
  );
};

  export default Women;
  