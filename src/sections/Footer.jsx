import { Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { sectionStyle } from "../lib";

export default function Footer() {
  return (
    <Flex
      direction="column"
      sx={{ ...sectionStyle, bg: "gray.800", color: "gray.50" }}
    >
      <Heading color="teal">Sigmart</Heading>
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
        <ListItem my={1}>
          <Link href="#testimonial">Testimoni</Link>
        </ListItem>
        <ListItem my={1}>
          <Link href="#contact">Kontak Kami</Link>
        </ListItem>
      </List>
      <Text size="md">Copyright 2024. PT Siaga Marketing Bersama.</Text>
    </Flex>
  );
}
