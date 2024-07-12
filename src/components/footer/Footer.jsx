import "./Footer.css";
import Container from "../../utils/container/Container";
import Icon from "../../utils/icon/Icon";

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer__container">
                    <div>
                        <div>
                            <Icon />
                            <h4 className="footer__h4">E-Comm</h4>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the <br />{" "}
                            printing and typesetting industry. Lorem <br />{" "}
                            Ipsum has been the industry's standard <br /> dummy
                            text ever.Since the 1500s, when <br /> an unknown
                            printer.
                        </p>
                    </div>
                    <div className="footer__ul">
                        <h4 className="footer__h42">Follow Us</h4>
                        <p>
                            Since the 1500s, when an unknown <br /> printer took
                            a galley of type and <br /> scrambled.
                        </p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/">
                                    <button>
                                        <img
                                            src="https://icones.pro/wp-content/uploads/2021/02/facebook-icone-f.png"
                                            alt=""
                                        />
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/?lang=ru">
                                    <button>
                                        <img
                                            src="https://www.freeiconspng.com/thumbs/logo-twitter-png/logo-twitter-transparent-background-10.png"
                                            alt=""
                                        />
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="footer__h42">Contact Us</h4>
                        <p>
                            E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow
                            D04 89GR
                        </p>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                    <ul>
                        <li>
                            <img
                                src="https://www.paymentscardsandmobile.com/wp-content/uploads/2013/10/My-WU-prepaid-card.jpg"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://www.pngall.com/wp-content/uploads/2016/07/Mastercard-Download-PNG.png"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://neocurrency.com/wp-content/uploads/2024/03/Yi5i2xAqiQouV121i1tz12l38cndvabIhrtogDao-2.jpeg"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
