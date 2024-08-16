import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Loading() {
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      navigate("/opt", { state: { message: "Registo efectuado com sucesso" } });
    }, 9000);
  }, [navigate]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}>
      <Container
        position="relative"
        display="flex"
        gap={10}
        alignItems="center"
        flexDir="column"
        height="100dvh"
        minW="100%"
        px="20px"
        overflow="hidden"
        py="50px">
        <Spinner color="red.500" />
      </Container>
    </motion.div>
  );
}
