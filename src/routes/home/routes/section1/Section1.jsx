import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Section1.css";
import Container from "../../../../utils/container/Container";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import blueButton from "../../../../images/blue-button.png";
import { Link } from "react-router-dom";

let Section1 = () => {
    let navigate = useNavigate();

    let fetchProducts = async (page, limit) => {
        try {
            let response = await fetch(
                `https://backend-e-commerce-production.up.railway.app/api/v1/products?page=${page}&limit=${limit}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            let data = await response.json();
            return data;
        } catch (error) {
            console.error(error.message);
            throw new Error(error.message);
        }
    };

    let [products, setProducts] = useState([]);
    let [page, setPage] = useState(1);
    let [limit] = useState(10);
    let [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        let fetchInitialProducts = async () => {
            try {
                let data = await fetchProducts(page, limit);
                setProducts(data);
                setHasMore(data.length === limit);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchInitialProducts();
    }, [page, limit]);

    let loadMoreProducts = async () => {
        try {
            let nextPage = page + 1;
            let data = await fetchProducts(nextPage, limit);
            setProducts((prevProducts) => [...prevProducts, ...data]);
            setPage(nextPage);
            setHasMore(data.length === limit);
        } catch (error) {
            console.error(error.message);
        }
    };

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

    let handleHeartClick = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId
                    ? { ...product, liked: !product.liked }
                    : product
            )
        );
    };

    return (
        <section className="section1">
            <Container>
                <h2 className="section1__title">ALL PRODUCTS</h2>
                <div className="section1__cards">
                    {products.map((product) => (
                        <div className="section1__card" key={product.id}>
                            <div className="section1__card-overlay">
                                <img src={product.image} alt="" />
                                <div className="opacity">
                                    <div className="section1__card-button1">
                                        {product.liked ? (
                                            <AiFillHeart
                                                className="heart-icon filled"
                                                onClick={() =>
                                                    handleHeartClick(product.id)
                                                }
                                            />
                                        ) : (
                                            <AiOutlineHeart
                                                className="heart-icon"
                                                onClick={() =>
                                                    handleHeartClick(product.id)
                                                }
                                            />
                                        )}
                                    </div>
                                    <div className="section1__card-button2">
                                        <img src={blueButton} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="section1__card-text"
                                onClick={() =>
                                    navigate(`/single/${product.id}`)
                                }
                            >
                                <h3>{product.name}</h3>
                                <div className="product-rating">
                                    {renderStars(product.rating)}
                                </div>
                                <div className="section1__card-text-price">
                                    <span className="span1">
                                        ${product.price}
                                    </span>
                                    <del>${product.price * 2}</del>
                                    <span className="span2"> 24% off</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {hasMore && (
                    <button
                        onClick={loadMoreProducts}
                        className="load-more-button"
                    >
                        Load More
                    </button>
                )}
            </Container>
        </section>
    );
};

export default Section1;
