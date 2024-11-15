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
  const datas = [
    { name: "Tratak dan Plafon", img: "/assets/tratak.jpg" },
    { name: "Sound System", img: "/assets/sound.jpg" },
    { name: "Set Prasmanan", img: "/assets/prasmanan.jpg" },
  ];

  return (
    <Flex
      as="section"
      id="product"
      sx={sectionStyle}
      alignItems="center"
      direction="column"
    >
      <Heading p={2} size={{ base: "sm", md: "md" }} color="blue.400">
        Produk Kami
      </Heading>
      <Heading p={2}>Apa yang kami sewakan?</Heading>
      <Box p={2} w={{ md: "500px", lg: "750px" }}>
        <Text align="center">
          Kami menyediakan sound system, tratak, plafon, kursi meja, hingga set
          prasmanan untuk memenuhi kebutuhan hajatanmu.
        </Text>
      </Box>
      <Flex mt={6} gap={4} direction={{ base: "column", md: "row" }}>
        {datas.map((el, i) => (
          <Card key={i}>
            <CardBody>
              <Image w="200px" src={el.img} alt={el.name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{el.name}</Heading>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}
