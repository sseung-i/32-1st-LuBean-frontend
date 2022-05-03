import { useNavigate } from "react-router-dom";
import Info from "../Info/Info";
import Tag from "../Tag/Tag";
import "./ProductsList.scss";

const ProductsList = ({ data }) => {
  const navigate = useNavigate();

  const productClick = id => {
    navigate(`${process.env.PUBLIC_URL}/detail/${id}`);
  };

  return (
    <article className="productsList">
      <ul className="productWrap">
        {data.map(({ id, name, country_name, weight, price, tag, imgUrl }) => (
          <li key={id}>
            <div className="thumbnail" onClick={() => productClick(id)}>
              <img className="thumb" alt={name} src={imgUrl[0]} />
              <img className="thumbHover" alt={name} src={imgUrl[1]} />
            </div>
            {tag && <Tag tag={tag} />}
            <Info
              id={id}
              name={name}
              weight={weight}
              country={country_name}
              isTag={tag.length}
              productClick={productClick}
            />
            <p className="cost">
              <span>₩ </span>
              {price.toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProductsList;
