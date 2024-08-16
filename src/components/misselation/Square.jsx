import { Box, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import agil_photo from "../../assets/img/agail_without.png";
import { useNavigate } from "react-router-dom";
function Square({ index }) {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate("/data")}
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={7}
      gap={7}
      flexDir="column"
      background={index % 2 === 0 ? "#FFEEE5" : "#F4F4F4"}
      borderRadius="lg">
      <Image src={agil_photo} alt="foto" boxSize="90px" height="auto" />
      <Text color="textFont">agil {index}</Text>
    </Box>
  );
}

Square.propTypes = {
  index: PropTypes.number,
};

export default Square;
