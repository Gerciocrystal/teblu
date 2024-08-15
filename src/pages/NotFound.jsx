import { Button, Container, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import background from "../assets/img/404.png";
import { motion } from "framer-motion";
const NotFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
        >
            <Container
                display="flex"
                minW="100%"

                centerContent
                alignContent="center"
                height="100dvh"
                flexDir="column"
            >
                <Image src={background} boxSize={{ base: "320px", md: "520px" }} />
                <Text>Oops! página não encontrada</Text>
                <Button colorScheme="blue">
                    <Link to="/"> Voltar</Link>
                </Button>
            </Container>
        </motion.div>
    );
};
export default NotFound;
