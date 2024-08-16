import { Box, Container } from "@chakra-ui/react";
import SliderItem from "../components/layout/SliderItem";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import ButtomField from "../components/form/ButtomField";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";
import { useState } from "react";
function SlideWrapper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}>
      <Container
        position="relative"
        display="flex"
        alignItems="center"
        flexDir="column"
        height="100dvh"
        gap={10}
        overflow="hidden"
        py="50px">
        <Carousel showArrows={false} onChange={(e) => setActiveIndex(e.index)}>
          <SliderItem />
          <SliderItem type="dois" />
        </Carousel>

        {activeIndex && (
          <Box w="100%">
            <Link to="/login" my={6}>
              <ButtomField text="Iniciar" />
            </Link>
          </Box>
        )}
        <Footer />
      </Container>
    </motion.div>
  );
}

export default SlideWrapper;
