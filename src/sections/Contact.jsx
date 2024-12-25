import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { sectionStyle } from "../lib";
import { useState } from "react";

export default function Contact() {
  const sendMessage = () => {
    let msg = `Halo, saya ${name}.%0a"${text.replace(/(?:\r\n|\r|\n)/g, "%0a")}"`;
    window.open(
      `${atob("aHR0cHM6Ly93YS5tZS82MjgzODY1OTQ3MjY5P3RleHQ9")}${msg}`,
      "_blank",
    );
  };

  const clearForm = () => {
    setName("");
    setText("");
  };

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const nameErr = name === "";
  const textErr = text === "";
  return (
    <>
      <Flex
        as="section"
        id="contact"
        sx={sectionStyle}
        alignItems="center"
        direction="column"
      >
        <Heading p={2} size={{ base: "sm", md: "md" }} color="blue.400">
          Hubungi Kami
        </Heading>
        <Heading p={2}>Kami menunggumu!</Heading>
        <Box p={2} w={{ md: "500px", lg: "750px" }}>
          <Text align="center">
            Butuh Sound System ataupun yang lainnya? Segera pesan melalui form
            dibawah ini.
          </Text>
        </Box>
        <Flex mt={6} gap={4} direction="column" items="center">
          <Box>
            <FormControl
              isInvalid={nameErr}
              isRequired
              w={{ base: "300px", md: "500px", lg: "750px" }}
              p={2}
            >
              <FormLabel>Nama</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {!nameErr ? (
                <FormHelperText>
                  Masukkan nama supaya kamu mudah dikenali.
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  Nama wajib diisi. Masukkan nama supaya kamu mudah dikenali.
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={textErr}
              isRequired
              w={{ base: "300px", md: "500px", lg: "750px" }}
              p={2}
            >
              <FormLabel>Pesan</FormLabel>
              <Textarea
                placeholder="Masukkan pesanmu disini..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              {textErr && (
                <FormErrorMessage>Pesan wajib diisi.</FormErrorMessage>
              )}
            </FormControl>
            {!nameErr && !textErr && (
              <Button m={2} colorScheme="blue" onClick={sendMessage}>
                Kirim!
              </Button>
            )}
            {(name || text) && (
              <Button m={2} colorScheme="red" onClick={clearForm}>
                Bersihkan
              </Button>
            )}

            <Text fontSize="xs" my={2} color="gray.800">
              * tombol hanya akan muncul ketika semua kolom terisi.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
