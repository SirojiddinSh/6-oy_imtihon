img: "https://s3-alpha-sig.figma.com/img/bb44/f22c/2fcbabaf010cb85f7ec0f7f985f2469b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dLS9bydccWyP5dzqFB2ZjkESSWl88iaoCUh9Yf-0j3GbQmQPhFgvn8qViMFqDs4qbqr4dOgzdHeBMI2t4BWkf361~OwdmknnCZwSRBKbzDI4RlhK6K114oxR6hl8S9rDiZT1ViwRlkZI~sL0fm1iGlpif84N-ZuzzGgfBDGRmv4EVdPP8Ce0bQp871WV8OyjcEt5Y-plGR-xm67MiZa8CHyHciHB2NMl3H5AzoRYT0DbS8C44r4dNiH8Pgo-oecbVADw8gZUsN1ySgCHHVXdYcfWN1gkWp~XZWCbe01ieJmUD6saG-2U66GxEdVb3mJv4A5anu-~ct1zysx~ZgXdag__";
import React from "react";
import BgImage from "./routes/bgImage/BgImage";
import Section1 from "./routes/section1/Section1";
import Section2 from "./routes/section2/Section2";
import Section3 from "./routes/section3/Section3";
import Section4 from "./routes/section4/Section4";

const Home = () => {
    return (
        <>
            <BgImage />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </>
    );
};

export default Home;
