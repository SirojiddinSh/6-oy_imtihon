import "./Section1.css";
import Container from "../../../../utils/container/Container";
import { useState, useEffect } from "react";

let Section1 = () => {
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

    return (
        <section className="section1">
            <Container>
                <h2 className="section1__title">ALL PRODUCTS</h2>
                <div className="section1__cards">
                    {products.map((product) => (
                        <div className="section1__card" key={product.id}>
                            <img src={product.image} alt="" />
                            <div className="section1__card-text">
                                <h3>{product.name}</h3>
                                <p>{product.rating}</p>
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
