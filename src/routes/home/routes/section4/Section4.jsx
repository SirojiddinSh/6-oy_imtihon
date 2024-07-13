import "./Section4.css";
import Container from "../../../../utils/container/Container";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

let Section4 = () => {
    let { t } = useTranslation();
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
                    .slice(0, 3);
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
        <section className="section4">
            <Container>
                <h2 className="section4__title">
                    {t("MOST TOP RATED PRODUCTS")}
                </h2>
                <div className="section4__cards">
                    {topRatedProducts.map((product) => (
                        <div className="section4__card" key={product.id}>
                            <img src={product.image} alt="" />
                            <div className="section4__card-text">
                                <h3>{product.name}</h3>
                                <div className="product-rating2">
                                    {renderStars(product.rating)}
                                </div>
                                <div className="section4__card-text-price">
                                    <span>${product.price}</span>
                                    <del>${product.price * 2}</del>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Section4;
