import { HiOutlineUser } from "react-icons/hi";
import { GrCart } from "react-icons/gr";
import "./Nav.css";
import Container from "../../utils/container/Container";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Icon from "../../utils/icon/Icon";
import { useSelector } from "react-redux";

const Nav = () => {
    const { t, i18n } = useTranslation();
    const length = useSelector((state) => state.cart?.length || 0);

    return (
        <nav>
            <div className="nav_hr">
                <Container>
                    <div className="nav">
                        <div className="nav__div">
                            <select
                                className="language-select"
                                defaultValue={i18n.language}
                                onChange={(e) =>
                                    i18n.changeLanguage(e.target.value)
                                }
                            >
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                            <NavLink to="/register">{t("Register")}</NavLink>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="nav__ul">
                    <ul>
                        <li className="profile">
                            <NavLink to="/">
                                <HiOutlineUser /> {t("My profile")}
                            </NavLink>
                        </li>
                        <li className="blue_icon">
                            <NavLink to="/e-comm">
                                <Icon />
                                E-Comm
                            </NavLink>
                        </li>
                        <li className="cart">
                            <NavLink to="/cart">
                                <GrCart className="icon" />
                                <span>{length}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default Nav;
