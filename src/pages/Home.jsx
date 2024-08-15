import { Container } from "@chakra-ui/react";
import Slider from "react-slick";
import SliderItem from "../components/layout/SliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/layout/Footer";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,

    autoplaySpeed: 9000,
  };
  return (
    <Container
      position="relative"
      display="flex"
      alignItems="center"
      flexDir="column"
      height="100dvh"
      minW="100%"
      overflow="hidden"
      py="50px">
      <Slider {...settings}>
        <SliderItem />
        <SliderItem type="dois" />
      </Slider>

      <Footer />
    </Container>
  );
}

export default Home;
