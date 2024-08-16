import PropTypes from "prop-types";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import { GrStatusGood } from "react-icons/gr";
import ButtomField from "../form/ButtomField";
function Confirmation({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Box
            display="flex"
            flexDir="column"
            p={5}
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            gap={4}>
            <Box background="primary" borderRadius="full">
              <GrStatusGood color="white" fontSize="4.8rem" />
            </Box>
            <Text>Registo efectuado com sucesso</Text>
            <ButtomField text="Feito" />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

Confirmation.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Confirmation;
