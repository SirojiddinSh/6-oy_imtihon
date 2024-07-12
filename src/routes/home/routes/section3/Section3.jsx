import Container from "../../../../utils/container/Container";
import car from "../../../../images/section3-car.png";
import dollar from "../../../../images/section3-dollar.png";
import user from "../../../../images/section3-user.png";

import "./Section3.css";

const Section3 = () => {
    return (
        <section className="section3">
            <Container>
                <div className="section3__container">
                    <div className="section3__content">
                        <img className="car" src={car} alt="" />
                        <h3>FREE SHIPPING</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </div>
                    <div className="section3__content">
                        <img className="dollar" src={dollar} alt="" />
                        <h3>100% REFUND</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </div>
                    <div className="section3__content">
                        <img className="user" src={user} alt="" />
                        <h3>SUPPORT 24/7</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Section3;
