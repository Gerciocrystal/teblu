import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
const ButtomField = ({ text, loading }) => {
  return (
    <Button
      height="49px"
      type="submit"
      colorScheme="orange"
      isLoading={loading}>
      {text}
    </Button>
  );
};
ButtomField.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.boolean,
};
export default ButtomField;
