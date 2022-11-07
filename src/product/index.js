import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  useEffect(function () {
    axios
      .get(
        "https://870c5782-6ad1-45fb-93d8-b826234c9c37.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);
  console.log(product);
  return <h1>상품 상세 페이지 {id} 상품</h1>;
}

export default ProductPage;
