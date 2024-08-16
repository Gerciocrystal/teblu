import { motion } from "framer-motion";
import { Container, InputGroup, Text, useDisclosure } from "@chakra-ui/react";
import Footer from "../components/layout/Footer";
import OptInput from "../components/form/OptInput";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confirmation from "../components/modal/Confirmation";

function OTP() {
  const [tempoRestante, setTempoRestante] = useState(60);
  const location = useLocation();
  const [numbers, setNumbers] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tempoRestante > 0) {
        setTempoRestante(tempoRestante - 1);
      } else {
        clearInterval(intervalo);
        setTempoRestante(60);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tempoRestante]);

  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;
  useEffect(() => {
    if (numbers.four && numbers.three && numbers.two && numbers.one) {
      navigate("/loader");
    }
    if (location?.state?.message == "Registo efectuado com sucesso") {
      onOpen();
    }
  }, [location, navigate, numbers, onOpen]);
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
        minW="100%"
        px="30px"
        overflow="hidden"
        gap={4}
        py="50px">
        <Text textAlign="center">
          Para terminar o seu registo, digite o código de confirmação recebido{" "}
          <span style={{ fontWeight: "bold" }}>123456789</span>
        </Text>
        <InputGroup
          size="lg"
          display="flex"
          justifyContent="space-between"
          w="100%">
          <OptInput setNumbers={setNumbers} name="one" />
          <OptInput setNumbers={setNumbers} name="two" />
          <OptInput setNumbers={setNumbers} name="three" />
          <OptInput setNumbers={setNumbers} name="four" />
        </InputGroup>
        <Text>
          {minutos}:{segundos}
        </Text>
        <Text color="lightOrange" fontSize="sm">
          Reenviar coido
        </Text>
        <Footer />
      </Container>
      {isOpen && <Confirmation isOpen={isOpen} onClose={onClose} />}
    </motion.div>
  );
}

export default OTP;
