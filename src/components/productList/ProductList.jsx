import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <section className="pl" id="portfolio">
      <div className="pl-texts">
        <h1 className="pl-title">Beautiful & inspirational</h1>
        <p className="pl-desc">
          I have had the opportunity to work with great clients on a variety
          of projects. Here are a few examples of websites I have developed.
          Yours could be the next one.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
