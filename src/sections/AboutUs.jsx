import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { sectionStyle } from "../lib";

import Youtube from "react-lazyload-youtube";
import "react-lazyload-youtube/dist/index.css";

export default function AboutUs() {
  return (
    <Flex
      id="about"
      sx={{ ...sectionStyle, mt: 6 }}
      as="section"
      alignItems="center"
      direction="column"
    >
      <Heading p={2} size={{ base: "sm", md: "md" }} color="blue.400">
        Tentang Kami
      </Heading>
      <Heading p={2}>Siapa kami sebenarnya?</Heading>
      <Box p={2} w={{ md: "500px", lg: "750px" }}>
        <Text align="justify" style={{ textAlignLast: "center" }}>
          DOA Sound System menyediakan seluruh kebutuhan acara kamu mulai dari
          hajatan, sunatan dan lainnya. Menyediakan berbagai jenis sound system,
          tratak dan plafon, kursi dan meja acara hingga set prasmanan dengan
          harga yang relatif terjangkau. Serahkan kebutuhan hajatan anda kepada
          kami, biar DOA Sound System yang urus semuanya!
        </Text>
      </Box>
      <Heading p={2} mt={8}>
        Layanan kami
      </Heading>
      <AspectRatio
        p={2}
        my={2}
        w={{ base: "350px", md: "550px", lg: "750px" }}
        ratio={16 / 9}
      >
        <Youtube videoId="Cn34B65Tx3E" />
      </AspectRatio>
    </Flex>
  );
}
