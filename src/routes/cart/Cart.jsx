import React, { useState, useEffect } from "react";
import Container from "../../utils/container/Container";
import "./Cart.css";

const Cart = ({ productId }) => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    `https://backend-e-commerce-production.up.railway.app/api/v1/products/${1}`
                );
                const data = await response.json();
                setCartProducts([data]);
            } catch (error) {
                console.error(error.message);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    return (
        <div className="cart">
            <Container>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QTY</th>
                            <th>UNIT PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProducts.map((product) => (
                            <tr key={productId.id}>
                                <td>{productId.name}</td>
                                <td>${productId.price}</td>
                                <td>1</td>
                                <td>${productId.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </div>
    );
};

export default Cart;
