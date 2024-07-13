import "./Register.css";
import Button from "../../../utils/button/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Register = () => {
    const { t } = useTranslation();

    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phone, setPhone] = useState("");
    let [isAdmin, setIsAdmin] = useState("");
    let [street, setStreet] = useState("");
    let [apartment, setApartment] = useState("");
    let [zip, setZip] = useState("");
    let [city, setCity] = useState("");
    let [country, setCountry] = useState("");

    let handleRegister = async (e) => {
        e.preventDefault();

        try {
            let response = await fetch(
                "https://backend-e-commerce-production.up.railway.app/api/v1/users/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: username,
                        email,
                        password,
                        phone,
                        isAdmin,
                        street,
                        apartment,
                        zip,
                        city,
                        country,
                    }),
                }
            );

            console.log(response);

            document.location.href = "/login";
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="auth">
            <div className="form-container">
                <div className="form-wrapper">
                    <h2 className="auth-title">{t("Register")}</h2>
                    <form className="auth-form" onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder={t("Username")}
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <ul></ul>
                        <input
                            type="password"
                            placeholder={t("Password")}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="email@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="phone"
                            placeholder={t("Phone")}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder={t("is Admin?")}
                            value={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder={t("Street")}
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder={t("Apartment")}
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Zip"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder={t("City")}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder={t("Country")}
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                        <Button type="submit">register</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
