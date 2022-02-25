import {
  Container,
  Heading,
  VStack,
  Text,
  HStack,
  Select,
  Wrap,
  WrapItem,
  Box,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { countries, currencies, pricingPlans } from "../data";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import DetailsModal from "./DetailsModal";
import { formState, priceState, isFormStateFilled } from "../recoil";

const Pricing = () => {
  const [formData, setFormData] = useRecoilState(formState);
  const [pricingPlan, setPricingPlan] = useRecoilState(priceState);
  const showPrices = useRecoilValue(isFormStateFilled);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container bg="rgb(248, 248, 251);" maxWidth="full" p="4" minH="100vh">
      <VStack mb="8">
        <Heading as="p" maxW="sm" mb="6">
          Sendchamp Pricing
        </Heading>
        <Text color="rgb(153, 153, 153)" align="center" maxW="sm">
          Start with our competitive pay-as-you-go pricing. For deeper discounts
          on committed spend as you scale, talk with our sales team.
        </Text>
      </VStack>
      <HStack maxW="lg" m="auto" spacing="32px">
        <Select
          placeholder="Select Country"
          size="lg"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </Select>
        <Select
          placeholder="Select Currency"
          size="lg"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
        >
          {currencies.map((currency) => (
            <option key={currency.cc} value={currency.cc}>
              {currency.cc}
            </option>
          ))}
        </Select>
      </HStack>
      {!showPrices && (
        <VStack marginY="8">
          <Text color="gray.800" maxW="sm">
            Select Country and Currency to get Pricing
          </Text>
        </VStack>
      )}
      {showPrices && (
        <Wrap maxW={["100%", "80%"]} marginX="auto" marginY="8" spacing="30px">
          {pricingPlans.map((item) => (
            <WrapItem w={["90%", "30%"]} key={item.header}>
              <Box
                w="100%"
                h="280px"
                bg="white"
                border="1px solid rgb(0, 129, 255)"
                borderRadius="15px"
                py="4"
                px="4"
                pos="relative"
              >
                <HStack>
                  <Box
                    h="35px"
                    bg="rgba(0, 128, 252, 0.3)"
                    p="10px"
                    borderRadius="10px"
                  >
                    {item.icon}
                  </Box>
                  <Heading as="p" mb="0" size="5" fontWeight="bold">
                    {item.header}
                  </Heading>
                </HStack>
                <HStack
                  marginTop="4"
                  w="full"
                  alignItems="start"
                  justifyContent="space-between"
                >
                  <Text color="gray.800" fontWeight="bold">
                    {item.sendKey}
                  </Text>
                  <VStack alignItems="start">
                    <Text color="gray.800">Starts at</Text>
                    <Text
                      color="gray.800"
                      style={{ marginTop: 0 }}
                      marginTop="-1"
                      fontWeight="bold"
                    >
                      {formData.currency} 0.00184
                    </Text>
                    <Text
                      style={{ marginTop: 0 }}
                      color="gray.800"
                      marginTop="-1"
                      fontWeight="bold"
                    >
                      {item.value}
                    </Text>
                  </VStack>
                </HStack>
                {item.receiveKey && (
                  <HStack
                    marginTop="5"
                    w="full"
                    alignItems="start"
                    justifyContent="space-between"
                  >
                    <Text color="gray.800" fontWeight="bold">
                      {item.receiveKey}
                    </Text>
                    <VStack alignItems="start">
                      <Text color="gray.800">Starts at</Text>
                      <Text
                        color="gray.800"
                        style={{ marginTop: 0 }}
                        marginTop="1"
                        fontWeight="bold"
                      >
                        {formData.currency} 0.00184
                      </Text>
                      <Text
                        color="gray.800"
                        style={{ marginTop: 0 }}
                        marginTop="1"
                        fontWeight="bold"
                      >
                        {item.value}
                      </Text>
                    </VStack>
                  </HStack>
                )}
                <Link
                  marginTop="4"
                  cursor="pointer"
                  pos="absolute"
                  bottom="2%"
                  right="3%"
                  color="#0080FC"
                  onClick={() => {
                    setPricingPlan(item);
                    onOpen();
                  }}
                >
                  <Text display="inline">See more details</Text>{" "}
                  <ArrowForwardIcon />
                </Link>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      )}
      <DetailsModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Pricing;
