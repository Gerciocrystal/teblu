import { Box, Container, Image, Text } from "@chakra-ui/react";
import agil_photo from "../assets/img/agail_without.png";
import Footer from "../components/layout/Footer";
import { useForm } from "react-hook-form";
import InputField from "../components/form/InputField";
import ButtomField from "../components/form/ButtomField";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const login = async (data) => {
    try {
      setLoading(true);
      console.log(data);
      navigate("/main");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}>
      <Container
        position="relative"
        display="flex"
        gap={12}
        alignItems="center"
        flexDir="column"
        height="100dvh"
        minW="100%"
        px="20px"
        overflow="hidden"
        py="50px">
        <Image
          src={agil_photo}
          boxSize="110px"
          height="auto"
          alt="ilustracao agil no fundo branco e preenchida com a cor laranja "
        />
        <Text textAlign="center" color="textFont">
          É com satisfação que te informamos que foste selecionado para avançar
          à próxima fase do nosso processo de contratação na Tablutech.
        </Text>
        <form onSubmit={handleSubmit(login)} style={{ width: "100%" }}>
          <Box w="100%" display="flex" flexDir="column" gap={9}>
            <InputField
              maxLength={9}
              required={true}
              name="phone"
              placeholder="digite o seu celular"
              register={register}
              title="Celular"
              error={errors.username}
              type="text"
            />
            <Box display="flex" w="100%" flexDir="column" gap={2}>
              <InputField
                maxLength={20}
                required={true}
                name="password"
                placeholder="Senha"
                register={register}
                title="Password"
                error={errors.password}
                type="password"
              />
              <Text alignSelf="flex-end" color="primary" fontSize="sm">
                Recuperar senha
              </Text>
            </Box>
            <ButtomField text="Login" loading={loading} />
          </Box>
        </form>

        <Footer />
      </Container>
    </motion.div>
  );
}
