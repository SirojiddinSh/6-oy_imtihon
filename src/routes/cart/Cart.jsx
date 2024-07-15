import React, { useState, useEffect } from "react";
import Container from "../../utils/container/Container";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
    let product = useSelector((state) => state);
    let products = product.cart;

    // Mahsulotlar sonini saqlash uchun state
    const [quantities, setQuantities] = useState(
        products.map((p) => ({ id: p.id, qty: 1 }))
    );

    const handleIncrement = (id) => {
        setQuantities(
            quantities.map((q) => (q.id === id ? { ...q, qty: q.qty + 1 } : q))
        );
    };

    const handleDecrement = (id) => {
        setQuantities(
            quantities.map((q) =>
                q.id === id && q.qty > 1 ? { ...q, qty: q.qty - 1 } : q
            )
        );
    };

    const getQuantity = (id) => {
        const item = quantities.find((q) => q.id === id);
        return item ? item.qty : 1;
    };

    // Mahsulotlarning umumiy narxini hisoblash
    const getTotalPrice = () => {
        return products.reduce(
            (total, product) => total + product.price * getQuantity(product.id),
            0
        );
    };

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
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="product">
                                    <img
                                        src={product.image}
                                        alt=""
                                        width={100}
                                    />{" "}
                                    {product.name}
                                </td>
                                <td className="price">
                                    $
                                    {(
                                        product.price * getQuantity(product.id)
                                    ).toFixed(2)}
                                </td>
                                <td className="button__price">
                                    <div>
                                        <button
                                            className="button1"
                                            onClick={() =>
                                                handleDecrement(product.id)
                                            }
                                        >
                                            -
                                        </button>
                                        <span>{getQuantity(product.id)}</span>
                                        <button
                                            className="button2"
                                            onClick={() =>
                                                handleIncrement(product.id)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="unit_price">
                                    ${product.price.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="all_price">
                    <div className="all_price_container">
                        <div className="price">
                            <div>
                                <p>Subtotal</p>
                                <p>Shipping fee</p>
                                <p>Coupon</p>
                            </div>
                            <div>
                                <p>${getTotalPrice().toFixed(2)}</p>
                                <p>$20</p>
                                <p>No</p>
                            </div>
                        </div>
                        <div className="hr"></div>
                        <div className="total">
                            <p>Total</p>
                            <p>${(getTotalPrice() + 20).toFixed(2)}</p>
                        </div>
                        <button>Check out</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Cart;
