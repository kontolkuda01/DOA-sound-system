import {
  Container,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Highlight,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaBagShopping } from "react-icons/fa6";
import { sectionStyle } from "../lib";

export default function Hero() {
  return (
    <Center>
      <SimpleGrid
        as="section"
        id="#"
        columns={{ sm: 1, md: 2 }}
        spacing={4}
        sx={{ ...sectionStyle, maxW: "69rem", minH: "30rem" }}
      >
        <Flex direction="column" justify="center">
          <Heading my={2}>
            Pilihan Hebat dan Smart?
            <br />
            <Highlight
              query="Sigmart solusinya!"
              styles={{ color: "teal.400" }}
            >
              Sigmart solusinya!
            </Highlight>
          </Heading>
          <Text my={2}>
            Dapatkan barang-barang asli yang berkualitas, tahan lama, dan keren
            untuk memenuhi kebutuhan sehari-harimu, di Sigmart!
          </Text>
          <Divider my={2} orientation="horizontal" />
          <Button colorScheme="teal" leftIcon={<Icon as={FaBagShopping} />}>
            Beli sekarang!
          </Button>
        </Flex>
        <Center>
          <Image src="/sigmart-banner.png" />
        </Center>
      </SimpleGrid>
    </Center>
  );
}
