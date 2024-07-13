import { useState, useEffect } from "react";
import "./TopCards.css";

const TopCards = () => {
    let [topRatedProducts, setTopRatedProducts] = useState([]);

    useEffect(() => {
        let fetchProducts = async () => {
            try {
                let response = await fetch(
                    "https://backend-e-commerce-production.up.railway.app/api/v1/products"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                let data = await response.json();

                let sortedProducts = data
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 4);
                setTopRatedProducts(sortedProducts);
            } catch (error) {
                throw new Error(error.message);
            }
        };
        fetchProducts();
    }, []);

    let renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? "star filled" : "star"}>
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return (
        <div>
            <div className="top__product">
                <h2 className="top__product-title">MOST TOP RATED PRODUCTS</h2>
                <div className="cart__cards">
                    {topRatedProducts.map((product) => (
                        <div className="cart__card" key={product.id}>
                            <img src={product.image} alt="" />
                            <div className="TopCards__card-text">
                                <h3>{product.name}</h3>
                                <div className="product-rating2">
                                    {renderStars(product.rating)}
                                </div>
                                <div className="TopCards__card-text-price">
                                    <div>
                                        <span className="price">
                                            ${product.price}
                                        </span>
                                        <del>${product.price * 2}</del>
                                        <p>24% off</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCards;
