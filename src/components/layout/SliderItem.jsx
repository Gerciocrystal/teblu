import { Box, Image, Text, VStack } from "@chakra-ui/react";
import agil_photo from "../../assets/img/agail_without.png";
import AgilListItem from "../misselation/AgilListItem";
import PropTypes from "prop-types";
const SliderItem = ({ type }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      gap={6}
      alignItems="center"
      alignContent="center">
      <Image
        objectFit="cover"
        src={agil_photo}
        width="90px"
        height="auto"
        alt="ilustracao agil no fundo branco e preenchida com a cor laranja "
      />
      <Text fontWeight="bold">Lorem inoum is Simply</Text>
      <Text textAlign="center" color="textFont">
        É com satisfação que te informamos que foste selecionado para avançar à
        próxima fase do nosso processo de contratação na Tablutech. Nesta etapa,
        iremos avaliar as tuas habilidades em desenvolvimento Web, com foco na
        área de FrontEnd.
      </Text>

      {type && (
        <VStack spacing={1} alignItems="flex-start" alignSelf="flex-start">
          <AgilListItem />
          <AgilListItem />
          <AgilListItem />
        </VStack>
      )}
    </Box>
  );
};
SliderItem.propTypes = {
  type: PropTypes.string,
};
export default SliderItem;
