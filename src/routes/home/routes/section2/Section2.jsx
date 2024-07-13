import Container from "../../../../utils/container/Container";
import { useTranslation } from "react-i18next";
import "./Section2.css";

const Section2 = () => {
    const { t } = useTranslation();
    return (
        <section className="section2">
            <Container>
                <div className="section2__content">
                    <div className="section2__text">
                        <h2>{t("Adidas Men Running Sneakers")}</h2>
                        <h3>
                            {t(
                                "Performance and design. Taken right to the edge."
                            )}
                        </h3>
                        <button>{t("SHOP NOW")}</button>
                    </div>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/af3b/d991/ca08635dbdf9c0400408400496803559?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGM6EzJ6WFG2ZatODoWWv6f1NsFLvsilmgv~dIBAVivMM4w6JpfUVqXEl3XgvG3QMvnqIsM0C82geJ4yMatGTBkuylu0WhQvI87Xn~KCaqdZeYviuKGa-xznKM1XNdzMR-7FyaD0uZiOjE9f35XWRZpaAJNXrcd3TxluMw0y76VNS-5BmS8Kqbmo6~kr3OTuiI2SmFfqDfz83Ik3ZQ622Pg0ZYc1To1mQoLuZh5DkV7ofQrfqs~mNL-d7PJLztODYtIs0IP0cJn0-pZAZ~FYdBiuHfnSTQ7qh3Hm75WZaDNtGO5PavsjqPk2IO570zUCx1YkBuG0ClmevcllJxtPlQ__"
                        alt=""
                    />
                </div>
            </Container>
        </section>
    );
};

export default Section2;
