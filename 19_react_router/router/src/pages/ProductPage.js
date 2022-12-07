import ProductList from "./ProductList";

const ProductPage = (props) => {
  console.log(props); //products[...]
  const { products } = props;

  return (
    <div className="ProductPage">
      <h1>상품페이지</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
