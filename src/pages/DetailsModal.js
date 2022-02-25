import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  HStack,
  Box,
  Heading,
} from "@chakra-ui/react";
import { priceState } from "../recoil";
import { useRecoilState } from "recoil";
const DetailsModal = ({ isOpen, onClose }) => {
  const [pricingPlan] = useRecoilState(priceState);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="46rem">
          <ModalBody p="8">
            <HStack>
              <Box
                h="35px"
                bg="rgba(0, 128, 252, 0.3)"
                p="10px"
                borderRadius="10px"
              >
                {pricingPlan.icon}
              </Box>
              <Heading as="p" mb="0" size="5" fontWeight="bold">
                {pricingPlan.header}
              </Heading>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailsModal;
