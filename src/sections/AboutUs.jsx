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
      <Heading p={2} size={{ base: "sm", md: "md" }} color="teal.400">
        Tentang Kami
      </Heading>
      <Heading p={2}>Siapa kami sebenarnya?</Heading>
      <Box p={2} w={{ md: "500px", lg: "750px" }}>
        <Text align="justify" style={{ textAlignLast: "center" }}>
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
        w={{ base: "350px", md: "550px", lg: "750px" }}
        ratio={16 / 9}
      >
        <Youtube videoId="Tqgr19ze03Q" />
      </AspectRatio>
    </Flex>
  );
}
