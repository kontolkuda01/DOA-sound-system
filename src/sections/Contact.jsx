import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { sectionStyle } from "../lib";

export default function Contact() {
  return (
    <Flex
      as="section"
      id="contact"
      sx={sectionStyle}
      alignItems="center"
      direction="column"
    >
      <Heading p={2} size={{ base: "sm", md: "md" }} color="teal.400">
        Kontak Kami
      </Heading>
      <Heading p={2}>Kami menunggumu!</Heading>
      <Box p={2} w={{ md: "500px", lg: "750px" }}>
        <Text align="center">
          Kamu sedang mencari pekerjaan? Kami juga sedang mencari pekerja.
          Hubungi kami lebih awal, supaya kamu bisa menjadi keluarga di Sigmart!
        </Text>
      </Box>
      <Flex mt={6} gap={4} direction="column" items="center">
        <form>
          <FormControl w={{ base: "300px", md: "500px", lg: "750px" }} p={2}>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormHelperText>Kami tidak akan menyebar emailmu.</FormHelperText>
          </FormControl>
          <FormControl w={{ base: "300px", md: "500px", lg: "750px" }} p={2}>
            <FormLabel>Nama</FormLabel>
            <Input type="text" />
            <FormHelperText>
              Masukkan nama supaya kamu mudah dikenali.
            </FormHelperText>
          </FormControl>
          <FormControl w={{ base: "300px", md: "500px", lg: "750px" }} p={2}>
            <FormLabel>Pesan</FormLabel>
            <Textarea placeholder="Masukkan pesanmu." />
          </FormControl>
          <Button m={2} colorScheme="teal">
            Kirim!
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}
