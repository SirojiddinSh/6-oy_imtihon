import { HiOutlineUser } from "react-icons/hi";
import { GrCart } from "react-icons/gr";
import "./Nav.css";
import Container from "../../utils/container/Container";
import { useTranslation } from "react-i18next";
import i18n from "../../locales/i18next";
import { NavLink } from "react-router-dom";
import Icon from "../../utils/icon/Icon";

const Nav = () => {
    let { t } = useTranslation();
    let data = useTranslation();

    return (
        <nav>
            <div className="nav_hr">
                <Container>
                    <div className="nav">
                        <div className="nav__div">
                            <select
                                className="language-select"
                                defaultValue={data.i18n.language}
                                onChange={(e) =>
                                    i18n.changeLanguage(e.target.value)
                                }
                            >
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                            <NavLink to="/register">Register</NavLink>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="nav__ul">
                    <ul>
                        {/* <li>
                                <NavLink to="/">Home</NavLink>
                            </li> */}
                        <li className="profile">
                            <NavLink to="/profile">
                                <HiOutlineUser /> My profile
                            </NavLink>
                        </li>
                        <li className="blue_icon">
                            <NavLink to="/e-comm">
                                <Icon />
                                E-Comm
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">
                                <GrCart />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default Nav;
