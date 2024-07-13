import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import React from "react";
import TopCards from "./topCards/TopCards";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../../utils/container/Container";
import blueButton from "../../images/blue-button.png";
import "./Single.css";

const Single = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    `https://backend-e-commerce-production.up.railway.app/api/v1/products/${id}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch product");
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const renderStars = (rating) => {
        const stars = [];
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
        <>
            <div className="gray"></div>
            <Container>
                <div className="single">
                    <div className="single-product">
                        <img src={product.image} alt={product.name} />
                        <div className="single-product-info">
                            <h2>{product.name}</h2>
                            <div className="product-rating3">
                                <div>{renderStars(product.rating)}</div>
                                <span className="num-reviews">
                                    ({product.numReviews} reviews)
                                </span>
                                <span className="single-submit">
                                    Submit a review
                                </span>
                            </div>
                            <div className="product-price">
                                <div className="price">
                                    <span className="span1">
                                        ${product.price}
                                    </span>
                                    <del>${product.price * 2}</del>
                                    <span className="span2"> 24% off</span>
                                </div>
                                <div className="product-details">
                                    <div>
                                        <div>
                                            <p>Availability:</p>
                                            <p>Category:</p>
                                        </div>
                                        <div>
                                            <p>In stock: 10</p>
                                            <p>Accessories</p>
                                        </div>
                                    </div>
                                    <span>Free shipping</span>
                                </div>
                            </div>
                            <div className="product-addToCart">
                                <button className="blue">
                                    <img src={blueButton} alt="" />
                                    Add to cart
                                </button>
                                <button className="heart">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/2654/2654927.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                            <div className="product_btns">
                                <a href="https://www.facebook.com/">
                                    <button className="facebook">
                                        <img
                                            src="https://cdn.icon-icons.com/icons2/1294/PNG/512/2362129-facebook-fb-friends-social_85524.png"
                                            alt=""
                                        />
                                        Share on Facebook
                                    </button>
                                </a>
                                <a href="https://x.com/?lang=ru">
                                    <button className="twitter">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"
                                            alt=""
                                        />
                                        Share on Twitter
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="product_description">
                        <h3>Product Infomation</h3>
                        <p>{product.description}</p>
                        <p>{product.description}</p>
                        <p>{product.description}</p>
                    </div>
                </div>
                <TopCards />
            </Container>
        </>
    );
};

export default Single;
