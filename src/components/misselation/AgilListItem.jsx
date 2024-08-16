import { Box, Image, Text } from "@chakra-ui/react";
import agil_photo from "../../assets/img/agail_without.png";
export default function AgilListItem() {
  return (
    <Box display="flex" gap={5} alignItems="center">
      <Image
        boxSize="30px"
        height="auto"
        src={agil_photo}
        alt="ilustracao agil no fundo branco e preenchida com a cor laranja "
      />
      <Text color="textFont"> AgilListItem</Text>
    </Box>
  );
}
