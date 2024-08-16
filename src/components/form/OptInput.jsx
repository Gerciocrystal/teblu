import { Input } from "@chakra-ui/react";
import PropTypes from "prop-types";
const OptInput = ({ setNumbers, name }) => {
  return (
    <Input
      focusBorderColor="primary"
      placeholder="•"
      textAlign="center"
      type="number"
      onChange={(e) =>
        setNumbers((prev) => ({ ...prev, [name]: e.target.value }))
      }
      maxLength={1}
      w={20}
      h={20}
    />
  );
};
OptInput.propTypes = {
  setNumbers: PropTypes.func,
  name: PropTypes.string,
};

export default OptInput;
