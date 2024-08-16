import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
const ButtomField = ({ text, loading }) => {
  return (
    <Button
      w="100%"
      height="49px"
      type="submit"
      color="white"
      background="primary"
      isLoading={loading}
      _hover={{ background: "primary" }}>
      {text}
    </Button>
  );
};
ButtomField.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.boolean,
};
export default ButtomField;
