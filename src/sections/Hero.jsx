import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Highlight,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { sectionStyle } from "../lib";

export default function Hero() {
  return (
    <Center
      bgImg={'url("/assets/bg-hero.jpg")'}
      bgPos="top center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <SimpleGrid
        as="section"
        id="#"
        columns={1}
        spacing={4}
        sx={{ ...sectionStyle, minH: "20rem", maxW: "51rem" }}
      >
        <Flex
          bg="gray.50"
          _dark={{ bg: "gray.800" }}
          my={8}
          p={8}
          boxShadow="lg"
          rounded="xl"
          direction="column"
          justify="center"
        >
          <Heading size={{ base: "lg", md: "xl" }} my={2}>
            <Highlight query="DOA Sound System," styles={{ color: "blue.400" }}>
              DOA Sound System,
            </Highlight>
            <br />
            Pilihan Tepat untuk Acara Hebat!
            <br />
          </Heading>
          <Text my={2}>
            Buat acara spesial makin berkesan dengan layanan terbaik dari DOA
            Sound System! Tratak dan sound system berkualitas, plafon sesuai
            selera. DOA Sound System, solusi hajatan tanpa ribet, kualitas
            terjamin!
          </Text>
          <Divider my={2} orientation="horizontal" />
          <Button colorScheme="blue">Pesan sekarang!</Button>
        </Flex>
      </SimpleGrid>
    </Center>
  );
}
