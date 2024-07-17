import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  SimpleGrid,
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
      <SimpleGrid
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        mt={6}
        gap={4}
      >
        <Card maxW="xs">
          <CardBody>
            <Image src="/susu.jpg" alt="Susu" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Susu</Heading>
              <Text color="blue.600" fontSize="2xl">
                $4500
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="xs">
          <CardBody>
            <Image src="/roti.jpg" alt="Roti" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Roti</Heading>
              <Text color="blue.600" fontSize="2xl">
                $5000
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="xs">
          <CardBody>
            <Image src="/keju.jpg" alt="Keju" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Keju</Heading>
              <Text color="blue.600" fontSize="2xl">
                $5500
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}
