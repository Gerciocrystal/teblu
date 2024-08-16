import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/form/InputField";
import ButtomField from "../components/form/ButtomField";
import phone_icon from "../assets/img/phone.jpeg";
import email_icon from "../assets/img/mail.jpeg";
import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import agil_photo from "../assets/img/agail_without.png";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";
export default function Data() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const login = async (data) => {
    try {
      setLoading(true);
      console.log(data);
      navigate("/opt");
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
        gap={10}
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
          <Box w="100%" display="flex" flexDir="column" gap={7}>
            <InputField
              maxLength={30}
              required={true}
              name="fullName"
              placeholder="eggs: Jercio Bande"
              register={register}
              title="Nome completo"
              error={errors.fullName}
              type="text"
            />
            <InputField
              maxLength={70}
              required={true}
              name="date"
              placeholder="data de nascimento"
              register={register}
              title="Data de Nascimento"
              error={errors.date}
              type="date"
            />
            <Tabs orientation="vertical">
              <TabList>
                <Tab
                  border="1px solid #ACACAC"
                  borderColor="textFont"
                  borderRadius="base">
                  <Image src={phone_icon} />
                </Tab>
                <Tab
                  border="1px solid #ACACAC"
                  borderColor="textFont"
                  borderRadius="base">
                  <Image src={email_icon} />
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <InputField
                    maxLength={30}
                    name="phone"
                    placeholder="eggs: 840224546"
                    register={register}
                    title="Celular"
                    error={errors.phone}
                    type="text"
                  />
                </TabPanel>
                <TabPanel>
                  <InputField
                    maxLength={30}
                    name="email"
                    placeholder="eggs: gerciobande@gmail.com"
                    register={register}
                    title="Email"
                    error={errors.phone}
                    type="text"
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <HStack w="100%" justifyContent="space-between">
            <Button
              onClick={() => navigate("/main")}
              w="48%"
              height="47px"
              color="primary"
              border="1px solid "
              background="transparent"
              _hover={{
                background: "transparent",
              }}>
              Voltar
            </Button>
            <Box w="48%">
              <ButtomField text="Registrar" loading={loading} />
            </Box>
          </HStack>
        </form>
        <Footer />
      </Container>
    </motion.div>
  );
}
