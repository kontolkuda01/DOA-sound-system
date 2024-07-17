import { Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { sectionStyle } from "../lib";

export default function Footer() {
  return (
    <Flex
      direction="column"
      sx={{ ...sectionStyle, bg: "gray.800", color: "gray.50" }}
    >
      <Heading color="teal">Sigmart</Heading>
      <List my={2}>
        <ListItem>
          <Link href="#">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="#about">Tentang Kami</Link>
        </ListItem>
        <ListItem>
          <Link href="#product">Produk Kami</Link>
        </ListItem>
        <ListItem>
          <Link href="#testimonial">Testimoni</Link>
        </ListItem>
        <ListItem>
          <Link href="#contact">Kontak Kami</Link>
        </ListItem>
      </List>
      <Text size="md">Copyright 2024. PT Siaga Marketing Bersama.</Text>
    </Flex>
  );
}
