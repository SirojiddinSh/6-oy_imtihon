import "./Register.css";
import Button from "../../../utils/button/Button";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Register = () => {
    let { t } = useTranslation();

    let [state, dispatch] = useContext(AppContext);
    let [passwordErrors, setPasswordErrors] = useState({
        uppercase: true,
        lovercase: true,
        length: true,
    });

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

    useEffect(() => {
        setPasswordErrors({
            lovercase: !/[a-z]/.test(password),
            uppercase: !/[A-Z]/.test(password),
            length: password.length >= 8 ? false : true,
        });
    }, [password]);

    useEffect(() => {
        setUsernameErrors({
            capitalLetter: !/^[A-Z]/.test(username),
            length: username.trim().length >= 0 ? false : true,
        });
    }, [username]);

    let handleRegister = async (e) => {
        e.preventDefault();

        try {
            if (
                Object.values(passwordErrors).every((x) => x === false) &&
                Object.values(usernameErrors).every((x) => x === false)
            ) {
                {
                    dispatch({ type: "LOADING", loading: true });

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
                }
            } else {
                throw new Error("Xatolik yuz berdi");
            }
        } catch (err) {
            if (err.response) {
                toast.error(err.response.status);
            } else {
                toast.error(err.status);
            }
        } finally {
            dispatch({ type: "LOADING", loading: false });
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
                        <ul>
                            {usernameErrors.capitalLetter && (
                                <li>
                                    {t(
                                        "First character should be uppercase letter"
                                    )}
                                </li>
                            )}
                            {usernameErrors.length && (
                                <li>At least 3 characters</li>
                            )}
                        </ul>
                        <input
                            type="password"
                            placeholder={t("Password")}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <ul>
                            {passwordErrors.uppercase && (
                                <li>{t("At least one uppercase letter")}</li>
                            )}
                            {passwordErrors.lovercase && (
                                <li>{t("At least one lovercase letter")}</li>
                            )}
                            {passwordErrors.length && (
                                <li>{t("At least 8 characters")}</li>
                            )}
                        </ul>
                        <input
                            type="email"
                            placeholder="email@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="phone"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="is Admin?"
                            value={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Street"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Apartment"
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
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                        <Button type="submit" loading={state.loading}>
                            {t("register")}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
