import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { sectionStyle } from "../lib";

export default function AboutUs() {
  return (
    <Flex
      id="about"
      sx={sectionStyle}
      as="section"
      alignItems="center"
      direction="column"
    >
      <Heading p={2} size={{ base: "sm", md: "md" }} color="teal.400">
        Tentang Kami
      </Heading>
      <Heading p={2}>Siapa kita sebenarnya?</Heading>
      <Box p={2} w={{ md: "500px", lg: "750px" }}>
        <Text align="center">
          Sigmart adalah supermarket yang saat ini sedang aktif di Planet
          Galaxy. Memiliki reputasi yang baik dengan pelanggan yang banyak,
          membuat banyak orang yang tertarik untuk berbelanja di sana. Dengan
          Alfachri sebagai bos dan Adit sebagai pegawai kasir, kini mereka
          bersama-sama telah mengungguli supermarket yang ada di Planet Galaxy.
        </Text>
      </Box>
      <Heading p={2} mt={8}>
        Jingle kami
      </Heading>
      <AspectRatio
        p={2}
        my={2}
        w={{ base: "400px", md: "550px", lg: "750px" }}
        ratio={16 / 9}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Tqgr19ze03Q?si=6IRCCFNlpxFD9dc1"
          title="Jingle Sigmart"
          frameBorder="0"
          allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture;
        web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </AspectRatio>
    </Flex>
  );
}

