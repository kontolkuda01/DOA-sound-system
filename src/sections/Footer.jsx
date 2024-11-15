import { Box, Flex, Link, List, ListItem, Text, Image } from "@chakra-ui/react";
import { sectionStyle } from "../lib";

export default function Footer() {
  return (
    <Flex
      direction="column"
      _dark={{ bg: "gray.700" }}
      sx={{ ...sectionStyle, py: 6, bg: "gray.800", color: "gray.50" }}
    >
      <Box>
        <Image src="/assets/logo.png" height={14} />
      </Box>
      <List my={4}>
        <ListItem my={1}>
          <Link href="#">Home</Link>
        </ListItem>
        <ListItem my={1}>
          <Link href="#about">Tentang Kami</Link>
        </ListItem>
        <ListItem my={1}>
          <Link href="#product">Produk Kami</Link>
        </ListItem>
      </List>
      <Text size="md">Copyright 2024. PT Yang Bikin Galih.</Text>
    </Flex>
  );
}
