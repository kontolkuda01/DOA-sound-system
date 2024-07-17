import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { sectionStyle } from "../lib";

export default function Products() {
  return (
    <Flex
      as="section"
      id="testimonial"
      sx={sectionStyle}
      alignItems="center"
      direction="column"
    >
      <Heading p={2} size={{ base: "sm", md: "md" }} color="teal.400">
        Testimoni
      </Heading>
      <Heading p={2}>Apa pendapat mereka?</Heading>
      <Box p={2} w={{ md: "500px", lg: "750px" }}>
        <Text align="center">
          Reputasi supermarket kami sangat unggul, banyak pelanggan yang sudah
          sangat menilai kami dalam menjual barang-barang di supermarket kami.
        </Text>
      </Box>
      <SimpleGrid
        mt={6}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Avatar src="/birjon.jpg" mb={2} />
            <Heading size="md">Legenda Birjon</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              &quot;Harganya murah, barang yang saya dapatkan juga selalu ada,
              pokoknya mantap lahh!!!&quot;
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Avatar src="/kobra.jpg" mb={2} />
            <Heading size="md">Kobo Kanaeru</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              &quot;Barangnya lengkap, tapi nggak ada ciki sama koyo.&quot;
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Avatar mb={2} />
            <Heading size="md">Dapa</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              &quot;Layoutnya dulu berantakan. Tetapi setelah menjadi donatur,
              layout di Sigmart jadi enak dilihat.&quot;
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}
