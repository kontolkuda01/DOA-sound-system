import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { sectionStyle } from "../lib";

export default function Products() {
  return (
    <Flex
      as="section"
      id="product"
      sx={sectionStyle}
      alignItems="center"
      direction="column"
    >
      <Heading p={2} size={{ base: "sm", md: "md" }} color="teal.400">
        Produk Kami
      </Heading>
      <Heading p={2}>Apa yang kami jual?</Heading>
      <Box p={2} w={{ md: "500px", lg: "750px" }}>
        <Text align="center">
          Kami menyediakan produk-produk asli yang berkualitas tinggi, tahan
          lama, dan keren untuk memenuhi kebutuhan sehari-hari.
        </Text>
      </Box>
      <Flex mt={6} gap={4} direction={{ base: "column", md: "row" }}>
        <Card>
          <CardBody>
            <Image w="200px" src="/susu.jpg" alt="Susu" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Susu</Heading>
              <Text color="blue.600" fontSize="2xl">
                $4500
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Image w="200px" src="/roti.jpg" alt="Roti" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Roti</Heading>
              <Text color="blue.600" fontSize="2xl">
                $5000
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Image w="200px" src="/keju.jpg" alt="Keju" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Keju</Heading>
              <Text color="blue.600" fontSize="2xl">
                $5500
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
}
