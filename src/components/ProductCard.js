import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { image, title, price } = product;

  return (
    <div className="productCard">
      <img src={image} alt={title} />
      <p className="title">{title}</p>
      <div className="action">
        <p>{Math.round(price)} ₹</p>

        <button className="add">Add To Cart</button>
      </div>
    </div>
  );
};
